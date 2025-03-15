# asyncForEachFields

[[[desc asyncForEachFields
输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。

`iterator`支持`async`函数，或者`Promise`返回值。`concurrent`可选参数控制是否并发调用，若值为`'sequential'`，当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
]]]

[[[version asyncForEachFields
  
]]]

### Usage

```ts
import { asyncForEachFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }

const logConcurrent = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logConcurrent.push({ key, value })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEachFields(obj, iterator, 'sequential').then(() => {
  console.log(logConcurrent)
  // Array contain { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } with random order.
})

const logSequential = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logSequential.push({ key, value })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEachFields(obj, iterator, 'sequential').then(() => {
  console.log(logSequential)
  // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
})
```


### API

#### Type Parameter

[[[template asyncForEachFields
T:对象类型
R:并发类型
]]]

#### Arguments

[[[params asyncForEachFields
obj:待遍历的对象
iterator:迭代器函数
concurrent:并发类型
]]]

#### Returns

[[[returns asyncForEachFields

]]]