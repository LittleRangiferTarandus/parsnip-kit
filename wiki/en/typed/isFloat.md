# isFloat
      
Check if the input parameter is a float or a `Number` object with a float value.

### Usage

```ts
import { isFloat } from 'parsnip-kit'

isFloat(123.1) // true
isFloat(new Number(123.1)) // true
isFloat(123) // false
isFloat(BigInt(123)) // false
isFloat(NaN) // false
isFloat(Infinity) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |