# titleCase
      
把字符串转换到标题命名，单词之间用空格间隔，首字母大写。

### Usage

```ts
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
| `-` | `string` | `false` | `undefined` | `待转换的字符串` |
      
### Returns

| Type |
| ---  |
| `string`  |