# lexSort
[[[desc lexSort
输入参数 `arr`，根据字典序对其进行排序，参数 `order` 指定排序顺序。

`order` 可以是 `'asc'`（升序）或者 `desc`（降序），默认为 `'asc'`。内部会调用 [stringComparatorAsc](../common/constants#stringcomparatorasc) 或者 [stringComparatorDesc](../common/constants#stringcomparatordesc)。

可选参数 `getter` 用于从数组 `arr` 的元素中获取字符串值，默认情况下直接使用元素本身进行排序。它值为 [getByPath](../object/getByPath) 函数的字段路径，或者回调函数。
]]]
[[[version lexSort
  
]]]

### Usage

```ts
import { lexSort } from 'parsnip-kit'

const fruits = ['banana', 'apple', 'cherry', 'date']
lexSort(fruit)
// ['apple', 'banana', 'cherry', 'date']

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]

lexSort([...people], 'desc', 'name')
// [
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 },
//   { name: 'Alice', age: 25 }
// ]

lexSort([...people], 'asc', item => item.name)
// [
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 },
//   { name: 'Alice', age: 25 }
// ]
```


### API

#### Type Parameter

[[[template lexSort
T: 数组元素类型
R: 排序顺序的类型
]]]

#### Arguments

[[[params lexSort
arr:待排序数组
order:排序的顺序
getter:用于获取字符串值
]]]

#### Returns

[[[returns lexSort

]]]
