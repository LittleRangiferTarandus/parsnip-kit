# htmlEncode
[[[desc htmlEncode
将字符串进行 HTML 编码，将特殊字符（如 <、>、&）转换为对应的 HTML 实体（如 `&lt;`、`&gt;`、`&amp;`），从而防止这些字符被浏览器错误解析为 HTML 标签的一部分。
]]]
[[[version htmlEncode
  
]]]
### Usage

```ts
import { htmlEncode } from 'parsnip-kit'

htmlEncode('\'test\'') // '&#39;test&#39;'
htmlEncode('"test"') // '&quot;test&quot;'
htmlEncode('<img/>') // '&lt;img/&gt;'
htmlEncode('talk & code') // 'talk &amp; code'
```


### API

#### Arguments
[[[params htmlEncode
arg:待转换的字符串
]]]
#### Returns
[[[returns htmlEncode

]]]