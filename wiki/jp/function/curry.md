# curry
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Curries the given function.

Curry, a fundamental concept in functional programming, involves transforming a function with multiple parameters into a sequence of functions that each accept a single parameter, facilitating the passing of parameters one at a time.

> Added in v0.0.1



### Usage

```typescript
import { curry } from 'parsnip-kit'

function add(a, b) { return a + b }

const curriedAdd = curry(add)
curriedAdd(2)(3) // 5
curriedAdd(2, 3) // 5

function greet(name, greeting = 'Hello') { return `${greeting}, ${name}!` }

const curriedGreet = curry(greet)
curriedGreet('Alice', 'Hi') // 'Hi, Alice!'
curriedGreet('Bob') // 'Hello, Bob!'
```



### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `fn` | `Function` | `false` | `undefined` | Function to be curried |

#### Returns

| Type |
| ---  |
| `Function`  |