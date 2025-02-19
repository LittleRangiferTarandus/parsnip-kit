# isNumberString
      
检查入参是否只是包含数字字符的字符串。

### Usage

```ts
import { isNumberString } from 'parsnip-kit'

isNumberString("12345") // true
isNumberString("123a5") // false
isNumberString("") // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |