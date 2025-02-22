# cloneDeep
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-84.54%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-81.82%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-84.54%-brightgreen)
      
Accepts an argument `arg` and returns its deep clone.

Supports the same data types as the [clone](../object/clone) function. For objects that are not supported, refers to Lodash's handling approach by returning these objects themselves to ensure the usability of the copy results.

An optional parameter `customizeClone` used to override the behavior when cloning unsupported objects and plain objects.

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
  key: PropertyKey | undefined,
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

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `any` | `false` | `undefined` | Parameter to be cloned |
| `customizeClone` | `(arg: any, key: PropertyKey \| undefined, cache: WeakMap<any, any>, defaultClone4Object: (arg: ObjectLike, cache: WeakMap<any, any>, customizeClone?: CustomizeClone) => any) => any` | `true` | `undefined` | Customize the cloning behavior for plain objects and unsupported built-in objects |

#### Returns

| Type |
| ---  |
| `any`  |