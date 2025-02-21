# clone
      
输入一个参数`arg`，返回它的浅复制。 

支持基本类型、普通对象（`arg => Object.prototype.toString.apply(arg).slice(8, -1)`返回`Object`），以及包括这些在内的内置对象：`Array`、`Map`、`Set`、`Date`、`RegExp`。

和 Lodash 处理思路类似，对于不支持复制的内置对象，例如`Error`、`Function`、`Promise`、`HTMLElement`等等，将返回空的普通对象。

对于普通对象，会尝试以它的原型构造新的对象作为浅复制，如果没有原型则创建空对象。然后加上入参`arg`的可枚举属性。

支持复制的内置对象：

|分类|支持的对象|
|-|-|
|包装类|`String` `Number` `Boolean`|
|集合类型|`Object` `Array` `Map` `Set`|
|时间日期|`Date`|
|正则表达式|`RegExp`|
|文件和流|`Blob` `File` `ArrayBuffer`|
|`TypedArray `|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|


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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `PrimitiveType \| ObjectLike` | `false` | `undefined` | 待复制的参数  |
      
### Returns

| Type |
| ---  |
| `PrimitiveType \| ObjectLike`  |