# isNull
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为`null`。

> Added in v0.0.1



### Usage

```ts
import { isNull } from 'parsnip-kit'

isNull(null) // true
isNull({}) // false
isNull(undefined) // false
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