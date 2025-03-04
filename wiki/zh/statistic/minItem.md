# minItem
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
计算传入数组的最小值，返回最小值所在的第一个数组元素，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。 

`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。

> Added in v0.0.1



### Usage

```ts
import { minItem } from 'parsnip-kit'

minItem([1, 2, 3, 4]) // 1

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], item => item.value)
// { value: 10 }

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], 'value')
// { value: 10 }
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 输入的数组元素类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | `false` | `undefined` | 输入的数组  |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => number)` | `true` | `undefined` | 用于从数组元素中提取数值  |

#### Returns

| Type |
| ---  |
| `T`  |