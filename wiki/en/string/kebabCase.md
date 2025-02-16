# kebabCase
      
Convert the string to kebab-case.

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
| `arg` | `any` | `false` | `undefined` | `The string to be converted.` |
      
### Returns

| Type |
| ---  |
| `string`  |