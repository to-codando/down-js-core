const styles = ({ selector, css }) => css``

const template = ({ state, props, html }) => {

  const { data } = props 

  return html`
    <ul>
      ${
        props.data.map( item => html`
          <li>${item.title}</li>
        `).join('')
      }
    </ul>
  `
}

export const menu = (_) => {

  _.view(() => ({
    template, 
    styles,
  }))

  _.hooks(() => ({
    beforeOnInit, 
  }))

  _.events(() => ({
    onClickTitle
  }))

  _.methods(() => ({
    logger,
    setState,
  }))

}

const beforeOnInit = ({ props, methods }) => {

  const data = [
    {title: 'Primeiro item'},
    {title: 'Segundo item'},
    {title: 'Terceiro item'},
  ]

  methods.setState(props, {data})
}

const onClickTitle = ({ on, state, methods }) => {
  on('click', 'h1', methods.logger)
}

const logger = ({target}) => {
  console.log(target)
}

const setState = (props, value) => {
  props.set({ ...value })
}




