import { errorFactory } from './errorFactory.js'
import { observerFactory } from './observer.factory.js'
import { viewFactory } from './viewFactory.js'
import { validatorFactory } from './validators.js'
import { hooksFactory } from './hooks.factory.js'
import { methodsFactory } from './methods.factory.js'
import { eventsFactory } from './events.factory.js'
import { childrenFactory } from './children.factory.js'

export const componentFactory = (factory) => {
  const _state = observerFactory({})
  const _props = observerFactory({})
  const _methods = methodsFactory(_state, _props)
  const _validator = validatorFactory(errorFactory)

  const _hooks = hooksFactory({
    state: _state,
    props: _props,
    methods: _methods
  })

  const _events = eventsFactory({
    state: _state,
    props: _props,
    methods: _methods
  })

  const _children = childrenFactory({
    componentFactory,
    parentState: _state,
    parentProps: _props
  })

  const _view = viewFactory({ events: _events, children: _children })

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

  const setChildren = (selector, children) => {
    _children.add(selector, children)
  }

  const setProps = (dataProps) => {
    _props.set({ ..._props.get(), ...dataProps })
  }

  const register = (element) => {
    _state.on(render)
    _view.register(element)
    _children.init(element)
    _hooks.emit('onDispatchHook', { hookName: 'beforeOnInit' })
  }

  const render = () => {
    _hooks.emit('onDispatchHook', { hookName: 'beforeOnRender' })
    _view.render({
      props: _props.get(),
      state: _state.get()
    })
    _hooks.emit('onDispatchHook', { hookName: 'afterOnRender' })
  }

  const init = () => {
    render()
    _hooks.emit('onDispatchHook', { hookName: 'afterOnInit' })
  }

  const getState = () => _state
  const getProps = () => _props

  factory({
    view,
    events,
    hooks,
    methods
  })

  return {
    setChildren,
    setProps,
    register,
    render,
    init,
    getState,
    getProps
  }
}
