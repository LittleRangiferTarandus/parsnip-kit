# isFloat
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为浮点数或浮点数值的`Number`对象。

> Added in v0.0.1



### Usage

```ts
import { isFloat } from 'parsnip-kit'

isFloat(123.1) // true
isFloat(new Number(123.1)) // true
isFloat(123) // false
isFloat(BigInt(123)) // false
isFloat(NaN) // false
isFloat(Infinity) // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |

#### Returns

| Type |
| ---  |
| `boolean`  |