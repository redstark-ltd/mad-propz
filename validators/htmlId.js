const htmlId = (props, propName, componentName = 'Anon') => {
  const value = props[propName]

  if (
    value == null
    || (typeof value === 'string' && /^[a-z0-9\-\s]*$/.test(value))
  ) {
    return null
  }

  return new TypeError(`Invalid htmlId Prop Value: ${value} for ${propName} in ${componentName}`);
}

module.exports = htmlId
