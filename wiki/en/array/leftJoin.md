# leftJoin
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input two arrays `left` and `right`, and output the array formed by performing a left join of `left` with `right`. This is commonly used to combine arrays of objects that contain related information, similar to how it is done in SQL. Additionally, it accepts two parameters: `leftKey` and `rightKey`. These can be field paths similar to [getByPath](../object/getByPath) or callback functions, used to provide identifiers to distinguish elements. The `merge` function is used to generate the output array objects.

> Added in v0.0.1



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

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Type of elements of left array in a left join |
| `U` | `extends object` | Type of elements of right array in a left join |
| `R` | `extends object` | Type of elements of array returned |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `left` | `T[]` | `false` | `undefined` | The left array in a left join |
| `right` | `U[]` | `false` | `undefined` | The right array in a left join |
| `leftKey` | `string \| ((item: T, index: number, arr: T[]) => any)` | `false` | `undefined` | Provide an identifier to distinguish elements in the left array |
| `rightKey` | `string \| ((item: U, index: number, arr: U[]) => any)` | `false` | `undefined` | Provide an identifier to distinguish elements in the right array |
| `merge` | `(left: T, right: U \| undefined) => R` | `false` | `undefined` | Return the result of merging elements from left and right arrays. |

#### Returns

| Type |
| ---  |
| `R[]`  |