# isBigInt
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
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