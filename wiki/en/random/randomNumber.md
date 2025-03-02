# randomNumber
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Returns a random number in interval [`start`, `end`).

> Added in v0.0.1



### Usage

```ts
import { randomNumber } from 'parsnip-kit'

randomNumber() // a number in [0, 1)
randomNumber(0, 100) // a number in [0, 100)

```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `start` | `number` | `true` | `0` | The left boundary of the interval |
| `end` | `number` | `true` | `0` | The right boundary of the interval |

#### Returns

| Type |
| ---  |
| `number`  |