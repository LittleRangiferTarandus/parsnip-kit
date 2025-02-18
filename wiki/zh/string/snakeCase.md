# snakeCase
      
把字符串转换到蛇形命名。

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `string` | `false` | `undefined` | {"zh": "待转换的字符串", "en": "The string to be converted."} |
      
### Returns

| Type |
| ---  |
| `string`  |