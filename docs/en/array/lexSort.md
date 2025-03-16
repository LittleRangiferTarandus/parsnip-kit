# lexSort
[[[desc lexSort
]]]
[[[version lexSort
  
]]]

### Usage

```ts
import { lexSort } from 'parsnip-kit'

const fruits = ['banana', 'apple', 'cherry', 'date']
lexSort(fruit)
// ['apple', 'banana', 'cherry', 'date']

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]

lexSort([...people], 'desc', 'name')
// [
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 },
//   { name: 'Alice', age: 25 }
// ]

lexSort([...people], 'asc', item => item.name)
// [
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 },
//   { name: 'Alice', age: 25 }
// ]
```


### API

#### Type Parameter

[[[template lexSort
]]]

#### Arguments

[[[params lexSort
]]]

#### Returns

[[[returns lexSort

]]]
