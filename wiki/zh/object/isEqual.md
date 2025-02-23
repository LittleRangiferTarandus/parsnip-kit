# isEqual
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-94.62%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-82.26%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-94.62%-brightgreen)
      
输入两个参数`arg1`和`arg2`，执行深比较检查它们每个属性，返回它们是否相等，不支持循环引用。 

支持基本类型、普通对象（`arg => Object.prototype.toString.apply(arg).slice(8, -1)`返回`"Object"`），以及包括这些在内的内置对象：`Array`、`Map`、`Set`、`Date`、`RegExp`。

对于不支持的内置对象，例如`Blob`、`File`、`Error`、`Function`、`Promise`、`HTMLElement`等等，将调用 [isEqualStrict](../object/isEqualStrict) 进行严格比较。

对于普通对象，仅检查它们的可枚举属性，不会检查原型链。

支持深比较的内置对象：

|分类|支持的对象|
|-|-|
|包装类|`String` `Number` `Boolean`|
|集合类型|`Object` `Array` `Map` `Set`|
|时间日期|`Date`|
|正则表达式|`RegExp`|
|文件和流| `ArrayBuffer`|
|`TypedArray `|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|


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
| `arg1` | `any` | `false` | `undefined` | 待比较的变量  |
| `arg2` | `any` | `false` | `undefined` | 待比较的变量  |

#### Returns

| Type |
| ---  |
| `boolean`  |