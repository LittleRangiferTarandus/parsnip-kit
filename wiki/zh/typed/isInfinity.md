# isInfinity
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为正负无穷大或正负无穷大值的`Number`对象。

> Added in v0.0.1



### Usage

```ts
import { isInfinity } from 'parsnip-kit'

isInfinity(123) // false
isInfinity('123') // false
isInfinity(NaN) // false
isInfinity(Infinity) // true
isInfinity(-Infinity) // true
isInfinity(new Number(Infinity)) // true
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