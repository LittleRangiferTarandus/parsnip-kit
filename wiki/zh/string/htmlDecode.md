# htmlDecode
      
将字符串进行 HTML 解码，将特定的 HTML 实体（如 `&lt;`、`&gt;`、`&amp;`）还原为普通字符（如 <、>、&）。

### Usage

```ts
htmlDecode('&#39;test&#39;') // '\'test\''
htmlDecode('&quot;test&quot;') // '"test"'
htmlDecode('&lt;img/&gt;') // '<img/>'
htmlDecode('talk &amp; code') // 'talk & code'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `string` | `false` | `undefined` | `待转换的字符串` |
      
### Returns

| Type |
| ---  |
| `string`  |