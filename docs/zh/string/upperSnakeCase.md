# upperSnakeCase
[[[desc upperSnakeCase
把字符串转换到大写蛇形命名。
]]]
[[[version upperSnakeCase
  
]]]
### Usage

```ts
import { upperSnakeCase } from 'parsnip-kit'

upperSnakeCase('HelloWorld') // 'HELLO_WORLD'
upperSnakeCase('helloWorld') // 'HELLO_WORLD'
upperSnakeCase('hello-world') // 'HELLO_WORLD'
upperSnakeCase('hello_world') // 'HELLO_WORLD'
upperSnakeCase('HELLO_WORLD') // 'HELLO_WORLD'
upperSnakeCase('Hello World') // 'HELLO_WORLD'
upperSnakeCase('-_HELLO World -_') // 'HELLO_WORLD'
```


### API

#### Arguments
[[[params upperSnakeCase
arg:待转换的字符串
]]]
#### Returns
[[[returns upperSnakeCase

]]]