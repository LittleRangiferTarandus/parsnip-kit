import { test, describe, expect } from 'vitest'
import { getByPath } from '../getByPath'
import { setByPath } from '../setByPath'
import { deleteByPath } from '../deleteByPath'
import { unzipToArrays } from '../unzipToArrays'
import { objectToPairs } from '../objectToPairs'
import { clone } from '../clone'

describe('object', () => {
  test('getByPath', () => {
    expect(getByPath({ a: 1 }, 'a')).eq(1)
    expect(getByPath([1], '[0]')).eq(1)
    expect(getByPath({ b: [0, 1, 2] }, 'b[2]')).eq(2)
    expect(getByPath({ a: [{ b: { c: 'test' } }] }, 'a[0].b.c')).eq('test')
    expect(getByPath({ a: 1 }, 'a[0].b.c')).eq(undefined)
    expect(getByPath({ a: 1 }, 'a[0].b.c', 'test')).eq('test')
  })
  test('setByPath', () => {
    const test0 = {}
    setByPath(test0, 'a', 1)
    expect(JSON.stringify(test0)).eq('{"a":1}')

    const test1 = []
    setByPath(test1, '[0]', 1)
    expect(JSON.stringify(test1)).eq('[1]')

    const test2 = {}
    setByPath(test2, '[0]', 1)
    expect(JSON.stringify(test2)).eq('{"0":1}')

    const test3 = {}
    setByPath(test3, 'b[2]', 2)

    expect(JSON.stringify(test3)).eq('{"b":[null,null,2]}')

    const test4 = { a: 1 }
    setByPath(test4, 'a[0]', 'test')
    expect(JSON.stringify(test4)).eq('{"a":["test"]}')

    const test5 = { a: 1 }
    setByPath(test5, 'b', 2)
    expect(JSON.stringify(test5)).eq('{"a":1,"b":2}')

    const test6 = {}
    setByPath(test6, 'a.b', 1)
    expect(JSON.stringify(test6)).eq('{"a":{"b":1}}')
  })
  test('deleteByPath', () => {
    const test0 = { a: 1 }
    deleteByPath(test0, 'a')
    expect(JSON.stringify(test0)).eq('{}')

    const test1 = [1]
    deleteByPath(test1, '[0]')
    expect(JSON.stringify(test1)).eq('[]')

    const test2 = { a: { b: { c: 1 } }, d: [2] }
    deleteByPath(test2, 'a.b')
    expect(JSON.stringify(test2)).eq('{"a":{},"d":[2]}')

    const test3 = { a: 1 }
    try {
      deleteByPath(test3, 'a.b')
    } catch (error) {
      expect(error).instanceOf(TypeError)
      expect(error.message).eq('a.b is not an object.')
    }

    const test4 = { a: 1 }
    try {
      deleteByPath(test4, 'a[0]')
    } catch (error) {
      expect(error).instanceOf(TypeError)
      expect(error.message).eq('a[0] is not an object.')
    }
  })
  test('unzipToArrays', () => {
    const obj = {
      Alex: 16,
      Bob: 659,
      Carter: 155,
      Daniel: 825
    }
    expect(JSON.stringify(unzipToArrays(obj))).eq(
      '[["Alex","Bob","Carter","Daniel"],[16,659,155,825]]'
    )
  })
  test('objectToPairs', () => {
    const obj = {
      Alex: 16,
      Bob: 659,
      Carter: 155,
      Daniel: 825
    }
    expect(JSON.stringify(objectToPairs(obj))).eq(
      '[["Alex",16],["Bob",659],["Carter",155],["Daniel",825]]'
    )
  })
  test('clone', () => {
    expect(clone(undefined)).eq(undefined)
    expect(clone(null)).eq(null)
    expect(clone(123)).eq(123)
    expect(clone('test')).eq('test')
    expect(clone(true)).eq(true)
    expect(clone(BigInt(123))).eq(123n)

    const symbol = Symbol('test')
    expect(clone(symbol)).eq(symbol)

    const arr = [{ data: 1 }, { data: 2 }, { data: 3 }]
    const cloneArr = clone(arr)
    console.log(cloneArr)

    expect(cloneArr === arr).eq(false)
    expect(cloneArr.length === arr.length).eq(true)
    cloneArr.forEach((item, index) => {
      expect(item).eq(arr[index])
    })

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
})
