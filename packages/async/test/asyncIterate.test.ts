import { describe, expect, test, vitest } from 'vitest'
import { asyncForEachFields } from '../asyncForEachFields'
import { asyncForEach } from '../asyncForEach'

describe('asyncIterate', () => {
  test('should iterate over all fields and process them sequentially', async () => {
    const obj = { a: 1, b: 2, c: 3 }
    const log = [] as any[]
    const iterator = (value, key) => {
      log.push({ key, value })
      return Promise.resolve()
    }

    await asyncForEachFields(obj, iterator)

    expect(log).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 }
    ])
  })

  // Test case 2: Handling asynchronous operations
  test('should handle asynchronous iterator functions and wait for each to complete', async () => {
    const obj = { a: 1, b: 2, c: 3 }
    const log = [] as any[]
    const iterator = (value, key) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          log.push({ key, value })
          resolve(void 0)
        }, value * 100)
      })
    }

    await asyncForEachFields(obj, iterator)

    // The sequence should be a (100ms), b (200ms), c (300ms)
    // However, since we process sequentially, each resolves in order
    // The log order should be a, then b, then c
    expect(log).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 }
    ])
  })

  // Test case 3: Returning a Promise from iterator
  test('should handle iterator functions returning Promises and wait for their resolution', async () => {
    const obj = {
      a: Promise.resolve(1),
      b: Promise.resolve(2),
      c: Promise.resolve(3)
    }
    const log = [] as any[]
    const iterator = async (value, key) => {
      const resolvedValue = await value
      log.push({ key, resolvedValue })
    }

    await asyncForEachFields(obj, iterator)

    expect(log).toEqual([
      { key: 'a', resolvedValue: 1 },
      { key: 'b', resolvedValue: 2 },
      { key: 'c', resolvedValue: 3 }
    ])
  })

  // Test case 4: Error handling
  test('should throw an error if any iterator function rejects', async () => {
    const obj = { a: 1, b: 2, c: 3 }
    const iterator = (value, key) => {
      if (key === 'b') {
        return Promise.reject(new Error('Error processing key b'))
      }
      return Promise.resolve()
    }

    await expect(asyncForEachFields(obj, iterator)).rejects.toThrow(
      'Error processing key b'
    )
  })

  // Test case 5: Nested objects (only top-level fields are processed)
  test('should process only top-level fields of nested objects', async () => {
    const obj = { a: { nested: 1 }, b: 2 }
    const log = [] as any[]
    const iterator = (value, key) => {
      log.push({ key, value })
      return Promise.resolve()
    }

    await asyncForEachFields(obj, iterator)

    // The nested object { nested: 1 } is treated as the value for key 'a'
    expect(log).toEqual([
      { key: 'a', value: { nested: 1 } },
      { key: 'b', value: 2 }
    ])
  })
})

describe('asyncForEach', () => {
  // Test case 1: Basic iteration with synchronous iterator
  test('should iterate over all elements and execute synchronous iterator', async () => {
    const array = [1, 2, 3]
    const log = [] as any[]
    const iterator = (item, index) => {
      log.push({ item, index })
    }

    await asyncForEach(array, iterator)

    expect(log).toEqual([
      { item: 1, index: 0 },
      { item: 2, index: 1 },
      { item: 3, index: 2 }
    ])
  })

  // Test case 2: Asynchronous iterator with delays
  test('should handle asynchronous iterator functions', async () => {
    const array = [1, 2, 3]
    const log = [] as any[]
    const iterator = (item, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          log.push({ item, index })
          resolve(void 0)
        }, item * 100)
      })
    }

    await asyncForEach(array, iterator)

    expect(log).toEqual([
      { item: 1, index: 0 },
      { item: 2, index: 1 },
      { item: 3, index: 2 }
    ])
  })

  // Test case 3: Iterator throwing an error
  test('should reject if any iterator function throws an error', async () => {
    const array = [1, 2, 3]
    const iterator = (item) => {
      if (item === 2) {
        throw new Error('Error at index 1')
      }
    }

    await expect(asyncForEach(array, iterator)).rejects.toThrow(
      'Error at index 1'
    )
  })

  // Test case 4: Returning a Promise from iterator
  test('should handle iterator functions returning Promises and await their resolution', async () => {
    const array = [1, 2, 3]
    const log = [] as any[]
    const iterator = (item, index) => {
      return Promise.resolve().then(() => {
        log.push({ item, index })
      })
    }

    await asyncForEach(array, iterator)

    expect(log).toEqual([
      { item: 1, index: 0 },
      { item: 2, index: 1 },
      { item: 3, index: 2 }
    ])
  })

  // Test case 5: Empty array
  test('should handle empty array without errors', async () => {
    const array = [] as any[]
    const iterator = vitest.fn()

    await asyncForEach(array, iterator)

    expect(iterator).toHaveBeenCalledTimes(0)
  })
})
