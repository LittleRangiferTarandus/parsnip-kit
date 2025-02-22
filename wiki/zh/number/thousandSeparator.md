# thousandSeparator
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个数字`num`，输出一个包含千分分隔符的字符串。

### Usage

```ts
import { thousandSeparator } from 'parsnip-kit'

thousandSeparator(100) // '100'
thousandSeparator(1000) // '1,000'
thousandSeparator(10000) // '10,000'
thousandSeparator(1234567) // '1,234,567'
thousandSeparator(-1234567) // '-1,234,567'
thousandSeparator(1234.567) // '1,234.567'
thousandSeparator(1234.567/) // '1,234.567,8'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `num` | `number` | `false` | `undefined` | 要格式化的数字  |
      
### Returns

| Type |
| ---  |
| `string`  |