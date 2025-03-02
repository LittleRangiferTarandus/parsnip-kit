# splitToArrays
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入对象`obj`，输出一个数组，由`obj`分割得到的每个字段普通对象组成数组，或由可选参数`createItem`返回组成。

> Added in v0.0.1



### Usage

```ts
import { splitToArrays } from 'parsnip-kit'

const obj = {
  Alex: 16,
  Bob: 659,
  Carter: 155,
  Daniel: 825
}
splitToArrays(obj)
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]

splitToArrays(obj, (value, key) => [key, value])
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 原对象  |
| `createItem` | `(value: any, key: string, obj: any) => any` | `true` | `undefined` | 创建数组元素  |

#### Returns

| Type |
| ---  |
| `any[]`  |