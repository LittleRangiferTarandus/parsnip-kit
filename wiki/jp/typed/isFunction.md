# isFunction
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is a function, including classes (`class {}`), generator functions (`function*() {}`), and async functions (`async function() {}`).

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
| `arg` | `any` | `false` | `undefined` | Parameters for check |

#### Returns

| Type |
| ---  |
| `boolean`  |