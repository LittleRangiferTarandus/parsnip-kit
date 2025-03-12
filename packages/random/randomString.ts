/**
 * @zh 生成长度为`length`的随机字符串，`options`参数用于指定字符的取值范围，默认为大小写英文字母和数字。
 * @en Generate a random string with a length of `length`. The `options` parameter specifies the character range.
 * @param {number} length @zh 待生成的字符串长度 @en
 * @param {RandomStringOptions} [options] @zh 生成字符串的选项 @en String generation options
 * @param {boolean} [options.lowercase=true] @zh 是否包含小写英文字母 @en Whether to include lowercase letters
 * @param {boolean} [options.uppercase=true] @zh 是否包含大写英文字母 @en Whether to include uppercase letters
 * @param {boolean} [options.number=true] @zh 是否包含数字 @en Whether to include numbers
 * @param {boolean} [options.symbol=false] @zh 是否包含符号：`'!@#$%^&*()_+-=[]{}|;:,.<>?'` @en Whether to include symbols: `'!@#$%^&*()_+-=[]{}|;:,.<>?'`
 * @param {string} [options.customized] @zh 包含的自定义字符 @en Included custom characters
 * @returns {any}
 * @version 0.0.2
 * @example
 * ```ts
 * import { randomString } from 'parsnip-kit'
 *
 * randomString(10)
 * // a string including uppercase letters, lowercase letters, numbers, for example 'Dij1mzPzyW'
 *
 * randomString(10, { number: false })
 * // a string only including letters, for example 'iYyyWSReNw'
 *
 * randomString(10, { uppercase: false, lowercase: false })
 * // a string only including numbers, for example '2398543147'
 *
 * randomString(10, { symbol: true })
 * // a string including uppercase letters, lowercase letters, numbers and symbols
 * // for example 'gI(CThCMK%'
 *
 * randomString(
 *   10,
 *   {
 *     uppercase: false, lowercase: false, number: false,
 *     customized: 'αβγδεζηθικλμνξοπρστυφχψω'
 *   }
 * )
 * // a string only including lowercase Greek letters, for example 'γμχβωζπθοχ'
 * ```
 */

import { randomNumber } from './randomNumber'

const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberStr = '0123456789'
const symbolStr = '!@#$%^&*()_+-=[]{}|;:,.<>?'

export function randomString(
  length: number,
  options: RandomStringOptions = {}
): string {
  if (length === 0) {
    return ''
  }
  let characters = ''
  const {
    lowercase = true,
    uppercase = true,
    number = true,
    symbol = false,
    customized
  } = options
  if (lowercase) characters += lowercaseStr
  if (uppercase) characters += uppercaseStr
  if (number) characters += numberStr
  if (symbol) characters += symbolStr
  if (customized) characters += customized

  if (characters.length === 0) {
    return ''
  }

  const charactersLength = characters.length
  let result = ''

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(randomNumber(0, charactersLength)))
  }

  return result
}

/**
 * @zh `randomString`函数的参数`options`的类型。
 * @en The `options` parameter of the `randomString` function.
 * @version 0.0.2
 */
export interface RandomStringOptions {
  lowercase?: boolean
  uppercase?: boolean
  number?: boolean
  symbol?: boolean
  customized?: string
}
