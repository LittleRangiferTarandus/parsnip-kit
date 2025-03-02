# snakeCase
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
把字符串转换到蛇形命名。

> Added in v0.0.1



### Usage

```ts
import { snakeCase } from 'parsnip-kit'

snakeCase('HelloWorld') // 'hello_world'
snakeCase('helloWorld') // 'hello_world'
snakeCase('hello-world') // 'hello_world'
snakeCase('hello_world') // 'hello_world'
snakeCase('HELLO_WORLD') // 'hello_world'
snakeCase('Hello World') // 'hello_world'
snakeCase('-_HELLO World -_') // 'hello_world'
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `string` | `false` | `undefined` | 待转换的字符串  |

#### Returns

| Type |
| ---  |
| `string`  |