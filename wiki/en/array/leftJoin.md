# leftJoin
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input two arrays `left` and `right`, and output the array formed by performing a left join of `left` with `right`. This is commonly used to combine arrays of objects that contain related information, similar to how it is done in SQL. Additionally, it accepts two parameters: `leftKey` and `rightKey`. These can be field paths similar to [getByPath](../object/getByPath) or callback functions, used to provide identifiers to distinguish elements. The `merge` function is used to generate the output array objects.

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


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `left` | `object[]` | `false` | `undefined` | The left array in a left join |
| `right` | `object[]` | `false` | `undefined` | The right array in a left join |
| `leftKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | Provide an identifier to distinguish elements in the left array |
| `rightKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | Provide an identifier to distinguish elements in the right array |
| `merge` | `(left: any, right: any \| undefined) => any` | `false` | `undefined` | Return the result of merging elements from left and right arrays. |

#### Returns

| Type |
| ---  |
| `any[]`  |