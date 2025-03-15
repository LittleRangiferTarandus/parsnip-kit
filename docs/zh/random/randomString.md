# randomString
[[[desc randomString
生成长度为`length`的随机字符串，`options`参数用于指定字符的取值范围，默认为大小写英文字母和数字。
]]]
[[[version randomString
  
]]]
### Usage

```ts
import { randomString } from 'parsnip-kit'

randomString(10)
// a string including uppercase letters, lowercase letters, numbers, for example 'Dij1mzPzyW'

randomString(10, { number: false })
// a string only including letters, for example 'iYyyWSReNw'

randomString(10, { uppercase: false, lowercase: false })
// a string only including numbers, for example '2398543147'

randomString(10, { symbol: true })
// a string including uppercase letters, lowercase letters, numbers and symbols
// for example 'gI(CThCMK%'

randomString(
  10,
  {
    uppercase: false, lowercase: false, number: false,
    customized: 'αβγδεζηθικλμνξοπρστυφχψω'
  }
)
// a string only including lowercase Greek letters, for example 'γμχβωζπθοχ'
```


### API

#### Arguments
[[[params randomString
length:待生成的字符串长度
options:生成字符串的选项
]]]
#### Returns
[[[returns randomString
options.lowercase:是否包含小写英文字母
options.uppercase:是否包含大写英文字母
options.number:是否包含数字
options.symbol:是否包含符号：`'!@#$%^&*()_+-=[]{}|;:,.<>?'`
options.customized:包含的自定义字符
]]]

# RandomStringOptions
[[[desc RandomStringOptions
`randomString`函数的参数`options`的类型。
]]]
[[[version RandomStringOptions
  
]]]
### Source
[[[source RandomStringOptions
  
]]]