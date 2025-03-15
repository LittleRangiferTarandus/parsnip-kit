# asyncMap

[[[desc asyncMap
输入一个数组`array`和迭代器`iterator`，遍历对象的每个元素，对每个元素执行`iterator`，并返回由每次`await`执行后的返回值组成的数组。

`iterator`支持`async`函数，或者`Promise`返回值。`concurrent`可选参数控制是否并发调用，若值为`'sequential'`，当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
]]]

[[[version asyncMap
  
]]]


### Usage

```ts
import { asyncMap } from 'parsnip-kit'

const array = [1, 2, 3]
const logConcurrent = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logConcurrent.push({ item, index })
      resolve({ item, index })
    }, Math.random() * 100)
  })
}
asyncMap(array, iterator).then(res => {
  console.log(res)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
  console.log(logConcurrent)
  // Array contain { item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 } with random order.
})

const logSequential = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logSequential.push({ item, index })
      resolve({ item, index })
    }, Math.random() * 100)
  })
}
asyncMap(array, iterator, 'sequential').then(res => {
  console.log(res)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
  console.log(logSequential)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
})
```


### API

#### Type Parameter

[[[template asyncMap
T:数组元素类型
U: `iterator`返回值类型
R:并发类型
]]]

#### Arguments

[[[params asyncMap
array:待遍历的数组
iterator:迭代器函数
concurrent:并发类型
]]]

#### Returns

[[[returns asyncMap

]]]