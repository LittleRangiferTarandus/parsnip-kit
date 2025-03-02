# isFunction
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
判断入参是否为函数，包括类（`class {}`）、生成器（`function*() {}`）、异步函数（`async function() {}`）。

> Added in v0.0.1



### Usage

```ts
import { isFunction } from 'parsnip-kit'

isFunction({}) // false
isFunction(() => {}) // true
isFunction(class {}) // true
isFunction(function*() {}) // true
isFunction(async () => {}) // true
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