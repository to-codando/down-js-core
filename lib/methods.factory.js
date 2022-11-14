import { validatorFactory } from "./validators.js"
import { errorFactory } from "./errorFactory.js"

export const methodsFactory = (state, props) => {
	const _methods = {}
  const _validator = validatorFactory(errorFactory)

  const get = () => {
    return ({..._methods})
  }

	const add = (decorators) => {
    _validator.validateMethods(decorators)    

    for (let index in decorators) {
      _methods[index] = decorators[index]
    }
	}

	return {
    add,
    get
  }
}
