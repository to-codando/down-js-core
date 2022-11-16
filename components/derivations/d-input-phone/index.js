import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputPhoneFactory = () => {
  const [ddsInput, ddsInputPhoneState, ddsInputPhoneWatcher] = input()
  const ddsInputPhone = componentFactory(ddsInput)

  ddsInputPhone.register(document.querySelector('dds-input-phone'))
  ddsInputPhone.setProps({ label: 'Phone:' })

  return {
    ddsInputPhone,
    ddsInputPhoneState,
    ddsInputPhoneWatcher
  }
}
