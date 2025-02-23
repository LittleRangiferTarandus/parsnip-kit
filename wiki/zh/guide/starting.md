# 什么是 Parsnip-Kit ？

Parsnip-Kit 是一个零依赖、多功能、模块化的 JavaScript 工具库，支持 TypeScript。

它提供涵盖了类型检查、数组、对象、字符串、函数、异步、数字、统计、随机数等方面的工具函数，覆盖开发中的大部分需求，让我们的应用减少模板代码，增加可维护性。

Parsnip-Kit 使用现代 JavaScript API 编写，所有工具函数都支持 TypeScript 类型，不管是开发应用还是阅读源码，都能带给开发者清新的体验。

# 使用示例
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