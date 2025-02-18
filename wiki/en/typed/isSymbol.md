# isSymbol
      
Check if the input parameter is a `symbol`.

### Usage

```ts
import { isSymbol } from 'parsnip-kit'

isSymbol(Symbol('test')) // true
isSymbol('test') // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |