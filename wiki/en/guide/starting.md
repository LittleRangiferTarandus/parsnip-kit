# What is Parsnip-Kit?

Parsnip-Kit is a zero-dependency, multi-functional, modular JavaScript utility library that supports TypeScript.

It provides a wide range of utility functions covering type checking, arrays, objects, strings, functions, asynchronous operations, numbers, statistics, and random numbers, meeting most development needs and reducing boilerplate code in our applications while increasing maintainability.

Written using modern JavaScript APIs, Parsnip-Kit supports TypeScript types for all utility functions, offering developers a refreshing experience whether they are developing applications or reading the source code.

# Example Usage
```ts
import {
  sum, median, average,
  itemsToObject, leftJoin,
  getByPath, omit, pick
} from 'parsnip-kit'

const data = [
  {
    id: 13, name: 'Alice', email: 'alice@example.test',
    blog: { count: 15, fans: 45 }
  },
  {
    id: 18, name: 'Bob', email: 'bob@example.test',
    blog: { count: 55, fans: 1546 }
  },
  {
    id: 35, name: 'Carlin', email: 'carlin@example.test',
    blog: { count: 116, fans: 56563 }
  }
]
const profile = [
  { id: 13, age: 44, nickname: 'coding neko' },
  { id: 18, age: 30, nickname: 'kurisutina' },
  { id: 35, age: 23, nickname: 'Bob - Software Engineer' }
]

average(data, 'blog.count') // 62
sum(data, 'blog.count') // 186
median(data, 'blog.count') // 55

itemsToObject(data, 'name', 'blog.fans')
// { Alice: 45, Bob: 1546, Carlin: 56563 }

getByPath(data, '[0].email')
// 'alice@example.test'

omit(data[0], ['blog'])
// { id: 13, name: 'Alice', email: 'alice@example.test' }
pick(data[0], ['id', 'name', 'blog'])
// { id: 13, name: 'Alice', blog: { count: 15, fans: 45 } }

leftJoin(data, profile, 'id', 'id', (a, b) => ({...a, ...b}))
// [
//   {
//     id: 13, name: 'Alice', email: 'alice@example.test',
//     age: 30, nickname: 'kurisutina',
//     blog: { count: 15, fans: 45 }
//   },
//   {
//     id: 18, name: 'Bob', email: 'bob@example.test',
//     age: 30, nickname: 'kurisutina',
//     blog: { count: 55, fans: 1546 }
//   },
//   {
//     id: 35, name: 'Carlin', email: 'carlin@example.test',
//     age: 23, nickname: 'Bob - Software Engineer',
//     blog: { count: 116, fans: 56563 }
//   }
// ]
```