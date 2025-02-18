# getByPath
      
Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to retrieve the value. If the traversal is interrupted (e.g., the path is invalid) or the value is undefined or null, use `defaultValue` as the default value.

### Usage

```ts
import { getByPath } from 'parsnip-kit'

getByPath({ a: 1 }, 'a') // 1
getByPath([1], '[0]') // 1
getByPath({ b: [0, 1, 2] }, 'b[2]') // 2
getByPath({ a: [{ b: { c: 'test' } }] }, 'a[0].b.c') // 'test'
getByPath({ a: 1 }, 'a[0].b.c') // undefined
getByPath({ a: 1 }, 'a[0].b.c', 'test') // 'test'
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | Object to be got |
| `path` | `string` | `false` | `undefined` | Field path |
| `defaultValue` | `any` | `true` | `undefined` | Default value |
      
### Returns

| Type |
| ---  |
| `any`  |