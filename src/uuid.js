const random = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)

const uuid = (prefix) => {
  if (prefix) return `${prefix}-${random()}`
  return `${random()}`
}

export { uuid }
