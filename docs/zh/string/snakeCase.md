# snakeCase
[[[desc snakeCase
把字符串转换到蛇形命名。
]]]
[[[version snakeCase
  
]]]
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


### API

#### Arguments
[[[params snakeCase
arg:待转换的字符串
]]]
#### Returns
[[[returns snakeCase

]]]