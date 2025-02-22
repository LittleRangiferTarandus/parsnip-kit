# zipToObject
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入两个数组`keys`和`values`，输出`keys`元素作为键，`values`元素作为值的普通对象。可选参数`getKey`和`getValue`用于把对象元素转换为键和值，它们是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。

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

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `keys` | `any[]` | `false` | `undefined` | 作为键的数组  |
| `values` | `any[]` | `false` | `undefined` | 作为值的数组   |
| `getKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | 把数组元素转换为键   |
| `getValue` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | 把数组元素转换为值   |

#### Returns

| Type |
| ---  |
| `{}`  |