# isNumberString
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input is string consisting only of numeric characters.

> Added in v0.0.1



### Usage

```ts
import { isNumberString } from 'parsnip-kit'

isNumberString('12345') // true
isNumberString('123a5') // false
isNumberString('') // false
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