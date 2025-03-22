# convertDataUnit
[[[desc convertDataUnit
  データを異なる単位（ビット、バイト、キロバイトなど）に変換します。

  二進制接頭語と十進制接頭語をサポートしています。

  二進制接頭語は、国際電気標準会議（IEC）によって定義され、2 の冪に基づいています（例：1 KiB = 2^10 バイト）。十進制接頭語は、国際単位系（SI）の一部であり、10 の冪に基づいています（例：1 kB = 10^3 バイト）。
]]]
[[[version convertDataUnit
  
]]]

### Usage

```ts
import { convertDataUnit } from 'parsnip-kit'

convertDataUnit(1, 'bit', 'B', 'binary') // 8
convertDataUnit(1, 'bit', 'B', 'decimal') // 8

convertDataUnit(1024, 'bit', 'KB', 'binary') // 0.125
convertDataUnit(1024, 'bit', 'KB', 'decimal') // 0.128

```


### API

#### Arguments

[[[params convertDataUnit
value: 変換するデータサイズの値
from: データサイズの元の単位
to: 変換する目標データ単位
prefix: 変換に使用する接頭語の種類（二進制または十進制）。デフォルトは `'binary'` です
]]]

#### Returns

[[[returns convertDataUnit

]]]

#### Reference

[DataUnit](../common/types#dataunit)