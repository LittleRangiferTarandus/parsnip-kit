# titleCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
把字符串转换到标题命名，单词之间用空格间隔，首字母大写。

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |
      
### Returns

| Type |
| ---  |
| `string`  |