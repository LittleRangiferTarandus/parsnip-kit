# isBoolean
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check whether the input parameter is a primitive boolean or a `Boolean` instance.

> Added in v0.0.1



### Usage

```ts
import { isBoolean } from 'parsnip-kit'

isBoolean('test') // false
isBoolean(1) // false
isBoolean('') // false
isBoolean(null) // false
isBoolean(undefined) // false
isBoolean(true) // true
isBoolean(false) // true
isBoolean(Boolean()) // true
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