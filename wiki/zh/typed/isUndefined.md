# isUndefined
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为`undefined`。

> Added in v0.0.1



### Usage

```ts
import { isUndefined } from 'parsnip-kit'

isUndefined(null) // false
isUndefined(void 0) // true
isUndefined(undefined) // true
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