# isSymbol
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is a `symbol`.

> Added in v0.0.1



### Usage

```ts
import { isSymbol } from 'parsnip-kit'

isSymbol(Symbol('test')) // true
isSymbol('test') // false
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