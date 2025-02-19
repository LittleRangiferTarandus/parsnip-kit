# percent
      
Input a number `num` and a total `total` (default is 100), and output a formatted percentage string. An optional parameter `fixed` is available to control the number of decimal places, defaulting to 2.

### Usage

```ts
import { percent } from 'parsnip-kit'

percent(50) // '50.00%'
percent(25, 100) // '25.00%'
percent(75, 200) // '37.50%'
percent(75, 200, 0) // '38%'
percent(0) // '0.00%'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `num` | `number` | `false` | `undefined` | The number to calculate |
| `total` | `number` | `true` | `100` | Total value |
| `fixed` | `number` | `true` | `2` | Decimal places |
      
### Returns

| Type |
| ---  |
| `string`  |