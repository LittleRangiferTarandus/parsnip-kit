# curry
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
对给定的函数执行柯里化。 

柯里化是函数式编程中的一个基本概念，它将一个多参数函数转换为一系列接受单一参数的函数，从而允许逐步传递参数。

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
| `fn` | `Function` | `false` | `undefined` | 需要进行柯里化的函数  |

#### Returns

| Type |
| ---  |
| `Function`  |