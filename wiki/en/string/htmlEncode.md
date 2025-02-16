# htmlEncode
      
Encode the string into HTML entities, converting special characters (such as <, >, &) to their corresponding HTML entities (e.g., `&lt;`, `&gt;`, `&amp;`). This prevents these characters from being mistakenly interpreted as part of HTML tags by the browser.

### Usage

```ts
import { htmlEncode } from 'parsnip-kit'

htmlEncode('\'test\'') // '&#39;test&#39;'
htmlEncode('"test"') // '&quot;test&quot;'
htmlEncode('<img/>') // '&lt;img/&gt;'
htmlEncode('talk & code') // 'talk &amp; code'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `The string to be converted.` |
      
### Returns

| Type |
| ---  |
| `string`  |