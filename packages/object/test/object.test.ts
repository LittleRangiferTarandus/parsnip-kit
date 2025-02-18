import { test, describe, expect } from 'vitest'
import { getByPath } from '../getByPath'
import { setByPath } from '../setByPath'

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
    console.log(test3)

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
})
