# titleCase
[[[desc titleCase
把字符串转换到标题命名，单词之间用空格间隔，首字母大写。
]]]
[[[version titleCase
  
]]]
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
[[[params titleCase
arg:待转换的字符串
]]]
#### Returns
[[[returns titleCase

]]]