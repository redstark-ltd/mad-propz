# Mad Propz
Flexible react prop validation

### Install
`npm install mad-propz`

### Example Usage
```
const madPropz = require('mad-propz')

const internalUrl = madPropz.create({
  isRequired: true,
  minLength: 5,
  maxLength: 30,
  regex: /^([a-z0-9\-])*$/g,
  func: (value, propName, componentName) => {
    if (value === 'chicken') return new TypeError(`${propName} is a chicken in ${componentName}`);
    return null
  }
})

YourComponent.propTypes = {
  url: internalUrl
}

All keys in the passed object are optional

isRequired: Just like react does with .isRequired this will return a warning if no value is passed to the prop
minLength: Specify the minimum value length of the prop
maxLength: Specify the maximum value length of the prop
regex: A simple way to pass through a regex that the value must match
func: This is a flexible way to do what ever you want with the value of the prop.  Return a new TypeError as the example shows when there is an error and return null when everything is OK  
```
