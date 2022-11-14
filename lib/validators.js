const _validateValueAndType = (value, type) => {
  return !!value && typeof value === type
}

export const isFunction = (value) => _validateValueAndType(value, 'function')

export const isString = (value) => _validateValueAndType(value, 'string')

export const isObject = (value) =>
  value && value === Object(value) && !Array.isArray(value)

export const validatorFactory = (errorFactory) => {
  const _error = errorFactory()

  const _validators = {
    function: isFunction,
    string: isString,
    object: isObject
  }

  const _validHookList = [
    'beforeOnInit',
    'afterOnInit',
    'beforeOnRender',
    'afterOnRender'
  ]

  const typeValidate = (value, type) => {
    const keyName = Object.keys(value)[0]
    const targetValue = value[keyName]

    if (_validators[type](targetValue)) return
    _error.emit(_error.get(type), keyName)
  }

  const validateHooks = (hooks) => {
    typeValidate({ hooks }, 'object')

    const typeError = 'hookKey'
    const hookList = Object.keys(hooks)

    const _invalidHooks = hookList.map((hook) => {
      return _validHookList.every((validHook) => validHook !== hook)
    })

    _invalidHooks.forEach((hook, index) => {
      if (_invalidHooks[index])
        _error.emit(_error.get(typeError), hookList[index])
    })
  }

  const validateMethods = (methods) => {
    typeValidate({ methods }, 'object')
    const typeError = 'method'

    const keys = Object.keys(methods)

    keys.forEach((key) => {
      if (isFunction(methods[key])) return
      _error.emit(_error.get(typeError), key)
    })
  }

  return {
    typeValidate,
    validateHooks,
    validateMethods
  }
}
