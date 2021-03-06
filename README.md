# babel-plugin-transform-object-assign

> Replace `Object.assign` with `lodash/assign`. If you are authoring an application, rather than a library, it is recommended that you use the `Object.assign` polyfill instead.

## Todo

Allow use of `require('lodash.assign')`

## Example

**In**

```javascript
Object.assign(a, b);
```

**Out**

```javascript
var _assign = require('lodash/assign');

_assign(a, b);
```

## Caveats

- Will only work with code of the form `Object.assign` or `Object['assign']`. The following patterns are not supported:

  ```javascript
  var { assign } = Object;
  var assign = Object.assign;
  ```

## Installation

```sh
npm install --save-dev babel-plugin-transform-object-assign
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-object-assign-lodash"]
}
```

### Via CLI

```sh
babel --plugins transform-object-assign-lodash script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-object-assign-lodash"]
});
```
