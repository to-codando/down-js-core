import { observerFactory } from '../observer.factory.js'

export const stateDecorator = (decorations) => {
  let state = decorations.state 

  if(typeof state !== 'object') state = {}

  return Object.assign({}, observerFactory(state))
  
}