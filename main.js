import { componentFactory } from './lib/index.js'
import { header } from './components/appHeader.js'
import { menu } from './components/appMenu.js'

import { input } from './components/protoypes/d-input/index.js'
import {
  inputNameFactory,
  inputLastNameFactory,
  inputEmailFactory,
  inputPhoneFactory,
  inputUFFactory,
  inputCityFactory,
  inputZipCodeFactory,
  inputAddressFactory,
  inputAddressNumberFactory,
  inputAddressReference
} from './components/index.js'

// const appMenu = componentFactory()

const { ddsInputName, ddsInputNameState, ddsInputNameWatcher } = inputNameFactory()
const { ddsInputLastName, ddsInputLastNameState, ddsInputLastNameWatcher } = inputLastNameFactory()
const { ddsInputEmail, ddsInputEmailState, ddsInputEmailWatcher } = inputEmailFactory()
const { ddsInputPhone, ddsInputPhoneState, ddsInputPhoneWatcher } = inputPhoneFactory()
const { ddsInputUF, ddsInputUFState, ddsInputUFWatcher } = inputUFFactory()
const { ddsInputCity, ddsInputCityState, ddsInputCityWatcher } = inputCityFactory()
const { ddsZipCode, ddsZipCodeState, ddsZipCodeWatcher } = inputZipCodeFactory()
const { ddsInputAddress, ddsInputAddressState, ddsInputAddressWatcher } = inputAddressFactory()
const { ddsInputAddressNumber, ddsInputAddressNumberState, ddsInputAddressNumberWatcher } = inputAddressNumberFactory()
const { ddsInputAddressReference, ddsInputAddressReferenceState, ddsInputAddressReferenceWatcher } =
  inputAddressReference()

// appHeader.setChildren('app-logo', menu)

const logger = (data) => console.log(data)

ddsInputNameState.set({ value: 'Rodrigo' })
ddsInputNameState.on(logger)
ddsInputName.init()

ddsInputLastNameState.set({ value: 'Rocha' })
ddsInputLastNameState.on(logger)
ddsInputLastName.init()

ddsInputEmailState.set({ value: 'rodrigo@email.com' })
ddsInputEmailState.on(logger)
ddsInputEmail.init()

ddsInputPhoneState.set({ value: '(11) 96260 9993' })
ddsInputPhone.init()

ddsInputUFState.set({ value: 'PR' })
ddsInputUF.init()

ddsInputCityState.set({ value: 'Quatro Barras' })
ddsInputCity.init()

ddsZipCodeState.set({ value: '83420-000' })
ddsZipCode.init()

ddsInputAddressState.set({ value: 'Rua Virginia F Sbrissia' })
ddsInputAddress.init()

ddsInputAddressNumberState.set({ value: '426 B' })
ddsInputAddressNumber.init()

ddsInputAddressReferenceState.set({ value: 'Próximo ao supermercado Bom Sucesso' })
ddsInputAddressReference.init()
