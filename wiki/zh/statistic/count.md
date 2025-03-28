# count
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
通过`getter`可选参数提取键值（或直接使用数组元素本身），对提取的值进行计数统计。 

`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提频率统计的标识。

> Added in v0.0.1



### Usage

```ts
import { count } from 'parsnip-kit'

count([1, 2, 2, 3, 3, 3]) // Map { 1 => 1, 2 => 2, 3 => 3 }

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
count(users, 'id') // Map { 1 => 2, 2 => 1 }

count(users, (user) => user.name.toLowerCase()) // Map { 'alice' => 2, 'bob' => 1 }
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
| `Map<any, number>`  |