import { attachPropertiesToComponent } from '../helpers'

import Button from './button'
import ButtonOptionGroup from './button-option-group'
import ButtonOption from './button-option'
import { ButtonIconSparkle } from './icons'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Button, {
  varCreator,
  styleCreator,
  ButtonOption,
  ButtonOptionGroup,
  ButtonIconSparkle,
})

// Export app themes for easy configuration
export { APP_THEMES, getAppTheme, createAppTheme } from './app-themes'
export type { AppThemeKey } from './app-themes'
