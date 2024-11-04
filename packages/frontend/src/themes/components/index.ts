import colors from '@modules/themeColors.module.scss'
import coreColors from '@modules/coreColors.module.scss'
import paddings from '@modules/paddings.module.scss'
import borderRadius from '@modules/borderRadius.module.scss'
import fonts from '@modules/fonts.module.scss'
import heights from '@modules/heights.module.scss'
import sizes from '@modules/sizes.module.scss'

import type { VueComponentType } from '@/types/utils'
import type {
  FormProps,
  BreadcrumbProps,
  UploadProps,
  PaginationProps,
  StepsProps,
  SelectProps,
  NRadio,
  CheckboxProps,
  SwitchProps,
  DataTableProps,
  TagProps,
  ProgressProps,
  MenuProps,
  ScrollbarProps,
  TabsProps,
} from 'naive-ui'

export { lightButtonTheme } from './lightButtonTheme'
export { lightModalTheme } from './lightModalTheme'
export { lightInputTheme } from './lightInputTheme'
export { lightDividerTheme } from './lightDividerTheme'
export { default as lightTimePickerTheme } from './lightTimePickerTheme'
export { default as lightTooltipTheme } from './lightTooltipTheme'
export * from './types'

type RadioProps = VueComponentType<typeof NRadio>

export const lightFormTheme: NonNullable<FormProps['themeOverrides']> = {
  labelFontSizeLeftMedium: fonts.base,
  labelFontSizeTopMedium: fonts.base,
  labelHeightMedium: '22px',

  lineHeight: '1.5',
  labelFontWeight: fonts.base,
  labelPaddingVertical: '0',
  labelPaddingHorizontal: '0',

  labelFontSizeTopLarge: fonts.lg,
  labelFontSizeLeftLarge: fonts.lg,
  labelHeightLarge: fonts.heading3,

  labelTextColor: colors.text,
  feedbackTextColorError: colors.errorBase,
  asteriskColor: colors.errorBase,
}

export const lightBreadcrumbTheme: NonNullable<BreadcrumbProps['themeOverrides']> = {
  itemTextColor: colors.textDescription,
  itemTextColorActive: colors.text,
}

export const lightUploadTheme: NonNullable<UploadProps['themeOverrides']> = {
  itemIconColor: colors.textDescription,
  itemTextColor: colors.primaryBase,
  borderRadius: '0',
  itemColorHover: colors.controlItemBgHover,
  itemColorHoverError: colors.controlItemBgHover,
  itemTextColorSuccess: colors.primaryBase,
  fontSize: fonts.base,
  itemTextColorError: colors.errorBase,
  lineHeight: '22px',
}

export const lightPaginationTheme: NonNullable<PaginationProps['themeOverrides']> = {
  buttonColor: 'transparent',
  buttonBorder: 'transparent',
  buttonColorHover: colors.bgTextHover,
  buttonBorderHover: colors.bgTextHover,
  buttonColorPressed: 'transparent',
  buttonBorderPressed: `1px solid ${colors.text}`,
  itemBorderDisabled: '1px solid transparent',
  itemTextColorDisabled: colors.textDisabled,
  itemTextColor: colors.text,
  itemTextColorHover: colors.text,
  itemTextColorPressed: colors.text,
  itemTextColorActive: colors.text,
  itemColor: 'transparent',
  itemColorHover: colors.bgTextHover,
  itemColorDisabled: 'transparent',
  itemBorderPressed: `1px solid ${colors.text}`,
  itemBorderActive: `1px solid ${colors.text}`,
  itemPaddingMedium: '6px',
  itemBorderRadius: borderRadius.base,
  itemSizeMedium: sizes.xl,
}

export const lightStepsTheme: NonNullable<StepsProps['themeOverrides']> = {
  stepHeaderFontWeight: fonts.weightNormal,
  stepHeaderFontSizeMedium: fonts.base,

  // process
  indicatorColorProcess: colors.brandOrange,
  indicatorBorderColorProcess: colors.brandOrange,
  headerTextColorProcess: colors.text,
  splitorColorProcess: colors.bgTextHover,

  // wait
  indicatorTextColorWait: colors.textDescription,
  indicatorBorderColorWait: colors.bgTextHover,
  indicatorColorWait: colors.bgTextHover,
  splitorColorWait: colors.bgTextHover,

  // finish
  indicatorColorFinish: coreColors.brandOrange2,
  indicatorBorderColorFinish: coreColors.brandOrange2,
  indicatorTextColorFinish: colors.brandOrange,
  headerTextColorFinish: colors.text,
  splitorColorFinish: colors.brandOrange,

  // error
  indicatorColorError: colors.errorBase,
  indicatorBorderColorError: colors.errorBase,
  headerTextColorError: colors.errorBase,
  splitorColorError: colors.bgTextHover,
}

export const lightSelectTheme: NonNullable<SelectProps['themeOverrides']> = {
  peers: {
    InternalSelectMenu: {
      borderRadius: borderRadius.lg,
      optionCheckColor: colors.primaryBase,
      optionTextColorActive: colors.primaryBase,
      optionColorActive: colors.primaryBg,
    },
    InternalSelection: {
      heightMedium: heights.base,
      fontSizeMedium: fonts.base,

      heightSmall: heights.sm,
      fontSizeSmall: fonts.base,

      fontSizeLarge: fonts.lg,
      heightLarge: heights.lg,

      borderRadius: borderRadius.lg,
      placeholderColor: colors.textPlaceholder,
      boxShadowFocus: 'none',

      // active
      borderActive: `1px solid ${colors.primaryBase}`,
      boxShadowActive: `0 0 0 2px ${colors.primaryBg}`,

      // default
      border: `1px solid ${colors.border}`,
      borderHover: `1px solid ${colors.border}`,
      borderFocus: `1px solid ${colors.border}`,
      color: colors.bgContainer,
      textColor: colors.text,
      caretColor: colors.text,
      paddingMultiple: `${paddings.xxs} ${paddings.xl} ${paddings.xxs} ${paddings.xxs}`,

      // error
      borderError: `1px solid ${colors.errorBase}`,
      borderFocusError: `1px solid ${colors.errorBase}`,
      borderHoverError: `1px solid ${colors.errorBase}`,
      caretColorError: colors.text,
      boxShadowFocusError: 'none',

      // disabled
      colorDisabled: colors.bgLayout,
      textColorDisabled: colors.text,
    },
  },
}

export const lightRadioTheme: NonNullable<RadioProps['themeOverrides']> = {
  dotColorActive: colors.primaryBase,
  boxShadowActive: `inset 0 0 0 1px ${colors.primaryBase}`,
  boxShadowHover: `inset 0 0 0 1px ${colors.primaryBase}`,
  boxShadowFocus: `inset 0 0 0 1px ${colors.primaryBase}, 0 0 0 2px ${colors.primaryBg}`,

  // button
  buttonBorderColorHover: colors.itemBgActiveOrange,
  buttonBorderColorActive: colors.itemBgActiveOrange,

  buttonColorActive: colors.bgBrandOrange,

  buttonTextColor: colors.text,
  buttonTextColorHover: colors.text,
  buttonTextColorActive: colors.text,

  buttonBoxShadowFocus: colors.itemBgActiveOrange,
  buttonBoxShadowHover: colors.itemBgActiveOrange,
}

export const lightCheckboxTheme: NonNullable<CheckboxProps['themeOverrides']> = {
  colorChecked: colors.primaryBase,
  borderChecked: `1px solid ${colors.primaryBase}`,
  borderFocus: `1px solid ${colors.primaryBase}`,
  boxShadowFocus: `0 0 0 2px ${colors.primaryBg}`,
  borderRadius: borderRadius.sm,
}

export const lightSwitchTheme: NonNullable<SwitchProps['themeOverrides']> = {
  railColorActive: colors.primaryBase,
  loadingColor: colors.primaryBase,
  railHeightSmall: '16px',
  railWidthSmall: '28px',
  buttonHeightSmall: '12px',
  buttonWidthSmall: '12px',
  buttonWidthPressedSmall: '12px',
}

export const lightTagTheme: NonNullable<TagProps['themeOverrides']> = {
  borderRadius: borderRadius.sm,
  borderInfo: `1px solid ${coreColors.brandBlue3}`,
  colorInfo: coreColors.brandBlue1,
  padding: `0 ${paddings.xs}`,
  fontWeightStrong: fonts.weightStrong,

  fontSizeMedium: fonts.sm,
  heightMedium: '22px',

  fontSizeLarge: fonts.lg,
  heightLarge: heights.base,

  fontSizeSmall: fonts.sm,
  heightSmall: heights.xs,
}

export const lightDataTableTheme: NonNullable<DataTableProps['themeOverrides']> = {
  borderRadius: '0px',
  borderColor: colors.borderSecondary,
  thColor: colors.fillAlter,
  thFontWeight: fonts.weightNormal,
  thPaddingMedium: `${paddings.base} 0 ${paddings.base} ${paddings.base}`,
  //                                                          Удаление бордера
  tdPaddingMedium: `${paddings.base} 0 ${parseInt(paddings.base, 10) - 1}px ${paddings.base}`,
  fontSizeMedium: fonts.base,
  lineHeight: '22px',
}

export const lightMenuTheme: NonNullable<MenuProps['themeOverrides']> = {
  itemTextColor: colors.text,
  itemTextColorHover: colors.text,
  itemTextColorActive: colors.text,
  itemTextColorActiveHover: colors.text,
  itemColorHover: colors.bgTextHover,
  itemColorActive: colors.bgTextHover,
  itemColorActiveHover: colors.bgTextHover,
  borderRadius: borderRadius.sm,
}

export const lightScrollbarTheme: NonNullable<ScrollbarProps['themeOverrides']> = {
  color: colors.border,
}

export const lightProgressTheme: NonNullable<ProgressProps['themeOverrides']> = {
  fillColor: colors.brandOrange,
  railHeight: '8px',
  railColor: colors.fillSecondary,
}

export const lightTabsTheme: NonNullable<TabsProps['themeOverrides']> = {
  tabTextColorBar: colors.text,
  tabTextColorActiveBar: colors.brandOrangeActive,
  tabTextColorHoverBar: colors.brandOrangeHover,
  barColor: colors.brandOrange,
  tabFontSizeMedium: fonts.base,
  tabColorSegment: colors.textSecondary,
  tabBorderColor: colors.border,
  tabGapMediumBar: sizes.xl,
  tabPaddingMediumBar: `${paddings.sm} 0`,
  panePaddingMedium: '0',
}
