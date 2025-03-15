# isEqualStrict
[[[desc isEqualStrict
输入两个参数`arg1`和`arg2`，返回它们是否严格相等。
]]]

[[[version isEqualStrict
  
]]]
### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // false
isEqualStrict(NaN, NaN) // true
isEqualStrict({ a: 1 }, { a: 1 }) // false
```


### API

#### Arguments
[[[params isEqualStrict
arg1:待比较的变量
arg2:待比较的变量
]]]
#### Returns
[[[returns isEqualStrict

]]]