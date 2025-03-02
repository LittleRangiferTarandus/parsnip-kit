# titleCase
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
把字符串转换到标题命名，单词之间用空格间隔，首字母大写。

> Added in v0.0.1



### Usage

```ts
import { titleCase } from 'parsnip-kit'

titleCase('HelloWorld') // 'Hello World'
titleCase('helloWorld') // 'Hello World'
titleCase('hello-world') // 'Hello World'
titleCase('hello_world') // 'Hello World'
titleCase('HELLO_WORLD') // 'Hello World'
titleCase('Hello World') // 'Hello World'
titleCase('-_HELLO World -_') // 'Hello World'
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