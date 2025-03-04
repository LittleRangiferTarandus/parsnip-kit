# maxItem
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Calculate the maximum value of the input array and return the first elements that have the maximum value, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements).

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.

> Added in v0.0.1



### Usage

```ts
import { maxItem } from 'parsnip-kit'

maxItem([1, 2, 3, 4]) // 4

maxItem([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], item => item.value)
// { value: 20 }

maxItem([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], 'value')
// { value: 20 }
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Type of input array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | `false` | `undefined` | Input array |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => number)` | `true` | `undefined` | For extracting numerical values from array elements |

#### Returns

| Type |
| ---  |
| `T`  |