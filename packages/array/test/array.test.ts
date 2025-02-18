import { test, describe, expect } from 'vitest'
import { range } from '../range'
import { leftJoin } from '../leftJoin'
import { sortIndex } from '../sortIndex'

describe('array', () => {
  test('range', () => {
    expect(JSON.stringify(range(1, 10))).eq('[1,2,3,4,5,6,7,8,9]')
    expect(JSON.stringify(range(1, 10, 2))).eq('[1,3,5,7,9]')
    expect(JSON.stringify(range(10, 1, -2))).eq('[10,8,6,4,2]')

    expect(JSON.stringify(range(1, 10, -2))).eq('[]')
    expect(JSON.stringify(range(10, 1, 2))).eq('[]')
    expect(JSON.stringify(range(10, 10, 2))).eq('[]')

    try {
      range(0, 1, 0)
    } catch (error) {
      expect(error).instanceOf(TypeError)
      expect(error.message).eq('range step must be not equal 0.')
    }
  })
  test('leftJoin', () => {
    const leftArray0 = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]
    const rightArray0 = [
      { id: 1, age: 25 },
      { id: 3, age: 30 },
    ]

    const result0 = leftJoin(
      leftArray0,
      rightArray0,
      (item) => item.id,
      (item) => item.id,
      (left, right) => ({ ...left, ...(right || {}) }),
    )
    expect(JSON.stringify(result0)).eq(
      '[{"id":1,"name":"Alice","age":25},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie","age":30}]',
    )

    const leftArray1 = [
      { id: 1, info: { name: 'Alice', age: 25 } },
      { id: 2, info: { name: 'Bob', age: 35 } },
      { id: 3, info: { name: 'Charlie', age: 30 } },
    ]
    const rightArray1 = [
      { name: 'Alice', experience: ['software engineer', 'designer'] },
      { name: 'Charlie', experience: ['freelance'] },
    ]

    const result1 = leftJoin(
      leftArray1,
      rightArray1,
      'info.name',
      'name',
      (left, right) => ({
        name: left.info.name,
        job: right?.experience[0] ?? null,
      }),
    )
    expect(JSON.stringify(result1)).eq(
      '[{"name":"Alice","job":"software engineer"},{"name":"Bob","job":null},{"name":"Charlie","job":"freelance"}]',
    )
  })
  test('sortIndex', () => {
    expect(
      JSON.stringify(sortIndex(sortIndex([1, 25, 4, 9, 16], (a, b) => a - b)))
    ).eq('[0,4,1,2,3]')
    
    expect(
      JSON.stringify(sortIndex(sortIndex([1, 25, 4, 9, 16])))
    ).eq('[0,2,3,4,1]')
  })
})
