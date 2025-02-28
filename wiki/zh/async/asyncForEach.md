# asyncForEach
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个数组`array`和迭代器`iterator`，遍历对象的每个元素，对每个元素执行`iterator`。 

`iterator`支持`async`函数，或者`Promise`返回值。当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。


> Added in v0.0.1



### Usage

```ts
import { asyncForEach } from 'parsnip-kit'

const array = [1, 2, 3]
const log = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log.push({ item, index })
      resolve(void 0)
    }, item * 100)
  })
}
asyncForEach(obj, iterator).then(() => {
  console.log(log)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 数组元素类型 |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T[]` | `false` | `undefined` | 待遍历的数组  |
| `iterator` | `(item: T, index: number, array: T[]) => any` | `false` | `undefined` | 迭代器函数  |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |