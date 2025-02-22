# isPrimitive
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
判断入参是否为基本类型，基本类型包括数字、字符串、布尔值、`null`、`undefined`、`symbol`、`bigint`。

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |