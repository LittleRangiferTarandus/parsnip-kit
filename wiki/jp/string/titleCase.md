# titleCase
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Convert the string to Title Case, with words separated by spaces and each word capitalized.

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
| `arg` | `any` | `false` | `undefined` | The string to be converted. |

#### Returns

| Type |
| ---  |
| `string`  |