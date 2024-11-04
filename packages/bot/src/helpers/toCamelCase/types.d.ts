/* eslint-disable @typescript-eslint/consistent-type-imports */

// Типы в дтсе, потому что они не анализируются, тип подхватывается, а ошибка импорта игнорируется
export type CamelCaseKeys<T> = import('camelcase-keys').CamelCaseKeys<T, true>
