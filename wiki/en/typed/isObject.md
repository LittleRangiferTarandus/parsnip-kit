# isObject
      
Check whether the input parameter is an object, including general objects (`{ key: 'value' }`), functions (`function() {}`), and instances of primitive type wrappers (`new Number(1)`), all of which would return `true`.

### Usage

```ts
import { isObject } from 'parsnip-kit'

isObject(null) // false
isObject({}) // true
isObject(() => {}) // true
isObject(new Number()) // true
isObject(/test/) // true
isObject(new Date()) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `Parameters for check` |
      
### Returns

| Type |
| ---  |
| `boolean`  |