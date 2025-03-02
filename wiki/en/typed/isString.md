# isString
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check whether the input parameter is a primitive string or a `String` instance.

> Added in v0.0.1



### Usage

```ts
import { isString } from 'parsnip-kit'

isString('test') // true
isString(new String('test')) // true
isString(123) // false
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