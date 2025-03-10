# deleteByPath
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历，删除路径末端的字段。

> Added in v0.0.1



### Usage

```ts
import { deleteByPath } from 'parsnip-kit'

const test0 = { a: 1 }
deleteByPath(test0, 'a') // {}

const test1 = [1]
deleteByPath(test1, '[0]') // []

const test2 = { a: { b: { c: 1 } }, d: [2] }
deleteByPath(test2, 'a.b') // { a: {}, d: [2] }
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 待删除的对象  |
| `path` | `string` | `false` | `undefined` | 字段所在的路径  |

#### Returns

| Type |
| ---  |
| `void`  |