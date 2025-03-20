# escapeRegExp
[[[desc escapeRegExp
  文字列 `str` の正規表現メタ文字をエスケープし、エスケープ後の文字列を返します。
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
str:エスケープする文字列
]]]

#### Returns

[[[returns escapeRegExp

]]]
