import { validatorFactory } from './validators.js'
import { errorFactory } from './errorFactory.js'
import { domFactory } from './dom.factory.js'
import { taggedTemplate } from './tagTemplate.js'

export const viewFactory = ({ events, children }) => {
  const _view = {}
  const _validator = validatorFactory(errorFactory)
  const _dom = {}
  let _element = null

  const add = (key, factory) => {
    _validator.typeValidate({ key }, 'string')
    _validator.typeValidate({ factory }, 'function')

    _view[key] = factory
  }

  const render = ({ props, state }) => {
    const html = taggedTemplate
    _element.innerHTML = _view.template({ props, state, html })
    events.init(_dom)
    children.init(_element)
  }

  const register = (element) => {
    _element = element
    Object.assign(_dom, domFactory(element))
  }

  const init = (callback) => {
    callback()
  }

  return {
    add,
    register,
    render,
    init
  }
}
