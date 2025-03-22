# convertDataUnit
[[[desc convertDataUnit
  
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

#### Type Parameter

[[[template convertDataUnit

]]]

#### Arguments

[[[params convertDataUnit

]]]

#### Returns

[[[returns convertDataUnit

]]]

#### Reference

[DataUnit](../common/types#dataunit)