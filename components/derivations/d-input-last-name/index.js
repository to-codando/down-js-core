import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputLastNameFactory = () => {
  const [ddsInput, ddsInputLastNameState, ddsInputLastNameWatcher] = input()
  const ddsInputLastName = componentFactory(ddsInput)

  ddsInputLastName.register(document.querySelector('dds-input-last-name'))
  ddsInputLastName.setProps({ label: 'Sobrenome:' })

  return {
    ddsInputLastName,
    ddsInputLastNameState,
    ddsInputLastNameWatcher
  }
}
