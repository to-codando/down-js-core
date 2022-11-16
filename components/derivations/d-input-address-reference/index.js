import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputAddressReference = () => {
  const [ddsInput, ddsInputAddressReferenceState, ddsInputAddressReferenceWatcher] = input()
  const ddsInputAddressReference = componentFactory(ddsInput)

  ddsInputAddressReference.register(document.querySelector('dds-input-address-reference'))
  ddsInputAddressReference.setProps({ label: 'Referência:' })

  return {
    ddsInputAddressReference,
    ddsInputAddressReferenceState,
    ddsInputAddressReferenceWatcher
  }
}
