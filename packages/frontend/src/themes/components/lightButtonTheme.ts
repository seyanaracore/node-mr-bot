import colors from '@modules/themeColors.module.scss'
import paddings from '@modules/paddings.module.scss'
import fonts from '@modules/fonts.module.scss'
import borderRadius from '@modules/borderRadius.module.scss'
import margins from '@modules/margins.module.scss'
import heights from '@modules/heights.module.scss'
import sizes from '@modules/sizes.module.scss'
import coreColors from '@modules/coreColors.module.scss'
import type { ButtonTheme } from './types'

const getDisabledButton = (buttonType = '') => {
  return {
    // background
    [`colorDisabled${buttonType}`]: colors.bgContainerDisabled,
    // border
    [`borderDisabled${buttonType}`]: `1px solid ${colors.border}`,
    // text
    [`textColorDisabled${buttonType}`]: colors.textDisabled,
    // ghost (prop)
    [`textColorGhostDisabled${buttonType}`]: colors.textDisabled,
    // text (prop)
    [`textColorTextDisabled${buttonType}`]: colors.textDisabled,
  }
}

export const lightButtonTheme: ButtonTheme = {
  // Small
  paddingSmall: `0 ${paddings.xs}`,
  fontSizeSmall: fonts.sm,
  borderRadiusSmall: borderRadius.sm,
  iconSizeSmall: '14px',
  iconMarginSmall: margins.xs,
  paddingRoundSmall: paddings.base,

  // Medium
  fontSizeMedium: fonts.base,
  fontWeight: '500',
  fontWeightStrong: fonts.weightStrong,
  heightMedium: heights.base,
  paddingMedium: `0 ${paddings.base}`,
  borderRadiusMedium: borderRadius.base,
  iconSizeMedium: sizes.base,
  iconMarginMedium: margins.xs,
  paddingRoundMedium: paddings.base,

  // Large
  paddingLarge: `0 ${paddings.base}`,
  fontSizeLarge: fonts.lg,
  borderRadiusLarge: borderRadius.lg,
  iconSizeLarge: sizes.base,
  iconMarginLarge: margins.xs,
  paddingRoundLarge: paddings.base,

  /// Default
  border: `1px solid ${colors.border}`,
  borderHover: `1px solid ${colors.border}`,
  borderPressed: `1px solid ${colors.brandOrangeActive}`,
  borderFocus: `1px solid ${colors.border}`,

  // background
  color: colors.bgContainer,
  colorHover: colors.bgContainer,
  colorPressed: colors.bgContainer,
  colorFocus: colors.bgContainer,

  // text
  textColor: colors.text,
  textColorHover: colors.brandOrangeHover,
  textColorPressed: colors.brandOrangeActive,
  textColorFocus: colors.brandOrangeHover,

  // ghost (prop)
  textColorGhost: colors.bgContainer,
  textColorGhostHover: colors.brandOrangeHover,
  textColorGhostPressed: colors.brandOrangeActive,
  textColorGhostFocus: colors.brandOrangeHover,

  // text (prop)
  textColorText: colors.text,
  textColorTextHover: colors.brandOrangeHover,
  textColorTextPressed: colors.brandOrangeActive,
  textColorTextFocus: colors.brandOrangeHover,

  ...getDisabledButton(),
  /// ____

  /// Primary
  borderPrimary: `1px solid ${colors.brandOrange}`,
  borderHoverPrimary: `1px solid ${colors.brandOrangeHover}`,
  borderPressedPrimary: `1px solid ${colors.brandOrangeActive}`,
  borderFocusPrimary: `1px solid ${colors.brandOrangeHover}`,

  // background
  colorPrimary: colors.brandOrange,
  colorHoverPrimary: colors.brandOrangeHover,
  colorPressedPrimary: colors.brandOrangeActive,
  colorFocusPrimary: colors.brandOrangeHover,

  // text
  textColorPrimary: coreColors.colorTextLightSolid,
  textColorHoverPrimary: coreColors.colorTextLightSolid,
  textColorPressedPrimary: coreColors.colorTextLightSolid,
  textColorFocusPrimary: coreColors.colorTextLightSolid,

  // ghost (prop)
  textColorGhostPrimary: colors.brandOrange,
  textColorGhostHoverPrimary: colors.brandOrangeHover,
  textColorGhostPressedPrimary: colors.brandOrangeActive,
  textColorGhostFocusPrimary: colors.brandOrangeHover,

  // text (prop)
  textColorTextPrimary: coreColors.colorTextBase,
  textColorTextPressedPrimary: coreColors.colorTextBase,
  textColorTextHoverPrimary: coreColors.colorTextBase,
  textColorTextFocusPrimary: coreColors.colorTextBase,

  ...getDisabledButton('Primary'),
  /// ____

  /// Error
  borderError: `1px solid ${colors.errorBase}`,
  borderHoverError: `1px solid ${colors.errorHover}`,
  borderFocusError: `1px solid ${colors.errorHover}`,
  borderPressedError: `1px solid ${colors.errorActive}`,

  // background
  colorError: colors.errorBase,
  colorHoverError: colors.errorHover,
  colorFocusError: colors.errorHover,
  colorPressedError: colors.errorActive,

  // text
  textColorError: coreColors.colorTextLightSolid,
  textColorHoverError: coreColors.colorTextLightSolid,
  textColorPressedError: coreColors.colorTextLightSolid,
  textColorFocusError: coreColors.colorTextLightSolid,

  // ghost (prop)
  textColorGhostError: colors.errorBase,
  textColorGhostHoverError: colors.errorHover,
  textColorGhostFocusError: colors.errorHover,
  textColorGhostPressedError: colors.errorActive,

  // text (prop)
  textColorTextError: colors.errorBase,
  textColorTextPressedError: colors.errorBase,
  textColorTextHoverError: colors.errorBase,

  ...getDisabledButton('Error'),
  /// ____

  opacityDisabled: '1',
  waveOpacity: '0',
}
