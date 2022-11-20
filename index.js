import { componentFactory } from './src/component.factory.js'
export { required, isEmail, isPhone, isUF, isCEP } from './src/validators.js'

export const dawnJS = {
  component: { create: componentFactory }
}
