# lowercaseStr
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Generate a random string with a length of `length`. The `options` parameter specifies the character range.

> Added in v0.0.1



### Usage

```ts
import { randomString } from 'parsnip-kit'

randomString(10)
// a string including uppercase letters, lowercase letters, numbers, for example 'Dij1mzPzyW'

randomString(10, { number: false })
// a string only including letters, for example 'iYyyWSReNw'

randomString(10, { uppercase: false, lowercase: false })
// a string only including numbers, for example '2398543147'

randomString(10, { symbol: true })
// a string including uppercase letters, lowercase letters, numbers and symbols
// for example 'gI(CThCMK%'

randomString(
  10,
  {
    uppercase: false, lowercase: false, number: false,
    customized: 'αβγδεζηθικλμνξοπρστυφχψω'
  }
)
// a string only including lowercase Greek letters, for example 'γμχβωζπθοχ'
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `length` | `number` | `false` | `undefined` | @zh 待生成的字符串长度 @en |
| `options` | `RandomStringOptions` | `true` | `undefined` | String generation options |
| `options.lowercase` | `boolean` | `true` | `true` | Whether to include lowercase letters |
| `options.uppercase` | `boolean` | `true` | `true` | Whether to include uppercase letters |
| `options.number` | `boolean` | `true` | `true` | Whether to include numbers |
| `options.symbol` | `boolean` | `true` | `false` | Whether to include symbols: `'!@#$%^&*()_+-=[]{}|;:,.<>?'` |
| `options.customized` | `string` | `true` | `undefined` | Included custom characters |

#### Returns

| Type |
| ---  |
| `any`  |
# RandomStringOptions
      
The `options` parameter of the `randomString` function.

> Added in v0.0.1



### Source

```typescript
export interface RandomStringOptions {
  lowercase?: boolean
  uppercase?: boolean
  number?: boolean
  symbol?: boolean
  customized?: string
}

```