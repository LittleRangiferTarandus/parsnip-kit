# percent
[[[desc percent
输入数值`num`和总数`total`（默认 100），返回格式化的百分比字符串。可选参数`fixed`，控制小数位数，默认为 2。
]]]

[[[version percent
  
]]]
### Usage

```ts
import { percent } from 'parsnip-kit'

percent(50) // '50.00%'
percent(25, 100) // '25.00%'
percent(75, 200) // '37.50%'
percent(75, 200, 0) // '38%'
percent(0) // '0.00%'
```


### API

#### Arguments
[[[params percent
num:要计算的数值
total:总数
fixed:小数位数
]]]
#### Returns
[[[returns percent

]]]