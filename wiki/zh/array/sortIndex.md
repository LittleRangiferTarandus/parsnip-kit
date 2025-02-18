# sortIndex
      
输入数组`arr`，输出一个数组，是排序前数组索引到排序后数组索引的映射。需要注意的是，数组`arr`自身不会被排序。`comparator`自定义比较器，为空时比较的逻辑与原生`sort`相同。

### Usage

```ts
import { sortIndex } from 'parsnip-kit'

sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]

sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `any[]` | `false` | `undefined` | 待排序数组  |
| `comparator` | `(a: T, b: T) => number` | `true` | `undefined` | 比较器  |
      
### Returns

| Type |
| ---  |
| `number[]`  |