import { isObject } from './isObject'

/**
 * @zh 判断入参是否为基本类型，基本类型包括数字、字符串、布尔值、`null`、`undefined`、`symbol`、`bigint`。
 * @en Check if the input parameter is a primitive type, including `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isPrimitive } from 'parsnip-kit'
 *
 * isPrimitive(1) // true
 * isPrimitive('test') // true
 * isPrimitive(true) // true
 * isPrimitive(null) // true
 * isPrimitive(undefined) // true
 * isPrimitive(Symbol()) // true
 * isPrimitive(BigInt(1)) // true
 *
 * isPrimitive(new Number(1)) // false
 * isPrimitive(new String('test')) // false
 * isPrimitive(new Boolean(true)) // false
 * isPrimitive({}) // false
 * isPrimitive(new Date()) // false
 * ```
 */
export function isPrimitive(
  arg,
): arg is undefined | null | number | string | boolean | bigint | symbol {
  return !isObject(arg)
}
