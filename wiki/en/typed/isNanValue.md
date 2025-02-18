# isNanValue
      
Check if the input parameter is a `NaN` or a `Number` object with a `NaN` value.

### Usage

```ts
import { isNaN } from 'parsnip-kit'

isNaN(123) // false
isNaN('123') // false
isNaN(Infinity) // false
isNaN(NaN) // true
isNaN(new Number(NaN)) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |