# setByPath
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-90.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历设置对象的值`value`。

### Usage

```ts
import { setByPath } from 'parsnip-kit'

const test0 = {}
setByPath(test0, 'a', 1) // { a: 1 }

const test1 = []
setByPath(test1, '[0]', 1) // [1]

const test2 = {}
setByPath(test2, '[0]', 1) // { 0: 1 }

const test3 = {}
setByPath(test3, 'b[2]', 2) // { b: [<empty>, <empty>, 2] }

const test4 = { a: 1 }
setByPath(test4, 'a[0]', 'test') // { a: ['test'] }

const test5 = { a: 1 }
setByPath(test5, 'b', 2) // { a: 1, b: 2 }
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 待取值的对象  |
| `path` | `string` | `false` | `undefined` | 字段所在的路径  |
| `value` | `any` | `false` | `undefined` | 设置的值  |
      
### Returns

| Type |
| ---  |
| `undefined`  |