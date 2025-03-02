# htmlEncode
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
将字符串进行 HTML 编码，将特殊字符（如 <、>、&）转换为对应的 HTML 实体（如 `&lt;`、`&gt;`、`&amp;`），从而防止这些字符被浏览器错误解析为 HTML 标签的一部分。

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
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |

#### Returns

| Type |
| ---  |
| `string`  |