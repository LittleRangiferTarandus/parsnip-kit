# isString
      
Check whether the input parameter is a primitive string or a `String` instance.

### Usage

```ts
import { isString } from 'parsnip-kit'

isString('test') // true
isString(new String('test')) // true
isString(123) // false
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | Parameters for check |
      
### Returns

| Type |
| ---  |
| `boolean`  |