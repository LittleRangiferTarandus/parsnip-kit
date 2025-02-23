# filterFields
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`，返回值`== false`则移除该字段，返回新的普通对象或数组。

> Added in v0.0.1



### Usage

```ts
import { filterFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }
const iterator0 = (value: number) => value > 1
const result0 = filterFields(obj, iterator0)
// { b: 2, c: 3 }

const arr0 = [0, 1, 2, 3]
const iterator1 = (value: number) => value % 2 === 0
const result1 = filterFields(arr0, iterator1)
// [0, 2]

const arr1 = [0, 1, 2, 3]
arr1['test'] = 'test'
const iterator2 = (value, key) => typeof key === 'string'
const result2 = filterFields(arr1, iterator2)
// [test: 'test']
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 待遍历的对象  |
| `iterator` | `(value: any, key: string, object: T) => boolean` | `false` | `undefined` | 迭代器函数  |

#### Returns

| Type |
| ---  |
| `object`  |