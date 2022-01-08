import slugify from "slugify"

const slugifyUrl = title => {
  const separator = "-"
  const result = title.match(/[a-z]+|\d+/gi).join(separator)

  return slugify(result, { lower: true })
}

export default slugifyUrl
