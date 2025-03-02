# isUndefined
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is a `undefined`.

> Added in v0.0.1



### Usage

```ts
import { isUndefined } from 'parsnip-kit'

isUndefined(null) // false
isUndefined(void 0) // true
isUndefined(undefined) // true
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