import { observerFactory } from '../../../lib/observer.factory.js'
import { pubsubFactory } from '../../../lib/pubsub.factory.js'

import template from './template.html.js'
import styles from './styles.css.js'

export const input = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit,
    afterOnInit
  }))

  _.events(() => ({
    onKeyUp
  }))

  _.methods(() => ({
    setState,
    focusOnInit
  }))
}

/** HOOKS */

const beforeOnInit = ({ state, props, methods }) => {}
const afterOnInit = ({ queryOnce, state, props, methods }) => {
  methods.focusOnInit(props, queryOnce)
}

/**LISTENERS */

const onKeyUp = ({ on, queryOnce, state, methods }) => {
  on('keyup', 'input', ({ target: { value } }) => {
    methods.setState(state, { value })
  })

  const input = queryOnce('input')
  input.focus()
  const valueLength = input.value.length
  input.setSelectionRange(valueLength, valueLength)
}

/**METHODS */

const setState = (state, payload) => {
  state.set({ ...state.get(), ...payload })
  console.log(payload)
}

const focusOnInit = (props, queryOnce) => {
  const { focus } = props.get()
  setTimeout(() => {
    if (!focus) return
    const input = queryOnce('input')
    console.log(input)
    const valueLength = input.value.length
    input.focus()
    input.setSelectionRange(valueLength, valueLength)
  }, 100)
}
