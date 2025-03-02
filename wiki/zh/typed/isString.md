# isString
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为基本类型字符串或者`String`实例。

> Added in v0.0.1



### Usage

```ts
import { isString } from 'parsnip-kit'

isString('test') // true
isString(new String('test')) // true
isString(123) // false
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