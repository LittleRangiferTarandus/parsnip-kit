# unzipToArrays
      
输入对象`obj`，输出分别是它的键和值的数组。

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
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | 原对象  |
      
### Returns

| Type |
| ---  |
| `[KeyType[], any[]]`  |