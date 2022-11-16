import { componentFactory } from '../../../lib/component.factory.js'
import { input } from '../../protoypes/d-input/index.js'

export const inputCityFactory = () => {
  const [ddsInput, ddsInputCityState, ddsInputCityWatcher] = input()
  const ddsInputCity = componentFactory(ddsInput)

  ddsInputCity.register(document.querySelector('dds-input-city'))
  ddsInputCity.setProps({ label: 'Cidade:' })

  return {
    ddsInputCity,
    ddsInputCityState,
    ddsInputCityWatcher
  }
}
