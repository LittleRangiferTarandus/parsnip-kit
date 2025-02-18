# union
      
输入两个数组`arr1`、`arr2`，输出它们的并集。`getter`提供区分元素的标识。

### Usage

```ts
import { union } from 'parsnip-kit'

union([1, 2, 3, NaN], [1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]

union(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

union(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16, 5, 6]
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `any[]` | `arr1` | `false` | `undefined` | 需要求并集的数组  |
| `path` | `arr2` | `false` | `undefined` | 需要求并集的数组  |
| `getter` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | 提供区分元素的标识  |
      
### Returns

| Type |
| ---  |
| `any[]`  |