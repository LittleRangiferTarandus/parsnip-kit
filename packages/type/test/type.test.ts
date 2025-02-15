import { test, describe, expect } from 'vitest'
import { isString } from '../isString'

describe('normal type', () => {
  test('isString', () => {
    expect(isString('test')).eq(true)
    expect(isString(123)).eq(false)
  })
})
