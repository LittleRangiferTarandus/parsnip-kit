# joinToObject
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个对象数组`fields`，输出从每一项对象组合起来形成的普通对象。 

可选参数`getKey`和`getValue`用于把子对象转换为键和值，为空时默认提取数组元素第一个字段。`getKey`和`getValue`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。

### Usage

```ts
import { joinToObject } from 'parsnip-kit'

const users = [{ Alex: 'vip' }, { Bob: 'viewer' }, { Carter: 'user' }, { Daniel: 'user' }]

joinToObject(users)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

const data = [
  { name: 'Alex', type: 'vip' },
  { name: 'Bob', type: 'viewer' },
  { Carter: 'user' }, { Daniel: 'user' }
]
joinToObject(data, 'name', 'type')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

joinToObject(data, pair => pair.name, pair => pair.type)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `pairs` | `any[]` | `false` | `undefined` | 键值对对象数组  |
| `getKey` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | 从子对象中提取键   |
| `getValue` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | 从子对象中提取值   |

#### Returns

| Type |
| ---  |
| `object`  |