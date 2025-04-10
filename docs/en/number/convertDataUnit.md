# convertDataUnit
[[[desc convertDataUnit
  
]]]
[[[version convertDataUnit
  
]]]

### Usage

```ts
import { convertDataUnit } from 'parsnip-kit'

convertDataUnit(1, 'B', 'bit', 'binary') // 8
convertDataUnit(1, 'B', 'bit', 'decimal') // 8

convertDataUnit(1024, 'B', 'KB', 'binary') // 1
convertDataUnit(1000, 'B', 'KB', 'decimal') // 1

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