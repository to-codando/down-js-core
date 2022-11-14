const styles = ({ css }) => css`
  .ctx-menu {
    background: blue;
    border: 5px red solid;
    padding: 1rem;
    color: #fff;
  }
`

const template = ({ state, props, html }) => {
  const { data } = props

  return html`
    <ul class="ctx-menu">
      ${props.data
        .map((item) => html` <li>${item.title} ${state.counter || '0'}</li> `)
        .join('')}
    </ul>
  `
}

export const menu = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit
  }))

  _.events(() => ({
    onClickTitle
  }))

  _.methods(() => ({
    logger,
    setProps,
    setState
  }))
}

const beforeOnInit = ({ props, state, methods }) => {
  const data = [
    { title: 'Primeiro item' },
    { title: 'Segundo item' },
    { title: 'Terceiro item' }
  ]
  methods.setProps(props, { data })
  methods.setState(state, { counter: 0 })
}

const onClickTitle = ({ on, state, methods }) => {
  on('click', 'li', () => methods.logger(state, { increment: 1 }))
}

const logger = (state, { increment }) => {
  const oldState = state.get()
  const newState = { ...state.get(), counter: oldState.counter + increment }
  state.set(newState)
}

const setProps = (props, value) => {
  props.set({ ...value })
}

const setState = (state, value) => {
  state.set({ ...value })
}
