# htmlDecode
[[[desc htmlDecode

]]]
[[[version htmlDecode
  
]]]
### Usage

```ts
import { htmlDecode } from 'parsnip-kit'

htmlDecode('&#39;test&#39;') // '\'test\''
htmlDecode('&quot;test&quot;') // '"test"'
htmlDecode('&lt;img/&gt;') // '<img/>'
htmlDecode('talk &amp; code') // 'talk & code'
```


### API

#### Arguments
[[[params htmlDecode

]]]
#### Returns
[[[returns htmlDecode

]]]