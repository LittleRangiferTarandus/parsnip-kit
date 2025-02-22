# isPseudoArray
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
判断入参是否为伪数组，即可以通过数字索引访问（一般的 JS 对象都满足这一点），拥有数字`length`的对象。

### Usage

```ts
import { isPseudoArray } from 'parsnip-kit'

isPseudoArray({}) // false
isPseudoArray({ length: 1 }) // true
isPseudoArray([]) // true

function test () {
 isPseudoArray(arguments) // true
}
test()

// in browser
isPseudoArray(document.querySelectorAll('div')) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待判断的入参  |
      
### Returns

| Type |
| ---  |
| `boolean`  |