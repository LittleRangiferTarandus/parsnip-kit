# zipToObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入两个数组`keys`和`values`，输出`keys`元素作为键，`values`元素作为值的普通对象。可选参数`getKey`和`getValue`用于把对象元素转换为键和值，它们是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。

> Added in v0.0.1



### Usage

```ts
import { zipToObject } from 'parsnip-kit'

zipToObject(['id', 'name', 'skill'], [1, 'Alex', ['Javascript']])
// { id: 1, name: 'Alex', skill: ['Javascript'] }

const users = [{ id: 0, user: 'IAmBot' }, { id: 2, user: 'Alice' }, { id: 5, user: 'Tom' }]
const record = [
  { system: 'Linux', count: 99999, userId: 0 },
  { system: 'Mac OS', count: 10, userId: 2 },
  { system: 'Window', count: 2, userId: 5 },
]
zipToObject(
  users, record, 'user', 'count'
) // { IAmBot: 99999, Alice: 10, Tom: 2 }

zipToObject(
  users, record, item => item.user, item => item.count
) // { IAmBot: 99999, Alice: 10, Tom: 2 }
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 作为键的数组元素类型  |
| `U` | ` ` | 作为值的数组元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `keys` | `T[]` | `false` | `undefined` | 作为键的数组  |
| `values` | `U[]` | `false` | `undefined` | 作为值的数组   |
| `getKey` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | 把数组元素转换为键   |
| `getValue` | `string \| ((item: U, index: number, arr: U[]) => any)` | `true` | `undefined` | 把数组元素转换为值   |

#### Returns

| Type |
| ---  |
| `ObjectLike`  |

#### Reference

[ObjectLike](../common/types#objectlike)