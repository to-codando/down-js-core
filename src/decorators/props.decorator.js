import { observerFactory } from '../observer.factory.js'

export const propsDecorator = (decorations = {}) => {
  let props = decorations.props

  if(!props || typeof props !== 'object') props = {}

  return Object.assign({}, observerFactory(props))
  
}