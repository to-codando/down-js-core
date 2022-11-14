export const childrenFactory = ({componentFactory, parentState, parentProps }) => {
  let _children = []

  const add = (selector, child) => {
    const component = componentFactory(child)
    _children = [..._children, {component, selector}]
  }

  const render = (parentElement) => {
    _children.forEach( child => {
      const element = parentElement.querySelector(child.selector)
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