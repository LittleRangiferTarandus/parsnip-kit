# randomNumber
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
返回随机数字，取值范围为 [`start`, `end`)。

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
| `start` | `number` | `true` | `0` | 区间左边界  |
| `end` | `number` | `true` | `0` | 区间右边界  |

#### Returns

| Type |
| ---  |
| `number`  |