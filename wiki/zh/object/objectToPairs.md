# objectToPairs
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入对象`obj`，输出一个数组，由每个字段的键值对形成的数组组成数组，或由可选参数`createItem`返回组成。

> Added in v0.0.1



### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToPairs(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | 原对象的类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | 原对象  |
| `createItem` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | 创建数组元素  |

#### Returns

| Type |
| ---  |
| `any[]`  |