const styles = ({ selector, css }) => css``

const template = ({ state, props, html }) => {
  return html`
    <h1>${state.title} - ${state.counter || '0'}</h1>
    <p>${props.label}</p>
    <app-menu></app-menu>
  `
}

export const header = (_) => {

  _.view(() => ({
    template, 
    styles,
  }))

  _.hooks(() => ({
    // afterOnInit,
    beforeOnInit, 
  }))

  _.events(() => ({
    onClickTitle
  }))

  _.methods(() => ({
    logger,
    setState,
    getState
  }))

}

const beforeOnInit = ({ state, methods }) => {
  methods.setState(state, {title: 'Novo Título', counter:0})
}

const afterOnInit = ({ state, methods }) => {
  methods.getState(state)
}

const onClickTitle = ({ on, state, methods }) => {
  on('click', 'h1', ({target}) => methods.logger(state, {increment: 1}))
}

const logger = (state, {increment}) => {
  const oldState = state.get()
  const newState = { ...state.get(), counter: oldState.counter + increment }
  state.set(newState)
  console.log(state.get())
}

const setState = (state, value) => {
  state.set({ ...value })
}

const getState = (state) => {
  console.log(state.get())
}





