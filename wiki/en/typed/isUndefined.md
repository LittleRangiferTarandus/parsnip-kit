# isUndefined
      
Check if the input parameter is a `undefined`.

### Usage

```ts
import { isUndefined } from 'parsnip-kit'

isUndefined(null) // false
isUndefined(void 0) // true
isUndefined(undefined) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |