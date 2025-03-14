# unzipToArrays
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入对象`obj`，输出分别是它的键和值的数组。

> Added in v0.0.1



### Usage

```ts
import { unzipToArrays } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
unzipToArrays(obj)
// [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]

unzipToArrays(obj, (_, key) => key.toUpperCase(), (value) => value + '')
// [['ALEX', 'BOB', 'CARTER', 'DANIEL'], ['16', '659', '155', '825']]

```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | 原对象的类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | 原对象  |
| `createKey` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | 创建 key 的数组元素  |
| `createValue` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | 创建 value 的数组元素  |

#### Returns

| Type |
| ---  |
| `[string[], any[]]`  |