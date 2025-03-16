# sortWithIndex
[[[desc sortWithIndex
  输入一个数组 `arr`，对 `arr` 进行排序，并返回一个数组，表示原数组的索引到排序后数组的索引的映射。

  内部将会调用 [sortIndex](./sortIndex.md) 函数。

  需要注意的是，数组 `arr` 自身会被排序！

  可选参数自定义比较器 `comparator`，默认比较逻辑将与原生 `sort` 方法相同。
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
T: 数组元素类型
]]]

#### Arguments

[[[params sortWithIndex
arr: 要排序的数组
comparator:比较器
]]]

#### Returns

[[[returns sortWithIndex

]]]
