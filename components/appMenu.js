const styles = ({ css }) => css`
  #ctx {
    display: flex;
    width: 100%;
  }
  .ctx-menu {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin: 0;
    border: 1px #ccc solid;
    border-radius: 5px;
  }

  .ctx-menu li {
    list-style: none;
    color: #666;
  }
  .ctx-menu li + li {
    margin-left: 1rem;
  }

  .ctx-menu li + li::before {
    content: '.';
    margin-right: 1rem;
  }

  @media all and (max-width: 980px) {
    .ctx-menu {
      flex-wrap: wrap;
    }
    .ctx-menu li {
      display: flex;
      width: 100%;
      padding: 1rem;
    }
    .ctx-menu li + li {
      margin-left: 0;
      margin-top: 0;
      border-top: 1px #ccc dotted;
    }
    .ctx-menu li::before {
      display: none;
    }
    .ctx-menu li:first-of-type {
      padding-top: 0;
    }
    .ctx-menu li:last-of-type {
      padding-bottom: 0;
    }
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
