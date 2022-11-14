const styles = ({ css }) => css`
  .ctx-title {
    color: red;
  }
`

const template = ({ state, props, html, children }) => {
  return html`
    <h1 class="ctx-title">${state.title} - ${state.counter || '0'}</h1>
    <p>${props.label}</p>
    <slot></slot>
    ${children}
  `
}

export const header = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    afterOnInit,
    beforeOnInit
  }))

  _.events(() => ({
    onClickTitle
  }))

  _.methods(() => ({
    logger,
    setState,
    setProps,
    getState
  }))
}

const beforeOnInit = ({ state, methods }) => {
  methods.setState(state, { title: 'Novo Título', counter: 0 })
}

const afterOnInit = ({ props, methods }) => {
  methods.setProps(props, { label: 'Novo Subtitulo para o header' })
  console.log('xxxxxxxxxxxxxxx')
}

const onClickTitle = ({ on, state, methods }) => {
  on('click', 'h1', ({ target }) => methods.logger(state, { increment: 1 }))
}

const logger = (state, { increment }) => {
  const oldState = state.get()
  const newState = { ...state.get(), counter: oldState.counter + increment }
  state.set(newState)
  console.log(state.get())
}

const setState = (state, value) => {
  state.set({ ...value })
}

const setProps = (props, value) => {
  props.set({ ...value })
}

const getState = (state) => {
  console.log(state.get())
}
