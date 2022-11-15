import { componentFactory } from './lib/index.js'
import { header } from './components/appHeader.js'
import { menu } from './components/appMenu.js'

import { input, inputState, inputWatcher } from './components/d-input/index.js'

// const appMenu = componentFactory()

const appInput = componentFactory(input)
appInput.register(document.querySelector('app-input'))
// appHeader.setProps({ label: 'Um subtítulo para o component' })
// appHeader.setChildren('app-logo', menu)
appInput.init()

inputState.on((data) => console.log('Novo valor: ', data))

// console.log(appHeader)
