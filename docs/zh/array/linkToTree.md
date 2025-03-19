# linkToTree
[[[desc linkToTree
将扁平数组 `arr` 转换为树形结构，并返回根节点数组。这对于从扁平数组构建树形的选项非常有用。

需要注意的是，函数 `linkToTree` 会修改 `arr` 中的元素。

可选参数：
- `getKey`：用于获取每个元素的唯一标识。值为 [getByPath](../object/getByPath) 的字段路径或者一个函数。
- `getParent`：获取每个元素的亲代节点标识。与 `getKey` 类似，值为 [getByPath](../object/getByPath) 的字段路径或函数。
- `childrenPath`：指定对象中存储子元素的字段路径。默认值为 `'children'`。访问和修改子节点时，[getByPath](../object/getByPath) 和 [setByPath](../object/setByPath) 都会使用这个变量。
]]]
[[[version linkToTree
  
]]]

### Usage

```ts
import { linkToTree } from 'parsnip-kit'

const arr = [
  { id: '1', parentId: null, name: 'Root 1' },
  { id: '2', parentId: '1', name: 'Child 1' },
  { id: '3', parentId: '1', name: 'Child 2' },
  { id: '4', parentId: '2', name: 'Grandchild 1' },
  { id: '5', parentId: null, name: 'Root 2' }
]

const result = linkToTree(arr, 'id', 'parentId', 'items')

// [
//   {
//     id: '1',
//     parentId: null,
//     name: 'Root 1',
//     items: [
//       {
//         id: '2',
//         parentId: '1',
//         name: 'Child 1',
//         items: [
//           {
//             id: '4',
//             parentId: '2',
//             name: 'Grandchild 1',
//             items: []
//           }
//         ]
//       },
//       {
//         id: '3',
//         parentId: '1',
//         name: 'Child 2',
//         items: []
//       }
//     ]
//   },
//   {
//     id: '5',
//     parentId: null,
//     name: 'Root 2',
//     items: []
//   }
// ]

```


### API

#### Type Parameter

[[[template linkToTree
T: 数组 `arr` 中元素的类型
R: `childrenPath` 的类型
]]]

#### Arguments

[[[params linkToTree
arr:要转换为树形结构的扁平数组
getKey:用于获取数组元素唯一标识
getParent：用于获取亲代节点的标识
childrenPath：存储子元素的数组的对象字段路径
]]]

#### Returns

[[[returns linkToTree

]]]

#### Reference

[LiteralStringWithFallback](../common/types#literalstringwithfallback) [DeepMappedTypeByKeyOrIndex](../common/types#deepmappedtypebykeyorindex)