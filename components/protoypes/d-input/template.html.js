export default ({ state, props, html, children }) => {
  return html`
    <input
      type="text"
      value="${state.value}"
      placeholder="."
      ${props.focus ? 'autofocus' : ''}
      class="${state.hasError ? 'input-error' : ''}"
    />
    <i class="material-symbols-rounded icon-disabled"> block </i>
    <span>${props?.label}</span>

    ${state.hasError ? html`<div class="error-message">${state.error.message}</div>` : ''}
  `
}
