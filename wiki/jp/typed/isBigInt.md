# isBigInt
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Check if the input parameter is a `bigint`.

> Added in v0.0.1



### Usage

```ts
import { isBigInt } from 'parsnip-kit'

isBigInt(BigInt(123)) // true
isBigInt(123) // false
isBigInt(NaN) // false
isBigInt(Infinity) // false
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