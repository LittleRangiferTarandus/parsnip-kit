# isSymbol
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为`symbol`。

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
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |

#### Returns

| Type |
| ---  |
| `boolean`  |