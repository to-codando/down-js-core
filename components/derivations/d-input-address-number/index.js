import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputAddressNumberFactory = () => {
  const [ddsInput, ddsInputAddressNumberState, ddsInputAddressNumberWatcher] = input()
  const ddsInputAddressNumber = componentFactory(ddsInput)

  ddsInputAddressNumber.register(document.querySelector('dds-input-address-number'))
  ddsInputAddressNumber.setProps({ label: 'Número:' })

  return {
    ddsInputAddressNumber,
    ddsInputAddressNumberState,
    ddsInputAddressNumberWatcher
  }
}
