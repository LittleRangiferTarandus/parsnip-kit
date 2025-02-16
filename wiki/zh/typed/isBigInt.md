# isBigInt
      
判断入参是否为`bigint`。

### Usage

```ts
import { isBigInt } from 'parsnip-kit'

isBigInt(BigInt(123)) // true
isBigInt(123) // false
isBigInt(NaN) // false
isBigInt(Infinity) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |