# htmlEncode
[[[desc htmlEncode

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

]]]
#### Returns
[[[returns htmlEncode

]]]