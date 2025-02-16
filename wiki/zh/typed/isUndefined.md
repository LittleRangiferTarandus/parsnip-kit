# isUndefined
      
判断入参是否为`undefined`。

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
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |