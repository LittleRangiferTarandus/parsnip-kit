# mode
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
通过`getter`可选参数提取键值（或直接使用数组元素本身）,返回其中出现最多的值。 

`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供频率统计的标识。

> Added in v0.0.1



### Usage

```ts
import { mode } from 'parsnip-kit'

mode([1, 2, 2, 3, 3, 3]) // 3

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
mode(users, 'id') // 1

mode(users, (user) => user.name.toLowerCase()) // 'alice'
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 输入的数组元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | `false` | `undefined` | 输入的数组  |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | 提供区分元素的标识  |

#### Returns

| Type |
| ---  |
| `any`  |