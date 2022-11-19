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
  let componentId = ''

  const _applyContext = (text, type) => text.replace(/ctx/gi, `data-ctx=${type}`)

  const _bindStyles = () => {
    const type = _element.dataset.ctx
    const styleExists = document.querySelector(`style[data-ctx="${type}"]`)
    if (styleExists) return

    const styleElement = document.createElement('style')
    styleElement.dataset.ctx = tagName

    const css = taggedTemplate
    const styles = _view.styles({ css })

    styleElement.innerHTML = _applyContext(styles, type)
    document.querySelector('head').append(styleElement)
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
    _element.innerHTML = _applyContext(template, `${componentId}-`)
    events.init(dom)

    children.init(_element)
  }

  const getSelector = (element) => {
    return element.getAttribute('component') || element.tagName.toLowerCase()
  }

  const getComponentId = (selector) => `${selector}-${uuid()}`

  const register = (element) => {
    _validator.validateElement(element, tagName)
    element.dataset.ctx = tagName
    _element = element
    const selector = getSelector(element)
    componentId = getComponentId(selector)
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
    dom,
    componentId
  }
}
