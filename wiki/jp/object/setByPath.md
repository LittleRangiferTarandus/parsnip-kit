# setByPath
![Static Badge](https://img.shields.io/badge/Coverage-97.50%-FF8C00)
      
Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to set the value `value`.

> Added in v0.0.1



### Usage

```ts
import { setByPath } from 'parsnip-kit'

const test0 = {}
setByPath(test0, 'a', 1) // { a: 1 }

const test1 = []
setByPath(test1, '[0]', 1) // [1]

const test2 = {}
setByPath(test2, '[0]', 1) // { 0: 1 }

const test3 = {}
setByPath(test3, 'b[2]', 2) // { b: [<empty>, <empty>, 2] }

const test4 = { a: 1 }
setByPath(test4, 'a[0]', 'test') // { a: ['test'] }

const test5 = { a: 1 }
setByPath(test5, 'b', 2) // { a: 1, b: 2 }
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Object to be set |
| `path` | `string` | `false` | `undefined` | Field path |
| `value` | `any` | `false` | `undefined` | Value to be set |

#### Returns

| Type |
| ---  |
| `undefined`  |