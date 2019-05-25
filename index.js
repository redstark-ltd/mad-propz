const madProps = (customValidations = {}, props, propName, componentName = 'Anon') => {
  const value = props[propName]

  const {
    func,
    regex,
    isRequired,
    minLength,
    maxLength
  } = customValidations

  if (!isRequired && !value) return null

  if (isRequired && !value) return new TypeError(`${propName} is required but has no value in ${componentName}`)

  if (
    minLength
    && typeof minLength === 'number'
    && (
      typeof value === 'string'
      || value instanceof Array
    )
    && value.length < minLength
  ) {
    return new TypeError(`${propName} is less than min length of ${minLength} characters in ${componentName}`);
  }

  if (
    maxLength
    && typeof maxLength === 'number'
    && (
      typeof value === 'string'
      || value instanceof Array
    )
    && value.length > maxLength
  ) {
    return new TypeError(`${propName} is more than the max length of ${maxLength} characters in ${componentName}`);
  }

  if (
    regex
    && regex instanceof RegExp
    && !regex.test(value)
  ) {
    return new TypeError(`${propName} does not pass regex tests in ${componentName}`);
  }

  if (
    func
    && typeof func === 'function'
  ) return func(value, propName, componentName)

  return null
}

madProps.create = (customValidations) => madProps.bind(null, customValidations)

module.exports = madProps
