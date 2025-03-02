# isInt
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is an integer or a `Number` object with an integer value.

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
| `arg` | `any` | `false` | `undefined` | Parameters for check |

#### Returns

| Type |
| ---  |
| `boolean`  |