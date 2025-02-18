# isNull
      
Check if the input parameter is a `null`.

### Usage

```ts
import { isNull } from 'parsnip-kit'

isNull(null) // true
isNull({}) // false
isNull(undefined) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |