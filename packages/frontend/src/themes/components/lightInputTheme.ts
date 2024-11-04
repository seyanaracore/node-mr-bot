import colors from '@modules/themeColors.module.scss'
import paddings from '@modules/paddings.module.scss'
import fonts from '@modules/fonts.module.scss'
import borderRadius from '@modules/borderRadius.module.scss'
import heights from '@modules/heights.module.scss'
import type { InputProps } from 'naive-ui'

export const lightInputTheme: NonNullable<InputProps['themeOverrides']> = {
  /// Small
  fontSizeSmall: fonts.base,
  paddingSmall: `0 ${paddings.xs}`,
  heightSmall: heights.sm,

  /// Medium
  fontSizeMedium: fonts.base,
  paddingMedium: `0 ${paddings.sm}`,
  heightMedium: heights.base,

  /// Large
  fontSizeLarge: fonts.lg,
  paddingLarge: `0 ${paddings.sm}`,
  heightLarge: heights.lg,

  /// Default
  placeholderColor: colors.textPlaceholder,
  boxShadowFocus: '0px 0px 0px 2px rgba(5, 145, 255, 0.10)',

  iconColor: colors.textDisabled,
  iconColorHover: colors.text,
  iconColorPressed: colors.text,

  color: colors.bgContainer,
  colorFocus: colors.bgContainer,
  textColor: colors.text,
  caretColor: colors.text,

  border: `1px solid ${colors.border}`,
  borderHover: `1px solid ${colors.primaryBase}`,
  borderFocus: `1px solid ${colors.primaryBase}`,

  groupLabelColor: colors.fillAlter,
  groupLabelBorder: `1px solid ${colors.border}`,
  groupLabelTextColor: colors.text,
  // Для конкретных размеров нет пропа
  lineHeight: '1.5',
  borderRadius: borderRadius.lg,
  /// ________

  // error
  borderError: `1px solid ${colors.errorBase}`,
  borderFocusError: `1px solid ${colors.errorBase}`,
  borderHoverError: `1px solid ${colors.errorBase}`,
  caretColorError: colors.text,
  boxShadowFocusError: '0px 0px 0px 2px #FFF1F0',

  // warning
  borderWarning: `1px solid ${colors.warningBase}`,
  borderFocusWarning: `1px solid ${colors.warningBase}`,
  borderHoverWarning: `1px solid ${colors.warningBase}`,
  caretColorWarning: colors.text,
  boxShadowFocusWarning: '0px 0px 0px 2px #FFFBE6',

  // disabled
  colorDisabled: colors.bgContainerDisabled,
  borderDisabled: `1px solid ${colors.border}`,
  textColorDisabled: colors.textDisabled,
  iconColorDisabled: colors.textDisabled,
}
