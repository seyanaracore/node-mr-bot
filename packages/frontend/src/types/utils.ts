/**
 * Тип нужен для получения типа инстанса вью компонента.
 * @example VueComponentType<typeof NRadio>['themeOverrides'] - получить тип инстанса NRadio и взять поле ThemeOverrides
 */
export type VueComponentType<T extends abstract new (...args: unknown[]) => unknown> = InstanceType<T>
