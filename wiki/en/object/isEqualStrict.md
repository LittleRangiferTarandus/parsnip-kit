# isEqualStrict
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input two parameters `arg1` and `arg2`, and return whether they are strictly equal.

### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // true
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