import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputNameFactory = () => {
  const [inputName, ddsInputNameState, ddsInputNameWatcher] = input()
  const ddsInputName = componentFactory(inputName)

  ddsInputName.register(document.querySelector('dds-input-name'))
  ddsInputName.setProps({ label: 'Nome:' })

  return {
    ddsInputName,
    ddsInputNameState,
    ddsInputNameWatcher
  }
}
