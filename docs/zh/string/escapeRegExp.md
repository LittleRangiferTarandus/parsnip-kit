# escapeRegExp
[[[desc escapeRegExp
  对字符串 `str` 中的正则元字符进行转义，返回转义后的字符串。
]]]
[[[version escapeRegExp
  
]]]

### Usage

```ts
import { escapeRegExp } from 'parsnip-kit'

escapeRegExp('hello world')
// 'hello world'

escapeRegExp('${name}')
// '\\$\\{name\\}'

```


### API

#### Arguments

[[[params escapeRegExp
str:待转义的字符串
]]]

#### Returns

[[[returns escapeRegExp

]]]
