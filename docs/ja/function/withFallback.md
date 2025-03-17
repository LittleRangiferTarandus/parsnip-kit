# withFallback
[[[desc withFallback
  この関数は、`func` の結果を返すか、結果が `null` または `undefined` の場合にデフォルト値 `defaultValue` を返す新しい関数を返します。
]]]
[[[version withFallback
  
]]]

### Usage

```ts
import { withFallback } from 'parsnip-kit'

const func = (a: number) => (a === 0 ? null : a)
const funcWithDefault = withFallback(func, -1)

funcWithDefault(1)
// 1
funcWithDefault(0)
// -1

```


### API

#### Type Parameter

[[[template withFallback
T:関数型
R:デフォルト値の型
]]]

#### Arguments

[[[params withFallback
func:デフォルトの戻り値を持つ関数
defaultValue:デフォルト値
]]]

#### Returns

[[[returns withFallback

]]]
