# parseTemplate
[[[desc parseTemplate
  解析模板字符串 `template`，并根据 `parser` 将占位的字符串替换为实际值。

  `parser` 可以是函数或非函数对象。如果是函数，则需要将传入匹配的模式字符串转化为实际值。如果是非函数的对象，将以 `parser` 和模式串为参数，调用函数 [getByPath](../object/getByPath) 获取替换的实际值。

  如果实际值为 `undefined` 或者 `null`，将保留占位的模式字符串。

  可选参数 `options` 用于设置模式字符串的开始和结束分隔符。
]]]
[[[version parseTemplate
  
]]]

### Usage

```ts
import { parseTemplate } from 'parsnip-kit'

const template0 = 'Hello, {name}! Your balance is {balance}.'
parseTemplate(template0, { name: 'Alice', balance: '$100' })
// 'Hello, Alice! Your balance is $100.'
parseTemplate(template0, (pattern: string) => data[pattern])
// 'Hello, Alice! Your balance is $100.'

const template1 = 'Are you called {info.name}?'
parseTemplate(template1, { info: { name: 'Administrator' } })
// 'Are you called Administrator?'

const template2 = 'Dear User [username], thank you for registering on our website.'
parseTemplate(template2, { username: 'John Titor' }, { start: '[', end: ']' })
// 'Dear User John Titor, thank you for registering on our website.'

```


### API

#### Arguments

[[[params parseTemplate
template: 要替换的模板
parser: 用于将占位符替换为实际值
options: 用于设置分隔符
options.start: 用于设置起始分隔符
options.end: 用于设置结束分隔符
]]]

#### Returns

[[[returns parseTemplate

]]]
#### Reference

[ObjectLike](../common/types#objectlike)
