import { pubsubFactory } from "./pubsub.factory.js"
import { validatorFactory } from "./validators.js"
import { errorFactory } from "./errorFactory.js"

export const hooksFactory = ({state, props, methods}) => {

	const _listeners = pubsubFactory()
	const _hooks = {}
  const _validator = validatorFactory(errorFactory)

  const _getHook = ({hookName}) => _hooks[hookName]

  const _executeHook = (hook) => {
    hook({ state, props, methods: { ...methods.get() }})
  }

	const add = (decorators) => {
    _validator.validateHooks(decorators)    

    for (let index in decorators) {
      _hooks[index] = decorators[index]
    }
	}

  const emit = (eventName, payload) => {
    _listeners.emit(eventName, payload)
  }

  const on = (eventName, callback) => {
    _listeners.on(eventName, callback)
  }

  const watch = () => {
    _listeners.on('onDispatchHook', (payload) => {
      const hook = _getHook(payload)
      if(!hook) return
      _executeHook(hook)
    })
  }

	return {
    add,
    emit,
    on,
    watch
  }
}
