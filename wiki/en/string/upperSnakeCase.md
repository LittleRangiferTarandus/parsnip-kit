# upperSnakeCase
      
Convert the string to UPPERCASE_SNAKE_CASE.

### Usage

```ts
upperSnakeCase('HelloWorld') // 'HELLO_WORLD'
upperSnakeCase('helloWorld') // 'HELLO_WORLD'
upperSnakeCase('hello-world') // 'HELLO_WORLD'
upperSnakeCase('hello_world') // 'HELLO_WORLD'
upperSnakeCase('HELLO_WORLD') // 'HELLO_WORLD'
upperSnakeCase('Hello World') // 'HELLO_WORLD'
upperSnakeCase('-_HELLO World -_') // 'HELLO_WORLD'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `string` | `false` | `undefined` | `The string to be converted.` |
      
### Returns

| Type |
| ---  |
| `string`  |