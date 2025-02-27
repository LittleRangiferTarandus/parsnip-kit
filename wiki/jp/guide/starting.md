# Parsnip-Kit とは？

Parsnip-Kit は、ゼロディペンダシ、マルチファンクション、モジュラライズされた JavaScript ユーティリティライブラリで、TypeScript をサポートしています。

このライブラリは、型チェック、配列、オブジェクト、文字列、関数、非同期処理、数値、統計、ランダムなど、開発におけるほとんどのニーズをカバーするツール関数を提供します。これにより、アプリケーションにおけるテンプレートコードを削減し、保守性を向上させることができます。

Parsnip-Kit は、モダンな JavaScript API を使用して書かれており、すべてのツール関数が TypeScript の型定義をサポートしています。アプリケーションの開発やソースコードの閲覧において、開発者に快適な体験を提供します。

# 使用例
```typescript
import {
  sum,
  median,
  average,
  pairsToObject,
  leftJoin,
  getByPath,
  omit,
  pick
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

pairsToObject(data, 'name', 'blog.fans')
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