export default ({ state, props, html, children }) => {
  return html`
    <input type="text" value="${state.value}" placeholder="Label input" />
    <i class="material-symbols-rounded icon-disabled"> block </i>
    <span>${props?.label}</span>
  `
}
