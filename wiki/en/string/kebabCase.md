# kebabCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Convert the string to kebab-case.

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
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string`  |