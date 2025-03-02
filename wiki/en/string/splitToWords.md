# splitToWords
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Split the string used for naming into individual words.

> Added in v0.0.1



### Usage

```ts
import { splitToWords } from 'parsnip-kit'

splitToWords('-_i need 123XmlHTTPRequest -_') // ['i', 'need', '123', 'Xml', 'HTTP', 'Request']
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string[]`  |