# upperSnakeCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Convert the string to UPPERCASE_SNAKE_CASE.

> Added in v0.0.1



### Usage

```ts
import { upperSnakeCase } from 'parsnip-kit'

upperSnakeCase('HelloWorld') // 'HELLO_WORLD'
upperSnakeCase('helloWorld') // 'HELLO_WORLD'
upperSnakeCase('hello-world') // 'HELLO_WORLD'
upperSnakeCase('hello_world') // 'HELLO_WORLD'
upperSnakeCase('HELLO_WORLD') // 'HELLO_WORLD'
upperSnakeCase('Hello World') // 'HELLO_WORLD'
upperSnakeCase('-_HELLO World -_') // 'HELLO_WORLD'
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