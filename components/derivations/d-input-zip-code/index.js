import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputZipCodeFactory = () => {
  const [ddsInput, ddsZipCodeState, ddsZipCodeWatcher] = input()
  const ddsZipCode = componentFactory(ddsInput)

  ddsZipCode.register(document.querySelector('dds-input-zip-code'))
  ddsZipCode.setProps({ label: 'CEP:' })

  return {
    ddsZipCode,
    ddsZipCodeState,
    ddsZipCodeWatcher
  }
}
