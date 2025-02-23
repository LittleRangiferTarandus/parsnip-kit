# clone
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-94.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-92.50%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-94.00%-brightgreen)
      
Accepts an argument `arg` and returns its shallow clone.

Supports basic types, plain objects (`Object.prototype.toString.apply(arg).slice(8, -1)` returns `"Object"`), as well as built-in objects including these: `Array`, `Map`, `Set`, `Date`, `RegExp`.

Similar to Lodash's approach, for built-in objects that are not cloneable, such as `Error`, `Function`, `Promise`, `HTMLElement`, etc., an empty plain object will be returned.

For plain objects, it will attempt to construct a new object based on its prototype as a shallow clone. If there is no prototype, an empty object will be created. Then, the enumerable properties of the input argument `arg` will be added.

Supported built-in objects for cloning:

|Category|Supported Objects|
|-|-|
|Wrapper Classes|`String` `Number` `Boolean`|
|Collection Types|`Object` `Array` `Map` `Set`|
|Date and Time|`Date`|
|Regular Expressions|`RegExp`|
|Files and Streams|`Blob` `File` `ArrayBuffer`|
|`TypedArray`|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|


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

clone(new Date(0)) // Thu Jan 01 1970 08:00:00
clone(/test/) // /test/

const arr = [{ data: 1 }, { data: 2 }, { data: 3 }]
const cloneArr = clone(arr) // [{ data: 1 }, { data: 2 }, { data: 3 }]
cloneArray === arr // false

const obj = { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
const cloneObj = clone(obj) // { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
cloneObj === obj // false

const set = new Set([{ data: 1 }, { data: 2 }, { data: 3 }])
const cloneSet = clone(set) // Set(3) {{ data: 1 }, { data: 2 }, { data: 3 }}
cloneSet === set // false

const map = new Map([['a', { data: 1 }], ['b', { data: 2 }], ['c', { data: 3 }]])
const cloneMap = clone(map) // Map(3) {'a' => { data: 1 }, 'b' => { data: 2 }, 'c' => { data: 3 }}
cloneMap === map // false
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `PrimitiveType \| ObjectLike` | `false` | `undefined` | Parameter to be cloned |

#### Returns

| Type |
| ---  |
| `PrimitiveType \| ObjectLike`  |

#### Reference

[PrimitiveType](../common/types#primitivetype) [ObjectLike](../common/types#objectlike)