# assert-is

[is][is] mixin for [assert][assert].

## Getting Started
Install the module with: `npm install assert-is`

## API

It modifies `is` API by taking one extra argument being either a string or a callback.

If a string is given, then it will be used as the message for the error that will be thrown in case the assertion fails..

If a callback is passed then it will be called in case the assertion fails.

### general

 - ``assert.isA`` (value, type, message) or ``assert.isType`` (value, type, message)
 - ``assert.isDefined`` (value, message)
 - ``assert.isEmpty`` (value, message)
 - ``assert.isEqual`` (value, other, message)
 - ``assert.isHosted`` (value, host, message)
 - ``assert.isInstance`` (value, constructor, message)
 - ``assert.isInstanceof`` (value, constructor, message) - deprecated, because in ES3 browsers, "instanceof" is a reserved word
 - ``assert.isNil`` (value, message)
 - ``assert.isNull`` (value, message) - deprecated, because in ES3 browsers, "null" is a reserved word
 - ``assert.isUndef`` (value, message)
 - ``assert.isUndefined`` (value, message) - deprecated, because in ES3 browsers, "undefined" is a reserved word

### arguments

 - ``isArgs`` (value, message)

### array

 - ``isArray`` (value, message)
 - ``isArraylike`` (value, message)

### boolean

 - ``isBool`` (value, message)

### date

 - ``assert.isDate`` (value, message)

### element

 - ``assert.isElement`` (value, message)

### error

 - ``assert.isError`` (value, message)

### function

 - ``assert.isFn`` (value, message)

### number

 - ``assert.isNumber`` (value, message)
 - ``assert.isInfinite`` (value, message)
 - ``assert.isDecimal`` (value, message)
 - ``assert.isDivisibleBy`` (value, n, message)
 - ``assert.isInteger`` (value, message)
 - ``assert.isInt`` (value, message) - deprecated, because in ES3 browsers, "int" is a reserved word
 - ``assert.isMaximum`` (value, others, message)
 - ``assert.isMinimum`` (value, others, message)
 - ``assert.isNan`` (value, message)
 - ``assert.isEven`` (value, message)
 - ``assert.isOdd`` (value, message)
 - ``assert.isGe`` (value, other, message)
 - ``assert.isGt`` (value, other, message)
 - ``assert.isLe`` (value, other, message)
 - ``assert.isLt`` (value, other, message)
 - ``assert.isWithin`` (value, start, finish, message)

### object

 - ``assert.isObject`` (value, message)

### regexp

 - ``assert.isRegexp`` (value, message)

### string

 - ``assert.isString`` (value, message)

### encoded binary

 - ``assert.isBase64`` (value, message)
 - ``assert.isHex`` (value, message)

### ES6 Symbols
 - ``assert.isSymbol`` (value, message)

## Examples

```javascript
var assert = require('assert-is');
assert.isDefined({}, 'This is OK.');
assert.isObject("foo", '"foo" is not an object');
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* v0.5.0 Added function callback as last argument

## Roadmap
- [ ] integrate better [errors][be]
- [ ] fix how we take arguments by checking `is.x` length

## License
Copyright (c) 2015 goliatone  
Licensed under the MIT license.



[is]:https://www.npmjs.com/package/is
[assert]:https://nodejs.org/api/all.html#assert_assert
[be]:https://github.com/tj/better-assert/blob/master/index.js
