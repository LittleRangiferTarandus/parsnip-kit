# splitToArrays
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
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

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Type of original object |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Original object |
| `createItem` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | To create element of array to be returned |

#### Returns

| Type |
| ---  |
| `any[]`  |