# splitToKeys
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
把用于取值的路径字符串拆分为单独的键。

> Added in v0.0.1



### Usage

```ts
import { splitToKeys } from 'parsnip-kit'

splitToKeys('a[0].b.c') // ['a', '0', 'b', 'c']
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |

#### Returns

| Type |
| ---  |
| `string[]`  |