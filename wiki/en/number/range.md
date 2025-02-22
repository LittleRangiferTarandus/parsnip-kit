# range
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input the start value `start` and the end value `end`, and return the sequence starting from `start` with a step size of `step` in the interval [`start`, `end`). Inspired by the syntax for generating arrays with equal steps in Python, as well as in Matlab, Rust, and others.

### Usage

```ts
import { range } from 'parsnip-kit'

range(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1, 10, 2) // [1, 3, 5, 7, 9]
range(10, 1, -2) // [10, 8, 6, 4, 2]

range(1, 10, -2) // []
range(10, 1, 2) // []
range(10, 10, 2) // []

try {
  range(0, 1, 0)
} catch (error) {
  console.log(error.message) // 'range step must be not equal 0.'
}
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `start` | `number` | `false` | `undefined` | Start value |
| `end` | `number` | `false` | `undefined` | End value |
| `step` | `number` | `true` | `1` | Step size |
      
### Returns

| Type |
| ---  |
| `number[]`  |