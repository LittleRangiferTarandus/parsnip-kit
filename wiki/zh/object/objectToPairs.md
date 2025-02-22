# objectToPairs
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入对象`obj`，输出一个由每个字段键值对组成的数组。

### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 原对象  |
      
### Returns

| Type |
| ---  |
| `[PropertyKey, any][]`  |