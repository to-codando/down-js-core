export const childrenFactory = ({
  componentFactory,
  parentState,
  parentProps,
  hooks
}) => {
  let _children = []

  const _createTag = (selector) => {
    return `<${selector}></${selector}>`
  }

  const _getChildrenTags = () => {
    return _children.map((child) => child.tag).join('')
  }

  const _getChildrenElement = (parentElement, child) => {
    let nodeElement =
      parentElement.querySelector(child.selector) ||
      parentElement.querySelector('slot')

    if (nodeElement.tagName === 'SLOT') {
      const childrenTags = _getChildrenTags()
      nodeElement.insertAdjacentHTML('afterend', childrenTags)
      nodeElement = parentElement.querySelector(child.selector)
      parentElement.querySelector('slot').remove()
    }

    return nodeElement
  }

  const add = (selector, child) => {
    const component = componentFactory(child)
    const tag = _createTag(selector)
    _children = [..._children, { component, selector, tag }]
  }

  const render = (parentElement) => {
    _children.forEach((child) => {
      const element = _getChildrenElement(parentElement, child)
      child.component.register(element)
      child.component.init()
    })
  }

  const init = (parentElement) => {
    const renderChild = () => render(parentElement)

    parentState.on(renderChild)
    parentProps.on(renderChild)

    renderChild()
  }

  return {
    add,
    render,
    init
  }
}
