import { test, describe, expect } from 'vitest'
import { clone } from '../clone'
import { cloneDeep } from '../cloneDeep'
import { getTypeTag } from '../../main'

describe('object', () => {
  test('clone', () => {
    expect(clone(undefined)).eq(undefined)
    expect(clone(null)).eq(null)
    expect(clone(123)).eq(123)
    expect(clone('test')).eq('test')
    expect(clone(true)).eq(true)
    expect(clone(BigInt(123))).eq(123n)

    const symbol = Symbol('test')
    expect(clone(symbol)).eq(symbol)

    const date = new Date(0)
    const cloneDate = clone(date)
    expect(date === cloneDate).eq(false)
    expect(cloneDate.valueOf()).eq(0)

    const regExp = /test/
    const cloneRegExp = clone(regExp)
    expect(regExp === cloneRegExp).eq(false)
    expect(cloneRegExp.toString()).eq(`/\\/test\\//`)

    const number = new Number(0)
    const cloneNumber = clone(number)
    expect(number === cloneNumber).eq(false)
    expect(cloneNumber.valueOf()).eq(0)

    const string = new String(0)
    const cloneString = clone(string)
    expect(string === cloneString).eq(false)
    expect(cloneString.valueOf()).eq('0')

    const boolean = new Boolean(0)
    const cloneBoolean = clone(boolean)
    expect(boolean === cloneBoolean).eq(false)
    expect(cloneBoolean.valueOf()).eq(false)

    const blob = new Blob(['test'], { type: 'plain' })
    const cloneBlob = clone(blob)
    expect(blob === cloneBlob).eq(false)
    expect(cloneBlob.type).eq('plain')
    blob.text().then((text) => {
      expect(text).eq('test')
    })

    const file = new File(['test'], 'test.txt', { type: 'plain' })
    const cloneFile = clone(file)
    expect(file === cloneFile).eq(false)
    expect(cloneFile.type).eq('plain')
    expect(cloneFile.name).eq('test.txt')
    file.text().then((text) => {
      expect(text).eq('test')
    })

    const arrayBuffer = new ArrayBuffer(8)
    const view = new Uint8Array(arrayBuffer)
    view[0] = 65
    view[1] = 66
    view[2] = 67
    const cloneArrayBuffer = clone(arrayBuffer)
    expect(arrayBuffer === cloneArrayBuffer).eq(false)
    expect(cloneArrayBuffer.byteLength).eq(8)
    expect(new TextDecoder().decode(view)).eq(
      new TextDecoder().decode(new Uint8Array(cloneArrayBuffer))
    )

    const arr = [{ data: 1 }, { data: 2 }, { data: 3 }]
    const cloneArr = clone(arr)

    expect(cloneArr === arr).eq(false)
    expect(cloneArr.length === arr.length).eq(true)
    for (let i = 0; i < cloneArr.length; i++) {
      expect(cloneArr[i]).eq(arr[i])
    }

    const obj = { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
    const cloneObj = clone(obj)
    expect(cloneObj === obj).eq(false)
    expect(Object.keys(cloneObj).length === Object.keys(obj).length).eq(true)
    Object.keys(cloneObj).forEach((key) => {
      expect(cloneObj[key]).eq(obj[key])
    })

    const set = new Set([{ data: 1 }, { data: 2 }, { data: 3 }])
    const cloneSet = clone(set)
    expect(cloneSet === set).eq(false)
    expect(cloneSet.size === set.size).eq(true)
    for (const value of cloneSet.values()) {
      expect(set.has(value)).eq(true)
    }

    const map = new Map([
      ['a', { data: 1 }],
      ['b', { data: 2 }],
      ['c', { data: 3 }]
    ])
    const cloneMap = clone(map)
    expect(cloneMap === map).eq(false)
    expect(cloneMap.size === map.size).eq(true)
    for (const entry of cloneMap.entries()) {
      expect(map.get(entry[0]) === entry[1]).eq(true)
    }
  })
  test('cloneDeep', () => {
    expect(cloneDeep('test')).eq('test')

    const testObj0 = [
      {
        label: 'Time',
        dataIndex: 'time',
        validation: /^\d+$/,
        min: new Date()
      },
      {
        label: 'Name',
        dataIndex: 'name',
        validation: (value) => !!(value ?? '').trim()
      }
    ]
    const clonedTestObj0 = cloneDeep(testObj0)
    expect(clonedTestObj0 === testObj0).eq(false)
    expect(clonedTestObj0[0] === testObj0[0]).eq(false)
    expect(clonedTestObj0[0].validation === testObj0[0].validation).eq(false)
    expect(clonedTestObj0[1] === testObj0[1]).eq(false)
    expect(clonedTestObj0[1].validation === testObj0[1].validation).eq(true)

    const testClass = class {
      #privateData
      publicData
      constructor(publicData, privateData) {
        this.#privateData = privateData
        this.publicData = publicData
      }
      getPrivateData() {
        return this.#privateData
      }
    }
    const testObj1 = {
      data: new testClass('publicData', 'privateData')
    }
    const clonedTestObj1 = cloneDeep(testObj1)
    expect(testObj1.data.getPrivateData()).eq('privateData')
    try {
      clonedTestObj1.data.getPrivateData()
    } catch (error) {
      expect(error).instanceOf(TypeError)
      expect(error.message).eq(
        'Cannot read private member #privateData from an object whose class did not declare it'
      )
    }

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
    const clonedTestObj2 = cloneDeep(testObj1, testCloner)
    expect(clonedTestObj2.data.getPrivateData()).eq('privateData')

    const testCircle: any = {}
    testCircle.a = testCircle
    const clonedTestObj3 = cloneDeep(testCircle)
    expect(clonedTestObj3.a).eq(clonedTestObj3)
  })
})
