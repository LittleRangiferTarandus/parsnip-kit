# difference
      
输入两个数组`arr1`、`arr2`，输出`arr1` - `arr2` 的差集。`getter`提供区分元素的标识。

### Usage

```ts
import { difference } from 'parsnip-kit'

difference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3]

difference(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 2 }, { v: 3 }]

difference(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [2] }, { v: [3] }]

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // []

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // []
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `any[]` | `arr1` | `false` | `undefined` | 需要求差集的数组  |
| `path` | `arr2` | `false` | `undefined` | 需要求差集的数组  |
| `getter` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | 提供区分元素的标识  |
      
### Returns

| Type |
| ---  |
| `any[]`  |