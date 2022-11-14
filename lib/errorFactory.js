export const errorFactory = () => {
  const _messages = {
    function: 'is not a function and must be.',
    string: 'is not a string and must be.',
    object: 'is not a object and must be.',
    hookKey: 'is not valid hook key and must be.',
    method: 'method is not a function and must be.'
  }

  const emit = (message, paramName) => {
    const exception = `${paramName} ${message} `
    throw new Error(exception)
  }

  const get = (key) => {
    return _messages[key]
  }

  return {
    get,
    emit
  }
}
