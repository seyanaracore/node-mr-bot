/* eslint-disable no-nested-ternary, sonarjs/no-nested-conditional, @typescript-eslint/no-explicit-any */
import camelCase from 'lodash/camelCase'
import isObject from 'lodash/isObject'
import type { CamelCaseKeys } from './types'

type ObjectUnion = Record<string, unknown>

// Конченый автор пакета camelcase-keys сделал его только esm...
// Из-за этого его нельзя использовать нативно в рантайме тса с type "module"
//
// type: "module" в свою очередь такие дебафы даёт, что проект просто не запустить.
// Воруем типы из пакета, и наваливаем треша с рекурсией.

function toCamelCase<T extends ObjectUnion | readonly Record<string, unknown>[]>(
  target: T,
): CamelCaseKeys<T> {
  const obj = target as any

  if (Array.isArray(obj)) {
    return obj.map(toCamelCase) as any
  }

  const newObj = {} as any

  Object.keys(obj).forEach((key) => {
    newObj[camelCase(key)] = isObject(obj[key])
      ? toCamelCase(obj[key] as never)
      : Array.isArray(obj[key])
        ? obj[key].map((item) => toCamelCase(item))
        : obj[key]
  })

  return newObj
}

export default toCamelCase

export type { CamelCaseKeys }
