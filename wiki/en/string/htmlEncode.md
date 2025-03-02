# htmlEncode
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Encode the string into HTML entities, converting special characters (such as <, >, &) to their corresponding HTML entities (e.g., `&lt;`, `&gt;`, `&amp;`). This prevents these characters from being mistakenly interpreted as part of HTML tags by the browser.

> Added in v0.0.1



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

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string`  |