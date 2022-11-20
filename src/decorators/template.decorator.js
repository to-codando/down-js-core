import { taggedTemplate } from "../tagTemplate.js"

export const templateDecorator = (decorations, resources) => {
	const html = taggedTemplate
  
	const state = decorations.state.get()
  const props = decorations.props.get()

	const template = resources.template.bind(null, { html, state, props })
	return Object.assign({}, decorations, {template})
}
