# objectToItems
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入对象`obj`，输出一个数组，由每个字段键值对组成数组元素，或由可选参数`createItem`返回组成。

> Added in v0.0.1



### Usage

```ts
import { objectToItems } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToItems(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToItems(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
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