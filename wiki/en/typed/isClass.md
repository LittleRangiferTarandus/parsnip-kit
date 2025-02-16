# isClass
      
Check if the input parameter is a class.

### Usage

```ts
import { isClass } from 'parsnip-kit'

isClass({}) // false
isClass(() => {}) // false
isClass(class {}) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `Parameters for check` |
      
### Returns

| Type |
| ---  |
| `boolean`  |