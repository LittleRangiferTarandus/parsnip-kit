# getTypeTag
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Returns the type tag of the provided argument using `Object.prototype.toString`.

> Added in v0.0.1



### Usage

```ts
import { getTypeTag } from 'parsnip-kit'

getTypeTag('hello') // 'String'
getTypeTag(42) // 'Number'
getTypeTag(null) // 'Null'
getTypeTag([1, 2, 3]) // 'Array'
getTypeTag({ a: 1 }) // 'Object'
getTypeTag(() => {}) // 'Function'
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The argument to check |

#### Returns

| Type |
| ---  |
| `string`  |