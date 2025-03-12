# lowercaseStr
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
生成长度为`length`的随机字符串，`options`参数用于指定字符的取值范围，默认为大小写英文字母和数字。

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
| `length` | `number` | `false` | `undefined` | 待生成的字符串长度 @en |
| `options` | `RandomStringOptions` | `true` | `undefined` | 生成字符串的选项  |
| `options.lowercase` | `boolean` | `true` | `true` | 是否包含小写英文字母  |
| `options.uppercase` | `boolean` | `true` | `true` | 是否包含大写英文字母  |
| `options.number` | `boolean` | `true` | `true` | 是否包含数字  |
| `options.symbol` | `boolean` | `true` | `false` | 是否包含符号：`'!@#$%^&*()_+-=[]{}|;:,.<>?'`  |
| `options.customized` | `string` | `true` | `undefined` | 包含的自定义字符  |

#### Returns

| Type |
| ---  |
| `any`  |
# RandomStringOptions
      
`randomString`函数的参数`options`的类型。

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