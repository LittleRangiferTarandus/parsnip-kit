# leftJoin
      
输入两个数组`left`、`right`，输出`left`左连接`right`形成的数组，常用于合成包含相关联信息的对象数组，就像 SQL 那样。此外，接收两个参数：`leftKey`和`rightKey`，它们是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。`merge`用于生成输出的数组对象。

### Usage

```ts
import { leftJoin } from 'parsnip-kit'

const leftArray0 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]
const rightArray0 = [
  { id: 1, age: 25 },
  { id: 3, age: 30 },
]

leftJoin(
  leftArray0,
  rightArray0,
  (item) => item.id,
  (item) => item.id,
  (left, right) => ({ ...left, ...(right || {}) }),
) // [{ id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie', age: 30 }]


const leftArray1 = [
  { id: 1, info: { name: 'Alice', age: 25 } },
  { id: 2, info: { name: 'Bob', age: 35 } },
  { id: 3, info: { name: 'Charlie', age: 30 } },
]
const rightArray1 = [
  { name: 'Alice', experience: ['software engineer', 'designer'] },
  { name: 'Charlie', experience: ['freelance'] },
]

leftJoin(
  leftArray1,
  rightArray1,
  'info.name',
  'name',
  (left, right) => ({ name: left.info.name, job: right?.experience[0] ?? null }),
) // [{ name: 'Alice', job: 'software engineer' }, { name: 'Bob', job: null }, { name: 'Charlie', job: 'freelance' }]

```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `left` | `object[]` | `false` | `undefined` | 左连接中左侧的数组  |
| `right` | `object[]` | `false` | `undefined` | 左连接中右侧的数组  |
| `leftKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | 为左侧数组提供区分元素的标识  |
| `rightKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | 为右侧数组提供区分元素的标识  |
| `merge` | `(left: any, right: any \| undefined) => any` | `false` | `undefined` | 返回左右数组元素合并的结果  |
      
### Returns

| Type |
| ---  |
| `any[]`  |