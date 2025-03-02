# isEqual
![Static Badge](https://img.shields.io/badge/Coverage-93.67%-FF8C00)
      
Input two parameters `arg1` and `arg2`, perform a deep comparison to check each of their properties, and return whether they are equal.

Supports basic types, plain objects (`arg => Object.prototype.toString.apply(arg).slice(8, -1)` returns `"Object"`), and built-in objects including these: Array, Map, Set, Date, RegExp.

For unsupported built-in objects, such as `Blob`, `File`, `Error`, `Function`, `Promise`, `HTMLElement`, etc., [isEqualStrict](../object/isEqualStrict) will be called for strict comparison.

For plain objects, only their enumerable properties are checked, and the prototype chain is not examined.

Built-in objects supported for deep comparison:

|Category|Supported Objects|
|-|-|
|Wrapper Classes|`String` `Number` `Boolean`|
|Collection Types|`Object` `Array` `Map` `Set`|
|Date and Time|`Date`|
|Regular Expressions|`RegExp`|
|Files and Streams| `ArrayBuffer`|
|`TypedArray`|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|


> Added in v0.0.1



### Usage

```ts
import { isEqual } from 'parsnip-kit'

const arr1 = [1, [2, 3]]
const arr2 = [1, [2, 3]]
isEqual(arr1, arr2) // true

const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { a: 1, b: { c: 2 } }
isEqual(obj1, obj2) // true

const obj3 = { project: ['A', 'B', 'C'], startTime: new Date('2025-1-1'), status: { finish: false, block: true } }
const obj4 = { project: ['A', 'B', 'C'], startTime: new Date('2025-1-1'), status: { finish: false, block: true } }
isEqual(obj3, obj4) // true

const map1 = new Map([[['a'], { data: 1 }], [['b'], { data: 2 }]])
const map2 = new Map([[['a'], { data: 1 }], [['b'], { data: 2 }]])
isEqual(map1, map2) // true
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg1` | `any` | `false` | `undefined` | Variable to compare |
| `arg2` | `any` | `false` | `undefined` | Variable to compare |

#### Returns

| Type |
| ---  |
| `boolean`  |