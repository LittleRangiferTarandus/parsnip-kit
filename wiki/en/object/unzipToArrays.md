# unzipToArrays
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an object `obj`, and output two arrays: one containing its keys and the other containing its values.

> Added in v0.0.1



### Usage

```ts
import { unzipToArrays } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
unzipToArrays(obj)
// [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]

unzipToArrays(obj, (_, key) => key.toUpperCase(), (value) => value + '')
// [['ALEX', 'BOB', 'CARTER', 'DANIEL'], ['16', '659', '155', '825']]

```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Type of original object |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | Original object |
| `createKey` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | To create element of array of keys to be returned |
| `createValue` | `(value: T[string & keyof T], key: string, obj: T) => any` | `true` | `undefined` | To create element of array of values to be returned |

#### Returns

| Type |
| ---  |
| `[string[], any[]]`  |