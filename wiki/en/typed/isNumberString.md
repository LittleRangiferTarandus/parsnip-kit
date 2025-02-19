# isNumberString
      
Check if the input is string consisting only of numeric characters.

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
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |