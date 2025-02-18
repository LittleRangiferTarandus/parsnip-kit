# isSymbol
      
判断入参是否为`symbol`。

### Usage

```ts
import { isSymbol } from 'parsnip-kit'

isSymbol(Symbol('test')) // true
isSymbol('test') // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |