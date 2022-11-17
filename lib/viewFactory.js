import { uuid } from './uuid.js'
import { validatorFactory } from './validators.js'
import { errorFactory } from './errorFactory.js'
import { domFactory } from './dom.factory.js'
import { taggedTemplate } from './tagTemplate.js'

export const viewFactory = ({ events, children, tagName }) => {
  const _view = {}
  const _validator = validatorFactory(errorFactory)
  const dom = {}
  let _element = null
  let _componentId = ''

  const _applyContext = (text, id) => text.replace(/ctx/gi, `${_componentId}`)

  const _bindStyles = () => {
    const styleExists = document.querySelector(`style#${_componentId}`)
    if (styleExists) return

    const styleElement = document.createElement('style')
    styleElement.setAttribute('id', _componentId)

    const css = taggedTemplate
    const styles = _view.styles({ css })

    styleElement.innerHTML = _applyContext(styles, _componentId)
    document.querySelector('head').append(styleElement)
    _element.setAttribute('id', _componentId)
  }

  const add = (key, factory) => {
    _validator.typeValidate({ key }, 'string')
    _validator.typeValidate({ factory }, 'function')

    _view[key] = factory
  }

  const render = ({ props, state }) => {
    // console.log(props, state)
    _validator.validateElement(_element, tagName)
    _bindStyles()
    const html = taggedTemplate
    const template = _view.template({
      props,
      state,
      html
    })
    _element.innerHTML = _applyContext(template, `${_componentId}-`)
    events.init(dom)

    children.init(_element)
  }

  const register = (element) => {
    _validator.validateElement(element, tagName)
    _element = element
    const selector = element.getAttribute('component') || element.tagName.toLowerCase()
    _componentId = `${selector}-${uuid()}`
    Object.assign(dom, domFactory(element))
  }

  const init = (callback) => {
    callback()
  }

  return {
    add,
    register,
    render,
    init,
    dom
  }
}
