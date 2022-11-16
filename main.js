import { componentFactory } from './lib/index.js'
import { header } from './components/appHeader.js'
import { menu } from './components/appMenu.js'

import { input } from './components/protoypes/d-input/index.js'

const ddsName = componentFactory(input)
ddsName.register(document.querySelector('dds-input-name'))
ddsName.props.set({ label: 'Nome:', focus: true })
ddsName.state.set({ value: 'Rodrigo' })
ddsName.init()

const ddsLastName = componentFactory(input)
ddsLastName.register(document.querySelector('dds-input-last-name'))
ddsLastName.props.set({ label: 'Sobrenome:' })
ddsLastName.state.set({ value: 'Rocha' })
ddsLastName.init()

const ddsEmail = componentFactory(input)
ddsEmail.register(document.querySelector('dds-input-email'))
ddsEmail.props.set({ label: 'E-mail:' })
ddsEmail.state.set({ value: 'rodrigo@email.com' })
ddsEmail.init()

const ddsPhone = componentFactory(input)
ddsPhone.register(document.querySelector('dds-input-phone'))
ddsPhone.props.set({ label: 'Phone:' })
ddsPhone.state.set({ value: '(11) 96260 9993' })
ddsPhone.init()

const ddsUf = componentFactory(input)
ddsUf.register(document.querySelector('dds-input-uf'))
ddsUf.props.set({ label: 'UF:' })
ddsUf.state.set({ value: 'PR' })
ddsUf.init()

const ddsCity = componentFactory(input)
ddsCity.register(document.querySelector('dds-input-city'))
ddsCity.props.set({ label: 'Cidade:' })
ddsCity.state.set({ value: 'Curitiba' })
ddsCity.init()

const ddsZipCode = componentFactory(input)
ddsZipCode.register(document.querySelector('dds-input-zip-code'))
ddsZipCode.props.set({ label: 'CEP:' })
ddsZipCode.state.set({ value: '83420-000' })
ddsZipCode.init()

const ddsAddress = componentFactory(input)
ddsAddress.register(document.querySelector('dds-input-address'))
ddsAddress.props.set({ label: 'Logradouro:' })
ddsAddress.state.set({ value: 'Rua Virginia Sbrissia' })
ddsAddress.init()

const ddsAddressNumber = componentFactory(input)
ddsAddressNumber.register(document.querySelector('dds-input-address-number'))
ddsAddressNumber.props.set({ label: 'Número:' })
ddsAddressNumber.state.set({ value: '426 B' })
ddsAddressNumber.init()

const ddsAddressReference = componentFactory(input)
ddsAddressReference.register(document.querySelector('dds-input-address-reference'))
ddsAddressReference.props.set({ label: 'Referência:' })
ddsAddressReference.state.set({ value: 'Próximo ao mercado Bom Sucesso' })
ddsAddressReference.init()
