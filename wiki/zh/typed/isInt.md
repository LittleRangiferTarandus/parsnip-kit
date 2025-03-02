# isInt
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为整数或整数值的`Number`对象。

> Added in v0.0.1



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


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |

#### Returns

| Type |
| ---  |
| `boolean`  |