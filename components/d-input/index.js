import { observerFactory } from '../../lib/observer.factory.js'
import { pubsubFactory } from '../../lib/pubsub.factory.js'

const styles = ({ css }) => css`
  #ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  #ctx input {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const template = ({ state, props, html, children }) => {
  return html` <input type="text" /> `
}

export const inputState = observerFactory({
  value: ''
})

export const inputWatcher = pubsubFactory()

export const input = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit
  }))

  _.events(() => ({
    onKeyUp
  }))

  _.methods(() => ({
    onStateChanges
  }))
}

/** HOOKS */

const beforeOnInit = ({ state, props }) => {
  onStateChanges(state, emitStateChanges)
}

/**LISTENERS */

const onKeyUp = ({ on }) => {
  on('keyup', 'input', ({ target: { value } }) => emitStateChanges({ value }))
}

/**METHODS */

const onStateChanges = (state, callback) => {
  state.on(callback)
}

const emitStateChanges = (newState) => {
  inputState.set({ ...inputState.get(), ...newState })
}

const onPropsChanges = (props, callback) => {
  props.on(callback)
}
