# pascalCase
      
把字符串转换到大驼峰命名。

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | 待转换的字符串  |
      
### Returns

| Type |
| ---  |
| `string`  |