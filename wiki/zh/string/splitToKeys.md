# splitToKeys
      
把用于取值的路径字符串拆分为单独的键。

### Usage

```ts
import { splitToKeys } from 'parsnip-kit'

splitToKeys('a[0].b.c') // ['a', '0', 'b', 'c']
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |
      
### Returns

| Type |
| ---  |
| `string[]`  |