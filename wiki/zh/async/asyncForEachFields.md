# asyncForEachFields
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。 

`iterator`支持`async`函数，或者`Promise`返回值。当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。


> Added in v0.0.1



### Usage

```ts
import { asyncForEachFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }
const log = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log.push({ key, value })
      resolve(void 0)
    }, value * 100)
  })
}
asyncForEachFields(obj, iterator).then(() => {
  console.log(log)
  // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | 对象类型 |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | 待遍历的对象  |
| `iterator` | `(value: any, key: string, object: T) => any` | `false` | `undefined` | 迭代器函数  |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |