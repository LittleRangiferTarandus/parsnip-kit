# deleteByPath
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to delete the field at the end of the path.

> Added in v0.0.1



### Usage

```ts
import { deleteByPath } from 'parsnip-kit'

const test0 = { a: 1 }
deleteByPath(test0, 'a') // {}

const test1 = [1]
deleteByPath(test1, '[0]') // []

const test2 = { a: { b: { c: 1 } }, d: [2] }
deleteByPath(test2, 'a.b') // { a: {}, d: [2] }
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Object to be deleted |
| `path` | `string` | `false` | `undefined` | Field path |

#### Returns

| Type |
| ---  |
| `undefined`  |