# isPrimitive
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Check if the input parameter is a primitive type, including `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

### Usage

```ts
import { isPrimitive } from 'parsnip-kit'

isPrimitive(1) // true
isPrimitive('test') // true
isPrimitive(true) // true
isPrimitive(null) // true
isPrimitive(undefined) // true
isPrimitive(Symbol()) // true
isPrimitive(BigInt(1)) // true

isPrimitive(new Number(1)) // false
isPrimitive(new String('test')) // false
isPrimitive(new Boolean(true)) // false
isPrimitive({}) // false
isPrimitive(new Date()) // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |

#### Returns

| Type |
| ---  |
| `boolean`  |