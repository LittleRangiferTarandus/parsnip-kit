# isArray
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
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