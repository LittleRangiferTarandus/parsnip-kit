# htmlDecode
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Decode the string from HTML entities, converting specific HTML entities (such as `&lt;`, `&gt;`, `&amp;`) back to their corresponding plain characters (e.g., <, >, &).

> Added in v0.0.1



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

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string`  |