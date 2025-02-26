# splitToArrays
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input an object `obj`, and output an array of plain objects formed from each field of the `obj`, split by the object, or composed of the results returned by the optional parameter `createItem`.

> Added in v0.0.1



### Usage

```ts
import { splitToArrays } from 'parsnip-kit'

const obj = {
  Alex: 16,
  Bob: 659,
  Carter: 155,
  Daniel: 825
}
splitToArrays(obj)
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]

splitToArrays(obj, (value, key) => [key, value])
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
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