import { errorFactory } from './errorFactory.js'
import { observerFactory } from './observer.factory.js'
import { viewFactory } from './viewFactory.js'
import { validatorFactory } from './validators.js'
import { hooksFactory } from './hooks.factory.js'
import { methodsFactory } from './methods.factory.js'
import { eventsFactory } from './events.factory.js'
import { childrenFactory } from './children.factory.js'
import { pubsubFactory } from './pubsub.factory.js'
import { domFactory } from './dom.factory.js'

export const componentFactory = (factory) => {
  const _eventDrive = pubsubFactory()
  const _state = observerFactory({})
  const _props = observerFactory({})
  const _methods = methodsFactory(_state, _props)
  const _validator = validatorFactory(errorFactory)
  const _factoryName = factory.name
  let dom = {}
  let target = null

  const _hooks = hooksFactory({
    getDom: () => _view,
    state: _state,
    props: _props,
    methods: _methods,
    element: target
  })

  const _events = eventsFactory({
    state: _state,
    props: _props,
    methods: _methods
  })

  const _children = childrenFactory({
    componentFactory,
    parentState: _state,
    parentProps: _props,
    hooks: _hooks
  })

  const _view = viewFactory({
    events: _events,
    children: _children,
    tagName: _factoryName
  })

  const view = (viewDecorator) => {
    _validator.typeValidate({ viewDecorator }, 'function')

    const decorators = viewDecorator()

    _view.add('template', decorators?.template)
    _view.add('styles', decorators?.styles)
  }

  const events = (eventsDecorator) => {
    _validator.typeValidate({ eventsDecorator }, 'function')
    const decorators = eventsDecorator()
    _events.add(decorators)
  }

  const hooks = (hooksDecorator) => {
    _validator.typeValidate({ hooksDecorator }, 'function')
    const decorators = hooksDecorator()
    _hooks.add(decorators)
    _hooks.watch()
  }

  const methods = (methodsDecorator) => {
    _validator.typeValidate({ methodsDecorator }, 'function')
    const decorators = methodsDecorator()
    _methods.add(decorators)
  }

  const children = (selector, children) => {
    _children.add(selector, children)
    return children
  }

  const onEvent = (eventName, callback) => {
    return _eventDrive.on(eventName, callback)
  }
  const offEvent = (handler) => {
    return _eventDrive.off(handler)
  }
  const emitEvent = () => {
    _eventDrive.emit()
  }
  const viewEvent = (eventName, payload) => {
    _eventDrive.view()
  }

  const getState = () => {
    return _state.get()
  }

  const setState = (payload) => {
    _state.set({ ..._state.get(), ...payload })
  }

  const watchState = (callback) => {
    return _state.on(callback)
  }

  const offState = (handler) => {
    return _state.off(handler)
  }

  const viewState = () => {
    return _state.view()
  }

  const setProps = (payload) => {
    _props.set({ ..._props.get(), ...payload })
    _hooks.emit('onDispatchHook', { hookName: 'afterOnPropsChange' })
  }

  const getProps = () => {
    return _props.get()
  }

  const watchProps = (eventName, callback) => {
    return _props.on(eventName, callback)
  }

  const offProps = (handler) => {
    return _props.off(handler)
  }
  const viewProps = () => {
    return _props.view()
  }

  const register = (selector, context) => {
    const element = context.querySelector(`[data-component="${selector}"]`)
    _state.on(render)
    _props.on(render)
    _view.register(element, dom)
    _children.init(element)
    _hooks.emit('onDispatchHook', { hookName: 'beforeOnInit' })
  }

  const render = () => {
    _hooks.emit('onDispatchHook', { hookName: 'beforeOnRender' })
    _view.render({
      props: getProps(),
      state: getState()
    })
    _hooks.emit('onDispatchHook', { hookName: 'afterOnRender' })
  }

  const init = () => {
    render()
    _hooks.emit('onDispatchHook', { hookName: 'afterOnInit' })
  }

  factory({
    view,
    events,
    hooks,
    methods
  })

  return {
    children,
    register,
    // render,
    init,

    props: {
      set: setProps,
      get: getProps,
      on: watchProps,
      off: offProps,
      view: viewProps
    },

    state: {
      set: setState,
      get: getState,
      on: watchState,
      off: offState,
      view: viewState
    },

    eventDrive: {
      emit: emitEvent,
      off: offEvent,
      on: onEvent,
      view: viewEvent
    }
  }
}
