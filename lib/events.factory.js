import { validatorFactory } from "./validators.js"
import { errorFactory } from "./errorFactory.js"

export const eventsFactory = ({ state, props, methods }) => {
	const _events = {}
  const _validator = validatorFactory(errorFactory)

  const get = () => {
    return ({..._events})
  }

	const add = (decorators) => {
    _validator.validateMethods(decorators)    

    for (let index in decorators) {
      _events[index] = decorators[index]
    }
	}

  const init = (dom) => {
    const events = get()
    for (let index in events){
      events[index]({ state, props, methods: methods.get(), ...dom })
    }
  }

	return {
    add,
    get,
    init
  }
}
