# isNanValue
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为`NaN`或`NaN`值的`Number`对象。

> Added in v0.0.1



### Usage

```ts
import { isNaN } from 'parsnip-kit'

isNaN(123) // false
isNaN('123') // false
isNaN(Infinity) // false
isNaN(NaN) // true
isNaN(new Number(NaN)) // true
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