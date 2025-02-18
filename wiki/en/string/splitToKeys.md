# splitToKeys
      
Split the path string used for accessing values into individual keys.

### Usage

```ts
import { splitToKeys } from 'parsnip-kit'

splitToKeys('a[0].b.c') // ['a', '0', 'b', 'c']
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |
      
### Returns

| Type |
| ---  |
| `string[]`  |