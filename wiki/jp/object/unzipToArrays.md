# unzipToArrays
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an object `obj`, and output two arrays: one containing its keys and the other containing its values.

> Added in v0.0.1



### Usage

```ts
import { unzipToArrays } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
unzipToArrays(obj)
// [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Original object |

#### Returns

| Type |
| ---  |
| `[string[], any[]]`  |