# isNanValue
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is a `NaN` or a `Number` object with a `NaN` value.

> Added in v0.0.1



### Usage

```ts
import { isNaN } from 'parsnip-kit'

isNaN(123) // false
isNaN('123') // false
isNaN(Infinity) // false
isNaN(NaN) // true
isNaN(new Number(NaN)) // true
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |

#### Returns

| Type |
| ---  |
| `boolean`  |