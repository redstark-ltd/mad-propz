const internalUrl = (props, propName, componentName = 'Anon') => {
  const value = props[propName]

  if (
    value == null
    || (typeof value === 'string' && /^[a-z0-9\-\.]*$/.test(value))
  ) {
    return null
  }

  return new TypeError(`Invalid internalUrl Prop Value: ${value} for ${propName} in ${componentName}`);
}

module.exports = internalUrl
