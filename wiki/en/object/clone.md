# clone
      
Takes a parameter `arg` and returns a shallow copy of it, supporting primitive type, plain object, `Set`, `Map`, `Array`.

### Usage

```ts
import { clone } from 'parsnip-kit'

clone(undefined) // undefined
clone(null) // null
clone(123) // 123
clone('test') // 'test'
clone(true) // true
clone(BigInt(123)) // 123n
clone(Symbol('test')) // Symbol(test)

const arr = [{ data: 1 }, { data: 2 }, { data: 3 }]
const cloneArr = clone(arr) // [{ data: 1 }, { data: 2 }, { data: 3 }]
cloneArray === arr // false

const obj = { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
const cloneObj = clone(obj) // { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
cloneObj === obj // false

const set = new Set([{ data: 1 }, { data: 2 }, { data: 3 }])
const cloneSet = clone(set) // Set(3) {{ data: 1 }, { data: 2 }, { data: 3 }}
cloneSet === set // false

const map = new Map([['a', { data: 1 }], ['b', { data: 2 }], ['c', { data: 3 }]])
const cloneMap = clone(map) // Map(3) {'a' => { data: 1 }, 'b' => { data: 2 }, 'c' => { data: 3 }}
cloneMap === map // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `PrimitiveType \| ObjectLike` | `false` | `undefined` | Parameter to be cloned |
      
### Returns

| Type |
| ---  |
| `PrimitiveType | ObjectLike`  |