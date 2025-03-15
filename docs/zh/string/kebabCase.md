# kebabCase
[[[desc kebabCase
把字符串转换到短横线命名。
]]]
[[[version kebabCase
  
]]]
### Usage

```ts
import { kebabCase } from 'parsnip-kit'

kebabCase('HelloWorld') // 'hello-world'
kebabCase('helloWorld') // 'hello-world'
kebabCase('hello-world') // 'hello-world'
kebabCase('hello_world') // 'hello-world'
kebabCase('HELLO_WORLD') // 'hello-world'
kebabCase('Hello World') // 'hello-world'
kebabCase('-_HELLO World -_') // 'hello-world'
```


### API

#### Arguments
[[[params kebabCase
arg:待转换的字符串
]]]
#### Returns
[[[returns kebabCase

]]]