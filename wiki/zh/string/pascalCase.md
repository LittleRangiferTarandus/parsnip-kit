# pascalCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
把字符串转换到大驼峰命名。

> Added in v0.0.1



### Usage

```ts
import { pascalCase } from 'parsnip-kit'

pascalCase('HelloWorld') // 'HelloWorld'
pascalCase('helloWorld') // 'HelloWorld'
pascalCase('hello-world') // 'HelloWorld'
pascalCase('hello_world') // 'HelloWorld'
pascalCase('HELLO_WORLD') // 'HelloWorld'
pascalCase('Hello World') // 'HelloWorld'
pascalCase('-_HELLO World -_') // 'HelloWorld'
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