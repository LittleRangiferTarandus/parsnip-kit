# range
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入起始值`start`和结束值`end`，返回区间 [`start`, `end`) 中以`start`开始，步长为`step`的序列。灵感来自 Python，以及 Matlab、rust 等生成等步长数组的语法。

> Added in v0.0.1



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


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `start` | `number` | `false` | `undefined` | 起始值  |
| `end` | `number` | `false` | `undefined` | 结束值   |
| `step` | `number` | `true` | `1` | 步长   |

#### Returns

| Type |
| ---  |
| `number[]`  |