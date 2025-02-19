import { test, describe, expect } from 'vitest'
import { range } from '../range'

describe('number', () => {
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
})
