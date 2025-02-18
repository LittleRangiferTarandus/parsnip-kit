# isInfinity
      
Check if the input parameter is positive or negative infinity, or a Number object with a value of positive or negative infinity.

### Usage

```ts
import { isInfinity } from 'parsnip-kit'

isInfinity(123) // false
isInfinity('123') // false
isInfinity(NaN) // false
isInfinity(Infinity) // true
isInfinity(-Infinity) // true
isInfinity(new Number(Infinity)) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |