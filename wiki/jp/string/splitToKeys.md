# splitToKeys
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Split the path string used for accessing values into individual keys.

> Added in v0.0.1



### Usage

```ts
import { splitToKeys } from 'parsnip-kit'

splitToKeys('a[0].b.c') // ['a', '0', 'b', 'c']
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string[]`  |