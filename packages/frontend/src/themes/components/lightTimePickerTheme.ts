import coreColors from '@modules/coreColors.module.scss'
import themeColors from '@modules/themeColors.module.scss'
import borderRadius from '@modules/borderRadius.module.scss'
import paddings from '@modules/paddings.module.scss'
import type { TimePickerProps } from 'naive-ui'

export const lightTimePickerTheme: NonNullable<TimePickerProps['themeOverrides']> = {
  itemTextColorActive: coreColors.colorTextBase,
  itemTextColor: coreColors.colorTextBase,
  itemColorHover: coreColors.brandOrange1,
  itemBorderRadius: borderRadius.sm,
  itemWidth: '48px',
  itemHeight: '28px',
  panelBoxShadow: '0px 9px 28px 8px #0000000D 0px 3px 6px -4px #0000001F 0px 6px 16px 0px #00000014',
  panelDividerColor: themeColors.split,
  panelActionPadding: `${paddings.xs} ${paddings.sm}`,
}

export default lightTimePickerTheme
