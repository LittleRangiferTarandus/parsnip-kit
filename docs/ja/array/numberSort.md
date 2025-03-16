# numberSort
[[[desc numberSort
  パラメータ `order` で指定された順序に従って、パラメータ `arr` を数値の大きさに基づいてソートします。デフォルトの順序は `'asc'` （昇順）です。

  `order` パラメータには、`'asc'` （昇順）または `'desc'` （降順）を指定できます。内部で [numberComparatorAsc](../common/constants#numbercomparatorasc) または [numberComparatorDesc](../common/constants#numbercomparatordesc) を呼び出します。

  オプションの `getter` パラメータは、配列 `arr` の各要素から数値を取得するために使用され、デフォルトでは要素そのものがソートに使われます。

  `getter` は、[getByPath](../object/getByPath) のフィールドパスまたはコールバック関数として指定可能です。
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
T:配列の要素の型
R:ソートの順序の型
]]]

#### Arguments

[[[params numberSort
arr: ソート対象の配列
order: ソートの順序
getter: 配列要素から数値を取得するもの
]]]

#### Returns

[[[returns numberSort

]]]
