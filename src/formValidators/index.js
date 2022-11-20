export const required = (input) => {
  return {
    isValid: input && !!input.value.length,
    error: {
      message: 'Esse campo é obrigatório.'
    }
  }
}

export const isEmail = (input) => {
  const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
  const error = { isValid: false, error: { message: 'Esse e-mail não é válido.' } }
  if (!input || !input.value.length) {
    return error
  }

  error.isValid = regex.test(input.value)
  return error
}

export const isPhone = (input) => {
  const regex =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
  const error = { isValid: false, error: { message: 'Esse não é um telefone válido.' } }
  if (!input || !input.value.length) {
    return error
  }

  error.isValid = regex.test(input.value)
  return error
}

export const isUF = (input) => {
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

export const isCEP = (input) => {
  const regex = /\d{2}\d{3}\d{3}$/
  const error = { isValid: false, error: { message: 'Esse não é um CEP válido.' } }
  const CEPLength = 8
  if (!input || !input.value.length) {
    return error
  }
  error.isValid = regex.test(input.value) && input.value.length === CEPLength
  return error
}
