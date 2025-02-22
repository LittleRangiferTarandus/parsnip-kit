# getTypeTag
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Returns the type tag of the provided argument using `Object.prototype.toString`.

### Usage

import { getTypeTag } from 'parsnip-kit'

getTypeTag('hello') // 'String'
getTypeTag(42) // 'Number'
getTypeTag(null) // 'Null'
getTypeTag([1, 2, 3]) // 'Array'
getTypeTag({ a: 1 }) // 'Object'
getTypeTag(() => {}) // 'Function'

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The argument to check |
      
### Returns

| Type |
| ---  |
| `string`  |