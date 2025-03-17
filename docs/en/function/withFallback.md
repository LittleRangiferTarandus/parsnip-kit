# withFallback
[[[desc withFallback
  
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

]]]

#### Arguments

[[[params withFallback

]]]

#### Returns

[[[returns withFallback

]]]
#### Reference

[WithFallback](../common/types#withfallback)