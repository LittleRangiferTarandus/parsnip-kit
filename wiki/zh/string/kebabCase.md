# kebabCase
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
把字符串转换到短横线命名。

### Usage

```ts
import { camelCase } from 'parsnip-kit'

camelCase('HelloWorld') // 'hello-world'
camelCase('helloWorld') // 'hello-world'
camelCase('hello-world') // 'hello-world'
camelCase('hello_world') // 'hello-world'
camelCase('HELLO_WORLD') // 'hello-world'
camelCase('Hello World') // 'hello-world'
camelCase('-_HELLO World -_') // 'hello-world'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |
      
### Returns

| Type |
| ---  |
| `string`  |