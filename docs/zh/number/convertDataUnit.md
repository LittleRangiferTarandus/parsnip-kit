# convertDataUnit
[[[desc convertDataUnit
  在不同单位之间转换数据（例如，bit、byte、kilobyte 等）。
  
  支持二进制前缀和十进制前缀。

  二进制前缀基于 2 的幂（例如，1 KiB = 2^10字节），由国际电工委员会（IEC）定义，而十进制前缀是国际单位制（SI）的一部分，基于 10 的幂（例如，1 kB = 10^3字节）。
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

#### Arguments

[[[params convertDataUnit
value: 要转换的数据大小的值
from: 数据大小的原始单位
to: 要转换到的目标数据单位
prefix: 转换中使用的前缀类型（二进制或十进制），默认为 `'binary'`
]]]

#### Returns

[[[returns convertDataUnit

]]]

#### Reference

[DataUnit](../common/types#dataunit)