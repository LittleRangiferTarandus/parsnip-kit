# camelCase
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
把字符串转换到小驼峰命名。

> Added in v0.0.1



### Usage

```ts
import { camelCase } from 'parsnip-kit'

camelCase('HelloWorld') // 'helloWorld'
camelCase('helloWorld') // 'helloWorld'
camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('HELLO_WORLD') // 'helloWorld'
camelCase('Hello World') // 'helloWorld'
camelCase('-_HELLO World -_') // 'helloWorld'
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