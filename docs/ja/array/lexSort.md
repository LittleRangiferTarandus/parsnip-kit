# lexSort
[[[desc lexSort
  パラメータ `order` で指定された順序に従って、パラメータ `arr` を辞書順にソートします。デフォルトの順序は `'asc'` （昇順）です。

  `order` パラメータには、`'asc'` （昇順）または `'desc'` （降順）を指定できます。内部で [stringComparatorAsc](../common/constants#stringcomparatorasc) または [stringComparatorDesc](../common/constants#stringcomparatordesc) を呼び出します。

  オプションの `getter` パラメータは、配列 `arr` の各要素から文字列値を取得するために使用され、デフォルトでは要素そのものがソートに使われます。

  `getter` は、[getByPath](../object/getByPath) のフィールドパスまたはコールバック関数として指定可能です。
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
T:配列の要素の型
R:ソートの順序の型
]]]

#### Arguments

[[[params lexSort
arr: ソート対象の配列
order: ソートの順序
getter: 配列要素から文字列値を取得するもの
]]]

#### Returns

[[[returns lexSort

]]]
