# pairsToObject
      
输入一个二维数组`pairs`，输出从每一项数组中提取的键值对组成的普通对象。可选参数`getKey`和`getValue`用于把子数组转换为键和值，为空时默认取数组第 0 个元素作为键，第 1 个元素作为值。`getKey`和`getValue`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。

### Usage

```ts
import { pairsToObject } from 'parsnip-kit'

const users = [['Alex', 16, 'vip'], ['Bob', 659, 'viewer'], ['Carter', 155, 'user'], ['Daniel', 825, 'user']]

pairsToObject(users)
// { Alex: 16, Bob: 659, Carter: 155, Daniel: 825 }

pairsToObject(users, '[0]', '[2]')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

pairsToObject(users, pair => pair[0], pair => `${pair[1]} replies`)
// { Alex: '16 replies', Bob: '659 replies', Carter: '155 replies', Daniel: '825 replies' }
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `pairs` | `any[]` | `false` | `undefined` | 键值对二维数组  |
| `getKey` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | 从子数组中提取键   |
| `getValue` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | 从子数组中提取值   |
      
### Returns

| Type |
| ---  |
| `{}`  |