# upperSnakeCase
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
把字符串转换到大写蛇形命名。

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
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |

#### Returns

| Type |
| ---  |
| `string`  |