import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputAddressFactory = () => {
  const [ddsInput, ddsInputAddressState, ddsInputAddressWatcher] = input()
  const ddsInputAddress = componentFactory(ddsInput)

  ddsInputAddress.register(document.querySelector('dds-input-address'))
  ddsInputAddress.setProps({ label: 'Logradouro:' })

  return {
    ddsInputAddress,
    ddsInputAddressState,
    ddsInputAddressWatcher
  }
}
