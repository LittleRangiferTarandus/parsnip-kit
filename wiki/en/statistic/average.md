# average
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Calculates the average of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements).

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.

> Added in v0.0.1



### Usage

```ts
import { average } from 'parsnip-kit'

average([1, 2, 3, 4]) // 2.5

average([{ value: 10 }, { value: 20 }], item => item.value) // 15

average([{ score: 85 }, { score: 95 }], 'score') // 90
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
| `number`  |