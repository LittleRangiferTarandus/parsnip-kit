# unique
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入数组`arr`返回其中只出现一次的元素。接收一个`getter`，它是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。

> Added in v0.0.1



### Usage

```ts
import { unique } from 'parsnip-kit'

unique([1, 2, 3, NaN, 1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]

unique(
  [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

unique(
  [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]

unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16, 5, 6]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `T[]` | `false` | `undefined` | 需要去重的数组  |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | 提供区分元素的标识  |

#### Returns

| Type |
| ---  |
| `T[]`  |