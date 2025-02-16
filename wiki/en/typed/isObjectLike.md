# isObjectLike
      
Check if the input parameter is an object, excluding functions.

### Usage

```ts
import { isObjectLike } from 'parsnip-kit'

isObjectLike({}) // true
isObjectLike(() => {}) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `Parameters for check` |
      
### Returns

| Type |
| ---  |
| `boolean`  |