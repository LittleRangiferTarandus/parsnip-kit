# getTypeTag
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
返回传入参数的类型标签，通过调用`Object.prototype.toString`方法实现。

> Added in v0.0.1



### Usage

```ts
import { getTypeTag } from 'parsnip-kit'

getTypeTag('hello') // 'String'
getTypeTag(42) // 'Number'
getTypeTag(null) // 'Null'
getTypeTag([1, 2, 3]) // 'Array'
getTypeTag({ a: 1 }) // 'Object'
getTypeTag(() => {}) // 'Function'
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待检测的参数  |

#### Returns

| Type |
| ---  |
| `string`  |