import { componentFactory } from './lib/index.js'
import { header } from './components/appHeader.js'
import { menu } from './components/appMenu.js'

// const appMenu = componentFactory()

const appHeader = componentFactory(header)
appHeader.register(document.querySelector('[component=app-header]'))
appHeader.setProps({ label: 'Um subtítulo para o component' })
appHeader.setChildren('app-menu', menu)
appHeader.init()

// console.log(appHeader)
