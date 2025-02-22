# isInt
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
判断入参是否为整数或整数值的`Number`对象。

### Usage

```ts
import { isInt } from 'parsnip-kit'

isInt(123) // true
isInt(new Number(123)) // true
isInt(123.1) // false
isInt(BigInt(123)) // false
isInt(NaN) // false
isInt(Infinity) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |