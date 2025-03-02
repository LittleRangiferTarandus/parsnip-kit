# isNumber
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check whether the input parameter is a primitive number or a `Number` instance.

> Added in v0.0.1



### Usage

```ts
import { isNumber } from 'parsnip-kit'

isNumber('test') // false
isNumber(123) // true
isNumber(new Number(123)) // true
isNumber(Infinity) // true
isNumber(NaN) // true
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