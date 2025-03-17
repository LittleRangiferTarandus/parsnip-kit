# once
[[[desc once
接受一个函数 `func`，并返回一个新的函数，该函数只会被调用一次。在第一次调用之后，它将返回第一次调用的结果缓存。
]]]

[[[version once
  
]]]
### Usage

```typescript
import { once } from 'parsnip-kit'

const handler = (a) => {
  console.log('Function Called')
  return a
}
const onceFn = once(handler)

onceFn(123)
// Function Called
// result is 123

onceFn(321)
// result is 123

```


### API

#### Type Parameter

[[[template once
T:函数类型
]]]

#### Arguments

[[[params once
func: 只需调用一次的函数
]]]

#### Returns

[[[returns once

]]]