# isEqualStrict
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入两个参数`arg1`和`arg2`，返回它们是否严格相等。

> Added in v0.0.1



### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // false
isEqualStrict(NaN, NaN) // true
isEqualStrict({ a: 1 }, { a: 1 }) // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg1` | `any` | `false` | `undefined` | 待比较的变量  |
| `arg2` | `any` | `false` | `undefined` | 待比较的变量  |

#### Returns

| Type |
| ---  |
| `boolean`  |