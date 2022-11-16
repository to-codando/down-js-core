import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputEmailFactory = () => {
  const [ddsInput, ddsInputEmailState, ddsInputEmailWatcher] = input()
  const ddsInputEmail = componentFactory(ddsInput)

  ddsInputEmail.register(document.querySelector('dds-input-email'))
  ddsInputEmail.setProps({ label: 'E-mail:' })

  return {
    ddsInputEmail,
    ddsInputEmailState,
    ddsInputEmailWatcher
  }
}
