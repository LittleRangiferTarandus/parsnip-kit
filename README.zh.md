# <center> Parsnip-Kit

[![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.2-blue)](https://www.typescriptlang.org/) [![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Parsnip-Kit 是一个零依赖的 JavaScript 工具库，支持 TypeScript。它提供了一系列实用的工具函数，帮助开发者更高效地处理常见的编程任务。

## 语言版本
- [中文](README.zh.md)
- [English](README.md)
- [日本語](README.jp.md)

# 安装
```sh 
npm install parsnip-kit
```


## 功能特点
1. **🧳 零依赖**：完全无外部依赖，轻量级且高效，适合各种大小的项目。
2. **🔩 多功能**：支持数组、对象、数组、字符串、类型判断、异步、函数、统计等模块，加入迫切需要的工具函数，满足开发需求。
3. **💡 类型友好**：使用 TypeScript 编写，提供准确而完整的类型提示，提升开发体验和代码质量。
4. **🚀 现代化**：基于现代 JavaScript API 构建，致力于为开发者原生提供尚未支持的常用工具函数。
5. **📦 模块化**：支持 ES6 模块化，支持 Tree-shaking。
6. **🛠️ 易维护**：项目具有完善的单元测试和代码规范，同时配备自动化文档生成以及文档站点项目，易于后续的扩展与维护。

## 使用场景
Parsnip-Kit 适用于各种 JavaScript 和 TypeScript 项目，无论是小型工具还是大型应用。它旨在提供简洁、高效的工具函数，帮助开发者节省时间和精力。

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

## 文档与支持
- **文档**：（暂未开放）[查看文档](https://example.com/docs)以了解更多功能和使用方法。
- **支持**：在使用过程中遇到问题？欢迎提交 [Issue](https://github.com/LittleRangiferTarandus/parsnip-kit/issues) 或 [Pull Request](https://github.com/LittleRangiferTarandus/parsnip-kit/pulls)。

## 许可
Parsnip-Kit 采用 [MIT 许可证](LICENSE)，详情请查看 [LICENSE](LICENSE) 文件。

---

感谢您使用 Parsnip-Kit！