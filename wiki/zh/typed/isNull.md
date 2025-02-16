# isNull
      
判断入参是否为`null`。

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
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |