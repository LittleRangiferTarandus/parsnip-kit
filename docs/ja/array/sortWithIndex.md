# sortWithIndex
[[[desc sortWithIndex
  配列 `arr` を入力として受け取り、`arr` をソートし、元の配列のインデックスからソート後の配列のインデックスへのマッピングを表す配列を返します。

  内部で [sortIndex](./sortIndex.md) 関数を呼び出します。

  配列 `arr` 自体がソートされることに注意してください！

  カスタム比較関数 `comparator` を指定できます。指定しない場合、比較論理はネイティブの `sort` と同じになります。
]]]
[[[version sortWithIndex
  
]]]

### Usage

```ts
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
const indexMap = sortWithIndex(arr)

console.log(arr)
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(indexMap)
// [1, 3, 6, 0, 9, 2, 4, 8, 10, 7, 5]

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]
const comparator = (a: { age: number }, b: { age: number }) => a.age - b.age
const indexMap4People = sortWithIndex(people, comparator)

console.log(people)
// [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 }
// ]
console.log(indexMap4People)
// [1, 0, 2]
```


### API

#### Type Parameter

[[[template sortWithIndex
T: 配列の要素の型
]]]

#### Arguments

[[[params sortWithIndex
arr: ソートする配列
comparator:ソート用の比較関数
]]]

#### Returns

[[[returns sortWithIndex

]]]
