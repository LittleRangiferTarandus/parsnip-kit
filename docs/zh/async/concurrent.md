# concurrent

[[[desc concurrent
并发执行一组返回`Promise`的函数`functions`，参数`limit`限制同时运行的数量。
]]]

[[[version concurrent
  
]]]

### Usage

```ts
import { concurrent } from 'parsnip-kit'

const functions = Array.from(
  { length: 5 },
  (_, i) => () =>
    new Promise<number>((resolve) => {
      setTimeout(() => { resolve(i) }, i * 100)
    })

concurrent(functions, 2).then(res => {
  console.log(res)
  // [{ status: 'fulfilled', value: 0 }, { status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'fulfilled', value: 3 }, { status: 'fulfilled', value: 4 }]
})
```


### API

#### Type Parameter

[[[template concurrent
T:返回`Promise`的`value`类型
]]]

#### Arguments

[[[params concurrent
functions:返回`Promise`的函数数组
limit:同时运行的函数数量限制
]]]

#### Returns

[[[returns concurrent

]]]