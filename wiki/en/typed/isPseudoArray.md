# isPseudoArray
      
Determine whether the input parameter is a pseudo-array, i.e., an object that can be accessed via numeric indices (which is true for most ordinary JavaScript objects) and has a numeric `length` property.

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `Parameters for check` |
      
### Returns

| Type |
| ---  |
| `boolean`  |