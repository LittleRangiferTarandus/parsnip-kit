# isNumberString
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
检查入参是否只是包含数字字符的字符串。

> Added in v0.0.1



### Usage

```ts
import { isNumberString } from 'parsnip-kit'

isNumberString('12345') // true
isNumberString('123a5') // false
isNumberString('') // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |

#### Returns

| Type |
| ---  |
| `boolean`  |