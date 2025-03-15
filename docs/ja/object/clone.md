# clone
[[[desc clone
引数 `arg` を受け取り、そのシャローコピーを返します。

基本型、プレーンオブジェクト（`Object.prototype.toString.apply(arg).slice(8, -1)` が `"Object"` を返すもの）、および以下の組み込みオブジェクトをサポートします：`Array`, `Map`, `Set`, `Date`, `RegExp`。

Lodash のアプローチと同様に、`Error`, `Function`, `Promise`, `HTMLElement` などクローン不可能な組み込みオブジェクトに対しては、空のプレーンオブジェクトを返します。

プレーンオブジェクトの場合、プロトタイプを基に新しいオブジェクトを構築しようと試みます（シャローコピー）。プロトタイプが存在しない場合は空のオブジェクトを作成します。その後、入力引数 `arg` の列挙可能なプロパティを追加します。

クローンがサポートされる組み込みオブジェクト：
|カテゴリ|サポートされているオブジェクト|
|-|-|
|ラッパークラス|`String` `Number` `Boolean`|
|コレクションタイプ|`Object` `Array` `Map` `Set`|
|日付と時刻 |`Date` |
|正規表現|`RegExp`|
|ファイルとストリーム |`Blob` `File` `ArrayBuffer`|
|`TypedArray`|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array` |
]]]

[[[version clone
  
]]]
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

#### Type Parameter
[[[template clone
T:コピーされるパラメータの型
]]]
#### Arguments
[[[params clone
obj:コピーされるパラメータ
]]]
#### Returns
[[[returns clone

]]]
#### Reference

[PrimitiveType](../common/types#primitivetype) [ObjectLike](../common/types#objectlike)