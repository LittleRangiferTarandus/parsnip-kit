# isClass
      
判断入参是否为类。

### Usage

```ts
import { isClass } from 'parsnip-kit'

isClass({}) // false
isClass(() => {}) // false
isClass(class {}) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `待判断的入参 ` |
      
### Returns

| Type |
| ---  |
| `boolean`  |