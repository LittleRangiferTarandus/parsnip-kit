# isNumber
      
判断入参是否为基本类型数字或者`Number`实例。

### Usage

```ts
import { isNumber } from 'parsnip-kit'

isNumber('test') // false
isNumber(123) // true
isNumber(new Number(123)) // true
isNumber(Infinity) // true
isNumber(NaN) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |