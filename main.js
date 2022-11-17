import { componentFactory } from './lib/index.js'
import { header } from './components/appHeader.js'
import { menu } from './components/appMenu.js'

import { input } from './components/protoypes/d-input/index.js'
import { button } from './components/protoypes/d-button/index.js'
import { pubsubFactory } from './lib/pubsub.factory.js'

const required = (input) => {
  return {
    isValid: input && !!input.value.length,
    error: {
      message: 'Esse campo é obrigatório.'
    }
  }
}

const isEmail = (input) => {
  const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
  const error = { isValid: false, error: { message: 'Esse e-mail não é válido.' } }
  if (!input || !input.value.length) {
    return error
  }

  error.isValid = regex.test(input.value)
  return error
}

const isPhone = (input) => {
  const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
  const error = { isValid: false, error: { message: 'Esse não é um telefone válido.' } }
  if (!input || !input.value.length) {
    return error
  }

  error.isValid = regex.test(input.value)
  return error
}

const isUF = (input) => {
  const ufList = [
    { uf: 'AC' },
    { uf: 'AL' },
    { uf: 'AP' },
    { uf: 'AM' },
    { uf: 'BA' },
    { uf: 'CE' },
    { uf: 'DF' },
    { uf: 'ES' },
    { uf: 'GO' },
    { uf: 'MA' },
    { uf: 'MS' },
    { uf: 'MT' },
    { uf: 'MG' },
    { uf: 'PA' },
    { uf: 'PB' },
    { uf: 'PR' },
    { uf: 'PE' },
    { uf: 'PI' },
    { uf: 'RJ' },
    { uf: 'RN' },
    { uf: 'RS' },
    { uf: 'RO' },
    { uf: 'RR' },
    { uf: 'SC' },
    { uf: 'SP' },
    { uf: 'SE' },
    { uf: 'TO' }
  ]

  const error = { isValid: false, error: { message: 'Esse não é um UF/Estado válido.' } }
  if (!input || !input.value.length) {
    return error
  }

  error.isValid = ufList.some((key) => key.uf.toLowerCase() === input.value.toLowerCase())
  return error
}

const isCEP = (input) => {
  const regex = /\d{2}\d{3}\d{3}$/
  const error = { isValid: false, error: { message: 'Esse não é um CEP válido.' } }
  const CEPLength = 8
  if (!input || !input.value.length) {
    return error
  }
  error.isValid = regex.test(input.value) && input.value.length === CEPLength
  return error
}

const form = {
  inputName: { isValid: true },
  inputLastName: { isValid: true },
  inputEmail: { isValid: true },
  inputPhone: { isValid: true },
  inputUF: { isValid: true },
  inputCity: { isValid: true },
  inputCode: { isValid: true },
  inputAddress: { isValid: true },
  inputAddressNumber: { isValid: true }
}

const setFormError = (data, inputName) => {
  form[inputName]['isValid'] = data.error?.isValid

  const formStatus = Object.keys(form).map((input) => form[input]['isValid'])
  const formHasError = formStatus.includes(false)

  ddsButtonSave.props.set({ disabled: formHasError })
}

const eventDrive = pubsubFactory()

const ddsButtonSave = componentFactory(button)
ddsButtonSave.register(document.querySelector('dds-button-save'))
ddsButtonSave.props.set({ label: 'Salvar' })
ddsButtonSave.init()

const ddsButtonClear = componentFactory(button)
ddsButtonClear.register(document.querySelector('dds-button-clear'))
ddsButtonClear.props.set({
  label: 'Limpar',
  dispatch: { emitter: eventDrive, eventName: 'CLEAR_FORM', payload: { clear: true } }
})
ddsButtonClear.init()

const ddsButtonBack = componentFactory(button)
ddsButtonBack.register(document.querySelector('dds-button-back'))
ddsButtonBack.props.set({ label: 'Voltar' })
ddsButtonBack.init()

eventDrive.on('CLEAR_FORM', () => {
  ddsLastName.state.set({ value: '' })
  ddsEmail.state.set({ value: '' })
  ddsPhone.state.set({ value: '' })
  ddsUf.state.set({ value: '' })
  ddsCity.state.set({ value: '' })
  ddsZipCode.state.set({ value: '' })
  ddsAddress.state.set({ value: '' })
  ddsAddressNumber.state.set({ value: '' })
  ddsAddressReference.state.set({ value: '' })

  setTimeout(() => ddsName.state.set({ value: '' }), 100)
})

const ddsName = componentFactory(input)
ddsName.state.on((data) => setFormError(data, 'inputName'))
ddsName.state.set({ value: 'Rodrigo' })
ddsName.props.set({ label: 'Nome:', focus: true, validate: true, validators: [required] })
ddsName.register(document.querySelector('dds-input-name'))
ddsName.init()

const ddsLastName = componentFactory(input)
ddsLastName.state.on((data) => setFormError(data, 'inputLastName'))
ddsLastName.props.set({ label: 'Sobrenome:', validate: true, validators: [required] })
ddsLastName.state.set({ value: 'Rocha' })
ddsLastName.register(document.querySelector('dds-input-last-name'))
ddsLastName.init()

const ddsEmail = componentFactory(input)
ddsEmail.state.on((data) => setFormError(data, 'inputEmail'))
ddsEmail.register(document.querySelector('dds-input-email'))
ddsEmail.props.set({ label: 'E-mail:', validate: true, validators: [required, isEmail] })
ddsEmail.state.set({ value: 'rodrigo@email.com' })
ddsEmail.init()

const ddsPhone = componentFactory(input)
ddsPhone.state.on((data) => setFormError(data, 'inputPhone'))
ddsPhone.register(document.querySelector('dds-input-phone'))
ddsPhone.props.set({ label: 'Phone:', validate: true, validators: [required, isPhone] })
ddsPhone.state.set({ value: '11962609993' })
ddsPhone.init()

const ddsUf = componentFactory(input)
ddsUf.state.on((data) => setFormError(data, 'inputUF'))
ddsUf.register(document.querySelector('dds-input-uf'))
ddsUf.props.set({ label: 'UF:', validate: true, validators: [required, isUF] })
ddsUf.state.set({ value: 'PR' })
ddsUf.init()

const ddsCity = componentFactory(input)
ddsCity.state.on((data) => setFormError(data, 'inputCity'))
ddsCity.register(document.querySelector('dds-input-city'))
ddsCity.props.set({ label: 'Cidade:', validate: true, validators: [required] })
ddsCity.state.set({ value: 'Curitiba' })
ddsCity.init()

const ddsZipCode = componentFactory(input)
ddsZipCode.state.on((data) => setFormError(data, 'inputCode'))
ddsZipCode.register(document.querySelector('dds-input-zip-code'))
ddsZipCode.props.set({ label: 'CEP:', validate: true, validators: [required, isCEP] })
ddsZipCode.state.set({ value: '83420000' })
ddsZipCode.init()

const ddsAddress = componentFactory(input)
ddsAddress.state.on((data) => setFormError(data, 'inputAddress'))
ddsAddress.register(document.querySelector('dds-input-address'))
ddsAddress.props.set({ label: 'Logradouro:', validate: true, validators: [required] })
ddsAddress.state.set({ value: 'Rua Virginia Sbrissia' })
ddsAddress.init()

const ddsAddressNumber = componentFactory(input)
ddsAddressNumber.state.on((data) => setFormError(data, 'inputAddressNumber'))
ddsAddressNumber.register(document.querySelector('dds-input-address-number'))
ddsAddressNumber.props.set({ label: 'Número:', validate: true, validators: [required] })
ddsAddressNumber.state.set({ value: '426 B' })
ddsAddressNumber.init()

const ddsAddressReference = componentFactory(input)
ddsAddressReference.register(document.querySelector('dds-input-address-reference'))
ddsAddressReference.props.set({ label: 'Referência:' })
ddsAddressReference.state.set({ value: 'Próximo ao mercado Bom Sucesso' })
ddsAddressReference.init()
