import { TextInputStyleRuleSet } from 'reactxp/dist/common/Types'
import { Theme } from '~/theme'

export function inputStyle(theme: Theme): TextInputStyleRuleSet {
  return {
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.divider,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 15,
    lineHeight: 2,
    color: theme.palette.text.primary
  }
}
