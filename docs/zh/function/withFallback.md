# withFallback
[[[desc withFallback
  返回一个新函数，内部调用 `func` 并返回，如果返回值是 `null` 或者 `undefined`，则返回 `defaultValue`。
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
T:函数类型
R:默认值类型
]]]

#### Arguments

[[[params withFallback
func:带有默认返回值的函数
defaultValue: 默认值
]]]

#### Returns

[[[returns withFallback

]]]
#### Reference

[WithFallback](../common/types#withfallback)
