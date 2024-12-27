import slugify from 'slugify'

const slugGenerator = (title: string): string => {
  const baseSlug = slugify(`${title} sudipta-das`, { lower: true })
  const timestamp = Date.now()
  return `${baseSlug}-${timestamp}`
}

export default slugGenerator
