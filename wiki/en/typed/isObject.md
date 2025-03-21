# isObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check whether the input parameter is an object, including general objects (`{ key: 'value' }`), functions (`function() {}`), and instances of primitive type wrappers (`new Number(1)`), all of which would return `true`.

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
| `arg` | `any` | `false` | `undefined` | Parameters for check |

#### Returns

| Type |
| ---  |
| `boolean`  |