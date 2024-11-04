import type { Entries } from 'type-fest'

const invertObj = <T extends Record<string, S>, S extends string | number>(object: T) => Object.fromEntries(
  (Object.entries(object) as Entries<T>).map(([key, value]) => [value, key]),
) as {
  [K in keyof T as T[K]]: K
} & Record<string, unknown>

export default invertObj
