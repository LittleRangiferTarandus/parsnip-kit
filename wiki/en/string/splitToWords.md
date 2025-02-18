# splitToWords
      
Split the string used for naming into individual words.

### Usage

```ts
import { splitToWords } from 'parsnip-kit'

splitToWords('-_i need 123XmlHTTPRequest -_') // ['i', 'need', '123', 'Xml', 'HTTP', 'Request']
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |
      
### Returns

| Type |
| ---  |
| `string[]`  |