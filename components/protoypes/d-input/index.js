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
    // onBlur
  }))

  _.methods(() => ({
    autofocus,
    setFocus,
    setState,
    validate,
    watchClearEvent
  }))
}

/** HOOKS */

const beforeOnInit = ({ state, queryOnce, props, methods }) => {}

const afterOnInit = ({ queryOnce, state, props, methods }) => {
  methods.autofocus(queryOnce)
  methods.validate(queryOnce('input'), props, state)
  methods.watchClearEvent(props, state)
}

/**LISTENERS */

const onKeyUp = ({ on, queryOnce, state, props, methods }) => {
  on('keyup', 'input', ({ target }) => {
    methods.setState(state, { value: target.value })
    methods.validate(target, props, state)
  })

  methods.setFocus(queryOnce('input'), state)
}

/**METHODS */

const setFocus = (target, state) => {
  target.focus()
  const valueLength = target.value.length
  target.setSelectionRange(valueLength, valueLength)
}

const autofocus = (queryOnce) => {
  const input = queryOnce('input')
  const autofocus = input.getAttribute('autofocus')

  setTimeout(() => {
    if (autofocus === null) return
    queryOnce('input').focus()
  }, 500)
}

const validate = (target, props, state) => {
  const dataPrpos = props.get()
  if (!dataPrpos.validate || !dataPrpos.validators) return
  const validators = dataPrpos.validators || []
  for (let validator of validators) {
    const { isValid, error } = validator(target)
    state.set({
      ...state.get(),
      hasError: !isValid,
      error: { isValid, isInvalid: !isValid, ...error }
    })
    if (!isValid) break
  }
}

const watchClearEvent = (props, state) => {
  const { events } = props.get()
  if (!events || !events.hasOwnProperty('eventDrive')) return
  const { eventDrive, eventName, action } = events
  const handler = {
    [action]: (payload) => {
      clearInput(props, state, payload)
    }
  }

  eventDrive.on(eventName, handler[action])
}

const clearInput = (props, state, payload) => {
  const { error } = state.get()
  error.isValid = false
  error.isInvalid = !error.isValid
  const input = { value: '', hasError: true, error }
  setState(state, { ...input, error })
}

const setError = (state, error) => {
  setState(state, { error })
}

const setProps = (props, payload) => {
  props.set({ ...props.get(), ...payload })
}

const setState = (state, payload) => {
  state.set({ ...state.get(), ...payload })
}
