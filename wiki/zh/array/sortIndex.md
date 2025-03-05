# sortIndex
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入数组`arr`，输出一个数组，是排序前数组索引到排序后数组索引的映射。需要注意的是，数组`arr`自身不会被排序。`comparator`自定义比较器，为空时比较的逻辑与原生`sort`相同。

> Added in v0.0.1



### Usage

```ts
import { sortIndex } from 'parsnip-kit'

sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]

sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 数组元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `T[]` | `false` | `undefined` | 待排序数组  |
| `comparator` | `(a: T, b: T) => number` | `true` | `undefined` | 比较器  |

#### Returns

| Type |
| ---  |
| `number[]`  |