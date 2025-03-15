# isEqual
[[[desc isEqual
2つのパラメータ `arg1` と `arg2` を入力し、それぞれのプロパティを深く比較して、等しいかどうかを返します。

基本型、プレーンオブジェクト（`arg => Object.prototype.toString.apply(arg).slice(8, -1)` の結果が `"Object"` を返す）、および `Array`、`Map`、`Set`、`Date`、`RegExp` を含む組み込みオブジェクトをサポートします。

`Blob`、`File`、`Error`、`Function`、`Promise`、`HTMLElement` などのサポートされていない組み込みオブジェクトの場合、厳格な比較のため `isEqualStrict` が呼び出されます。

プレーンオブジェクトの場合、列挙可能なプロパティのみがチェックされ、プロトタイプチェーンは検査されません。

深く比較がサポートされている組み込みオブジェクト:
|カテゴリ|サポートされているオブジェクト|
|-|-|
|ラッパークラス|`String` `Number` `Boolean`|
|コレクションタイプ|`Object` `Array` `Map` `Set`|
|日付と時刻|`Date`|
|正規表現|`RegExp`|
|ファイルとストリーム| `ArrayBuffer`|
|`TypedArray`|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|
]]]

[[[version isEqual
  
]]]
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
[[[params isEqual
arg1:比較する変数
arg2:比較する変数
]]]
#### Returns
[[[returns isEqual

]]]