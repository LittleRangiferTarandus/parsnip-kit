# joinToObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入一个对象数组`fields`，输出从每一项对象组合起来形成的普通对象。 

可选参数`getKey`和`getValue`用于把子对象转换为键和值，为空时默认提取数组元素第一个字段。`getKey`和`getValue`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。

> Added in v0.0.1



### Usage

```ts
import { joinToObject } from 'parsnip-kit'

const users = [{ Alex: 'vip' }, { Bob: 'viewer' }, { Carter: 'user' }, { Daniel: 'user' }]

joinToObject(users)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

const data = [
  { name: 'Alex', type: 'vip' },
  { name: 'Bob', type: 'viewer' },
  { name: 'Carter', type: 'user' },
  { name: 'Daniel', type: 'user' }
]
joinToObject(data, 'name', 'type')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

joinToObject(data, pair => pair.name, pair => pair.type)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | 数组元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `pairs` | `T[]` | `false` | `undefined` | 键值对对象数组  |
| `getKey` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | 从子对象中提取键   |
| `getValue` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | 从子对象中提取值   |

#### Returns

| Type |
| ---  |
| `ObjectLike`  |

#### Reference

[ObjectLike](../common/types#objectlike)