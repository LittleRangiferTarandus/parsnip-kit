# forEachFields
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。

> Added in v0.0.1



### Usage

```ts
import { forEachFields } from 'parsnip-kit'

const user = { name: 'John', age: 30 }
forEachFields(user, (value, key, obj) => {
  console.log(`Key: ${key}, Value: ${value}`)
})
// Key: name, Value: John
// Key: age, Value: 30
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
| `undefined`  |