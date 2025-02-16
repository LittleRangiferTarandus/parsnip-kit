# isObjectLike
      
判断入参是否为对象，不包括函数。

### Usage

```ts
import { isObjectLike } from 'parsnip-kit'

isObjectLike({}) // true
isObjectLike(() => {}) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |