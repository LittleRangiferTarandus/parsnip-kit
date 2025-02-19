# thousandSeparator
      
Input a number `num` and output a string with thousand separators.

### Usage

```ts
import { thousandSeparator } from 'parsnip-kit'

thousandSeparator(1000) // '1,000'
thousandSeparator(1234567) // '1,234,567'
thousandSeparator(-1234567) // '-1,234,567'
thousandSeparator(1234.567) // '1,234.567'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `num` | `number` | `false` | `undefined` | The number to format |
      
### Returns

| Type |
| ---  |
| `string`  |