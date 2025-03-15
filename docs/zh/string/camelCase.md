# camelCase
[[[desc camelCase
把字符串转换到小驼峰命名。
]]]
[[[version camelCase
  
]]]
### Usage

```ts
import { camelCase } from 'parsnip-kit'

camelCase('HelloWorld') // 'helloWorld'
camelCase('helloWorld') // 'helloWorld'
camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('HELLO_WORLD') // 'helloWorld'
camelCase('Hello World') // 'helloWorld'
camelCase('-_HELLO World -_') // 'helloWorld'
```


### API

#### Arguments
[[[params camelCase
arg:待转换的字符串
]]]
#### Returns
[[[returns camelCase

]]]