import { test, describe, expect } from 'vitest'
import { isString } from '../isString'
import { isNumber } from '../isNumber'
import { isBoolean } from '../isBoolean'
import { isNull } from '../isNull'
import { isUndefined } from '../isUndefined'
import { isObject } from '../isObject'
import { isSymbol } from '../isSymbol'
import { isBigInt } from '../isBigInt'
import { isPrimitive } from '../isPrimitive'

describe('normal type', () => {
  test('isString', () => {
    expect(isString('test')).eq(true)
    expect(isString(new String('test'))).eq(true)
    expect(isString(123)).eq(false)
  })
  test('isNumber', () => {
    expect(isNumber('test')).eq(false)
    expect(isNumber(123)).eq(true)
    expect(isNumber(new Number(123))).eq(true)
    expect(isNumber(Infinity)).eq(true)
    expect(isNumber(NaN)).eq(true)
  })
  test('isBoolean', () => {
    expect(isBoolean('test')).eq(false)
    expect(isBoolean(1)).eq(false)
    expect(isBoolean('')).eq(false)
    expect(isBoolean(null)).eq(false)
    expect(isBoolean(undefined)).eq(false)
    expect(isBoolean(true)).eq(true)
    expect(isBoolean(false)).eq(true)
    expect(isBoolean(new Boolean())).eq(true)
  })
  test('isNull', () => {
    expect(isNull(null)).eq(true)
    expect(isNull({})).eq(false)
    expect(isNull(undefined)).eq(false)
  })
  test('isUndefined', () => {
    expect(isUndefined(null)).eq(false)
    expect(isUndefined(void 0)).eq(true)
    expect(isUndefined(undefined)).eq(true)
  })
  test('isObject', () => {
    expect(isObject(null)).eq(false)
    expect(isObject({})).eq(true)
    expect(isObject(() => {})).eq(true)
    expect(isObject(new Number())).eq(true)
    expect(isObject(/test/)).eq(true)
    expect(isObject(new Date())).eq(true)
  })
  test('isSymbol', () => {
    expect(isSymbol(Symbol('test'))).eq(true)
    expect(isSymbol('test')).eq(false)
  })
  test('isBigInt', () => {
    expect(isBigInt(BigInt(123))).eq(true)
    expect(isBigInt(123)).eq(false)
    expect(isBigInt(NaN)).eq(false)
    expect(isBigInt(Infinity)).eq(false)
  })
  test('isPrimitive', () => {
    expect(isPrimitive(1)).eq(true)
    expect(isPrimitive('test')).eq(true)
    expect(isPrimitive(true)).eq(true)
    expect(isPrimitive(null)).eq(true)
    expect(isPrimitive(undefined)).eq(true)
    expect(isPrimitive(Symbol())).eq(true)
    expect(isPrimitive(BigInt(1))).eq(true)
    expect(isPrimitive(new Number(1))).eq(false)
    expect(isPrimitive(new String('test'))).eq(false)
    expect(isPrimitive(new Boolean(true))).eq(false)
    expect(isPrimitive({})).eq(false)
    expect(isPrimitive(new Date())).eq(false)
  })
})
