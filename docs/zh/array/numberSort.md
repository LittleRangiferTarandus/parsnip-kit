# numberSort
[[[desc numberSort
输入参数 `arr`，根据数字大小对其进行排序，参数 `order` 指定排序顺序。

`order` 可以是 `'asc'`（升序）或者 `desc`（降序），默认为 `'asc'`。内部会调用 [numberComparatorAsc](../common/constants#numbercomparatorasc) 或者 [numberComparatorDesc](../common/constants#numbercomparatordesc)。

可选参数 `getter` 用于从数组 `arr` 的元素中获取数值，默认情况下直接使用元素本身进行排序。`getter`值为 [getByPath](../object/getByPath) 函数的字段路径，或者回调函数。
]]]
[[[version numberSort
  
]]]

### Usage

```ts
import { numberSort } from 'parsnip-kit'

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
numberSort([...numbers])
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numberSort([...numbers], 'desc')
// [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]
numberSort([...people], 'asc', 'age')
// [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 }
// ]

numberSort([...people], 'asc', item => item.age)
// [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 }
// ]
```


### API

#### Type Parameter

[[[template numberSort
T: 数组元素类型
R: 排序顺序的类型
]]]

#### Arguments

[[[params numberSort
arr:待排序数组
order:排序的顺序
getter:用于获取数值
]]]

#### Returns

[[[returns numberSort

]]]
