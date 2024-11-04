import coreColors from '@modules/coreColors.module.scss'
import paddings from '@modules/paddings.module.scss'
import borderRadius from '@modules/borderRadius.module.scss'
import type { TooltipProps } from 'naive-ui'

const lightTooltipTheme: NonNullable<TooltipProps['themeOverrides']> = {
  boxShadow: '0px 9px 28px 8px #0000000D 0px 3px 6px -4px #0000001F 0px 6px 16px 0px #00000014',
  borderRadius: borderRadius.base,
  padding: paddings.xs,
  color: '#000000E0',
  textColor: coreColors.colorTextLightSolid,
}

export default lightTooltipTheme
