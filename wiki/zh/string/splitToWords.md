# splitToWords
      
把用于命名的字符串拆分为单词。

### Usage

```ts
import { splitToWords } from 'parsnip-kit'

splitToWords('-_i need 123XmlHTTPRequest -_') // ['i', 'need', '123', 'Xml', 'HTTP', 'Request']
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |
      
### Returns

| Type |
| ---  |
| `string[]`  |