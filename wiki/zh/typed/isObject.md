# isObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为对象，包括一般的对象（`{ key: 'value }`）、函数（`function() {}`）、基本类型的包装类实例（`new Number(1)`）等变量都会返回`true`。

> Added in v0.0.1



### Usage

```ts
import { isObject } from 'parsnip-kit'

isObject(null) // false
isObject({}) // true
isObject(() => {}) // true
isObject(new Number()) // true
isObject(/test/) // true
isObject(new Date()) // true
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