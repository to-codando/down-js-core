export const domFactory = (context) => {
  const on = (eventName, selector, handler) => {
    const target = queryAll(selector)
    const elements = Array.isArray(target) ? target : [target]

    elements.forEach((element) => {
      element.addEventListener(eventName, (event) => handler({ event, target: element }))
    })
  }

  const queryOnce = (selector) => {
    return context.querySelector(selector)
  }

  const queryAll = (selector) => {
    return Array.from(context.querySelectorAll(selector))
  }

  return {
    on,
    queryOnce,
    queryAll,
    appElement: context
  }
}
