# cloneDeep
![Static Badge](https://img.shields.io/badge/Coverage-87.95%-FF8C00)
      
输入一个参数`arg`，返回它的深复制。 

支持的数据类型和 [clone](../object/clone) 函数一致。对于不支持的对象，参考 Lodash 的处理方法，返回它们自身，保证复制结果的可用性。

可选参数`customizeClone`，用于替代复制不支持的对象和普通对象时的行为。

> Added in v0.0.1



### Usage

```ts
import { cloneDeep, getTypeTag } from 'parsnip-kit'

cloneDeep('test') // 'test'

const testObj0 = [
  { label: 'Time', dataIndex: 'time', validation: /^\d+$/, min: new Date() },
  { label: 'Name', dataIndex: 'name', validation: (value) => !!(value ?? '').trim() }
]
const clonedTestObj0 = cloneDeep(testObj0)
// [
//   { label: 'Time', dataIndex: 'time', validation: /^\d+$/, min: new Date() }
//   { label: 'Name', dataIndex: 'name', validation: (value) => !!(value ?? '').trim() }
// ]

clonedTestObj0 === testObj0 // false
clonedTestObj0[0] === testObj0[0] // false
clonedTestObj0[0].validation === testObj0[0].validation // false
clonedTestObj0[1] === testObj0[1] // false
clonedTestObj0[1].validation === testObj0[1].validation // true

const testClass = class {
  #privateData
  publicData
  constructor(publicData, privateData) {
    this.#privateData = privateData
    this.publicData = publicData
  },
  getPrivateData() {
    return this.#privateData
  }
}
const testObj1 = {
  data: new testClass('publicData', 'privateData')
}
const clonedTestObj1 = cloneDeep(testObj1)

testObj1.data.getPrivateData() // 'privateData'
clonedTestObj1.data.getPrivateData()
// TypeError: Cannot read private member #privateData from an object whose class did not declare it

const testCloner = (
  value: any,
  key: string | undefined,
  cache: WeakMap<any, any>,
  defaultClone4Object
) => {
  if (cache.has(value)) {
    return cache.get(value)
  }
  if (getTypeTag(value) === 'Object') {
    if (value instanceof testClass) {
      return new testClass(value.publicData, value.getPrivateData())
    } else {
      return defaultClone4Object(value, cache, testCloner)
    }
  } else {
    return value
  }
}
const clonedTestObj2 = cloneDeep(
  testObj1,
  testCloner
)
clonedTestObj2.data.getPrivateData() // 'privateData'

const testCircle: any = {}
testCircle.a = testCircle
const clonedTestObj3 = cloneDeep(testCircle)
clonedTestObj3.a === clonedTestObj3 // true
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 待复制参数的类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | 待复制的参数  |
| `customizeClone` | `(arg: any, key: string \| undefined, cache: WeakMap<any, any>, defaultClone4Object: (arg: ObjectLike, cache: WeakMap<any, any>, customizeClone?: CustomizeClone) => any) => any` | `true` | `undefined` | 自定义复制普通对象和不支持的内置对象的行为  |

#### Returns

| Type |
| ---  |
| `T`  |