# pascalCase
[[[desc pascalCase
把字符串转换到大驼峰命名。
]]]
[[[version pascalCase
  
]]]
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


### API

#### Arguments
[[[params pascalCase
arg:待转换的字符串
]]]
#### Returns
[[[returns pascalCase

]]]