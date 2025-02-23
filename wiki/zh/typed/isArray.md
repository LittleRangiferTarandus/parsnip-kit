# isArray
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
判断入参是否为数组。

> Added in v0.0.1



### Usage

```ts
import { isArray } from 'parsnip-kit'

isArray([1, 2, 3]) // true
isBigInt(`123`) // false
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