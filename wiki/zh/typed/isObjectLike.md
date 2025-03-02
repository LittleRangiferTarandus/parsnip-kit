# isObjectLike
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为对象，不包括函数。

> Added in v0.0.1



### Usage

```ts
import { isObjectLike } from 'parsnip-kit'

isObjectLike({}) // true
isObjectLike(() => {}) // false
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