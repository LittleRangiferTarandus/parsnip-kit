# isPseudoArray
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Determine whether the input parameter is a pseudo-array, i.e., an object that can be accessed via numeric indices (which is true for most ordinary JavaScript objects) and has a numeric `length` property.

> Added in v0.0.1



### Usage

```ts
import { isPseudoArray } from 'parsnip-kit'

isPseudoArray({}) // false
isPseudoArray({ length: 1 }) // true
isPseudoArray([]) // true

function test () {
 isPseudoArray(arguments) // true
}
test()

// in browser
isPseudoArray(document.querySelectorAll('div')) // true
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