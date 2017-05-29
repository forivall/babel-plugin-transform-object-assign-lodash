import test from 'ava'
import * as babel from 'babel-core'

import plugin from '../lib/index'

const source = `Object.assign({foo: 'bar'}, options);`

const expected = `import _assign from 'lodash/assign';
_assign({ foo: 'bar' }, options);`

test('it works', (t) => {
  const result = babel.transform(source, {
    plugins: [plugin]
  })
  t.is(result.code, expected)
})
