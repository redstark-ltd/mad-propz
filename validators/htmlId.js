const htmlId = (props, propName, componentName = 'Anon') => {
  const value = props[propName]

  if (
    value == null
    || (typeof value === 'string' && /^[a-z0-9\-\s]*$/.text(value))
  ) {
    return null
  }

  return new TypeError(`Invalid htmlId Prop Value: ${value} for ${propName} in ${componentName}`);
}

export default htmlId
