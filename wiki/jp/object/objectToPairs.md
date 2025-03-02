# objectToPairs
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
input an object `obj`, and output an array composed of arrays formed by each field's key-value pairs, or composed of the results returned by the optional parameter `createItem`.

> Added in v0.0.1



### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToPairs(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Original object |
| `createItem` | `(value: any, key: string, obj: any) => any` | `true` | `undefined` | To create element of array to be returned |

#### Returns

| Type |
| ---  |
| `any[]`  |