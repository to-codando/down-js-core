import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputUFFactory = () => {
  const [ddsInput, ddsInputUFState, ddsInputUFWatcher] = input()
  const ddsInputUF = componentFactory(ddsInput)

  ddsInputUF.register(document.querySelector('dds-input-uf'))
  ddsInputUF.setProps({ label: 'UF:' })

  return {
    ddsInputUF,
    ddsInputUFState,
    ddsInputUFWatcher
  }
}
