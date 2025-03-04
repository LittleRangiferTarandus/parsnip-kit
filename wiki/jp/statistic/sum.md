# sum
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Calculates the sum of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements).

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.

> Added in v0.0.1



### Usage

```ts
import { sum } from 'parsnip-kit'

sum([1, 2, 3, 4]) // 10

sum([{ value: 10 }, { value: 20 }], item => item.value) // 30

sum([{ score: 85 }, { score: 95 }], 'score') // 180
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