# isEqualStrict
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input two parameters `arg1` and `arg2`, and return whether they are strictly equal.

> Added in v0.0.1



### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // false
isEqualStrict(NaN, NaN) // true
isEqualStrict({ a: 1 }, { a: 1 }) // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg1` | `any` | `false` | `undefined` | Variable to compare |
| `arg2` | `any` | `false` | `undefined` | Variable to compare |

#### Returns

| Type |
| ---  |
| `boolean`  |