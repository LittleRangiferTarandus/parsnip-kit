# parseTemplate
[[[desc parseTemplate
  テンプレート文字列 `template` を解析し、`parser`に基づいてプレースホルダーを実際の値に置き換えます。

  `parser` は関数または非関数オブジェクトのいずれかです。
  
  `parser` が関数の場合、マッチしたパターン文字列を引数として呼び出し、置き換える实际の値を返す必要があります。

  `parser` が非関数オブジェクトの場合、[getByPath](../object/getByPath) を使用し、`parser` とマッチしたパターン文字列を引数として使用します。返り値がパターンを置き換えます。

  置き換える实际の値が `undefined` または `null` の場合、パターン文字列を保持します。

  オプションの `options` を使って、パターン文字列の開始と終了のデリミタを設定できます。
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
template: 置き換えるテンプレート
parser: プレースホルダーを実際の値に置き換える
options: デリミタを設定する
options.start: 開始デリミタを設定する
options.end: 終了デリミタを設定する
]]]

#### Returns

[[[returns parseTemplate

]]]

#### Reference

[ObjectLike](../common/types#objectlike)
