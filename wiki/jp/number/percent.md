# percent
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input a number `num` and a total `total` (default is 100), and output a formatted percentage string. An optional parameter `fixed` is available to control the number of decimal places, defaulting to 2.

> Added in v0.0.1



### Usage

```ts
import { percent } from 'parsnip-kit'

percent(50) // '50.00%'
percent(25, 100) // '25.00%'
percent(75, 200) // '37.50%'
percent(75, 200, 0) // '38%'
percent(0) // '0.00%'
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `num` | `number` | `false` | `undefined` | The number to calculate |
| `total` | `number` | `true` | `100` | Total value |
| `fixed` | `number` | `true` | `2` | Decimal places |

#### Returns

| Type |
| ---  |
| `string`  |