export default ({ props, state, html }) => {
  return html` <button ${props.disabled ? 'disabled' : ''}>${props.label}</button> `
}
