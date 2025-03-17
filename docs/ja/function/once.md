# once
[[[desc once
関数 `func` を受け取り、一度だけ呼び出される新しい関数を返します。最初の呼び出しの後、最初の呼び出しの結果をキャッシュして返します。
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
T:関数の型
]]]

#### Arguments

[[[params once
func: 一度だけ呼び出される関数
]]]

#### Returns

[[[returns once

]]]