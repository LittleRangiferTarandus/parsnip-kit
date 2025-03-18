# linkToTree
[[[desc linkToTree
  扁平な配列 `arr` をツリー構造に変換し、ルートノードの配列を返します。これにより、フラットな配列からツリー構造のオプションを構築する際に非常に便利です。

  注意：関数 `linkToTree` が `arr` の要素を変更する可能性があることです。

  オプションのパラメータ：
  - `getKey`：各要素の一意の識別子を取得するために使用されます。[getByPath](../object/getByPath) のフィールドパスまたは関数です。
  - `getParent`：各要素の親ノードの識別子を取得します。`getKey` と同様に、[getByPath](../object/getByPath) のフィールドパスまたは関数です。
  - `childrenPath`：オブジェクト内で子要素を格納するフィールドパスを指定します。デフォルトは `'children'` です。子ノードにアクセスしたり変更したりする際に、[getByPath](../object/getByPath) と [setByPath](../object/setByPath) はこの変数を使用します。
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
getKey：各要素の一意の識別子を取得するために使用されます
getParent：各要素の親ノードの識別子を取得します
childrenPath：オブジェクト内で子要素を格納するフィールドパスを指定します
]]]

#### Arguments

[[[params linkToTree
arr：ツリー構造に変換されるフラットな配列です
getKey：配列要素の一意の識別子を取得するために使用します
getParent：親ノードの識別子を取得するために使用します
childrenPath：子要素を格納するオブジェクトのフィールドパスです
]]]

#### Returns

[[[returns linkToTree

]]]

#### Reference

[LiteralStringWithFallback](../common/types#literalstringwithfallback) [DeepMappedTypeByKeyOrIndex](../common/types#deepmappedtypebykeyorindex)