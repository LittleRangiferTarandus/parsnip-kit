# isClass
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Check if the input parameter is a class.

> Added in v0.0.1



### Usage

```ts
import { isClass } from 'parsnip-kit'

isClass({}) // false
isClass(() => {}) // false
isClass(class {}) // true
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