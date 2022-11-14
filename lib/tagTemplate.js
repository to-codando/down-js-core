export const taggedTemplate = (tags, ...values) => {
  return tags
    .map((tag, index) => {
      return `${tag}${values[index] || ""}`
    })
    .join("")
}