# min
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
计算传入数组的最小值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。

> Added in v0.0.1



### Usage

```ts
import { min } from 'parsnip-kit'

min([1, 2, 3, 4]) // 1

min([{ value: 10 }, { value: 20 }], item => item.value) // 10

min([{ score: 85 }, { score: 95 }], 'score') // 85
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `any[]` | `false` | `undefined` | 输入的数组  |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => number)` | `true` | `undefined` | 用于从数组元素中提取数值  |

#### Returns

| Type |
| ---  |
| `number`  |