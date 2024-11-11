import type { FormRules } from 'naive-ui'

/**
 * Тип нужен для получения типа инстанса вью компонента.
 * @example VueComponentType<typeof NRadio>['themeOverrides'] - получить тип инстанса NRadio и взять поле ThemeOverrides
 */
export type VueComponentType<T extends abstract new (...args: unknown[]) => unknown> = InstanceType<T>

export type FormRulesByState<T extends Record<string, unknown>> = {
  [K in keyof T]?: T[K] extends Record<string, unknown> ? FormRulesByState<T[K]> : FormRules[string];
}
