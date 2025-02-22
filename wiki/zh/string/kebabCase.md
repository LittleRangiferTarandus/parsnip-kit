# kebabCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
把字符串转换到短横线命名。

### Usage

```ts
import { kebabCase } from 'parsnip-kit'

kebabCase('HelloWorld') // 'hello-world'
kebabCase('helloWorld') // 'hello-world'
kebabCase('hello-world') // 'hello-world'
kebabCase('hello_world') // 'hello-world'
kebabCase('HELLO_WORLD') // 'hello-world'
kebabCase('Hello World') // 'hello-world'
kebabCase('-_HELLO World -_') // 'hello-world'
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