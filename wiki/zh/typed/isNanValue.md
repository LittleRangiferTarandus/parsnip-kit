# isNanValue
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
判断入参是否为`NaN`或`NaN`值的`Number`对象。

### Usage

```ts
import { isNaN } from 'parsnip-kit'

isNaN(123) // false
isNaN('123') // false
isNaN(Infinity) // false
isNaN(NaN) // true
isNaN(new Number(NaN)) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |