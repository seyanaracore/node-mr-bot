import colors from '@modules/themeColors.module.scss'
import fonts from '@modules/fonts.module.scss'
import type { DividerProps } from 'naive-ui'

export const lightDividerTheme: NonNullable<DividerProps['themeOverrides']> = {
  color: colors.split,
  textColor: colors.textDescription,
  fontWeight: fonts.weightStrong,
}
