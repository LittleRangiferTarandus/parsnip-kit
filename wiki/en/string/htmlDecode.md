# htmlDecode
      
Decode the string from HTML entities, converting specific HTML entities (such as `&lt;`, `&gt;`, `&amp;`) back to their corresponding plain characters (e.g., <, >, &).

### Usage

```ts
import { htmlDecode } from 'parsnip-kit'

htmlDecode('&#39;test&#39;') // '\'test\''
htmlDecode('&quot;test&quot;') // '"test"'
htmlDecode('&lt;img/&gt;') // '<img/>'
htmlDecode('talk &amp; code') // 'talk & code'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `The string to be converted.` |
      
### Returns

| Type |
| ---  |
| `string`  |