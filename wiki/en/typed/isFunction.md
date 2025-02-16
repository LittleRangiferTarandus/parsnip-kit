# isFunction
      
Check if the input parameter is a function, including classes (`class {}`), generator functions (`function*() {}`), and async functions (`async function() {}`).

### Usage

```ts
import { isFunction } from 'parsnip-kit'

isFunction({}) // false
isFunction(() => {}) // true
isFunction(class {}) // true
isFunction(function*() {}) // true
isFunction(async () => {}) // true
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arg` | `any` | `false` | `undefined` | `Parameters for check` |
      
### Returns

| Type |
| ---  |
| `boolean`  |