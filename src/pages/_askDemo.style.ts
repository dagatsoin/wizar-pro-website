import {
  ButtonStyleOverride,
  PaperStyleOverride,
  Styles,
  ViewStyle,
} from '@sproutch/ui'
import { StyleRuleSet, TextInputStyleRuleSet } from 'reactxp/dist/common/Types'

import { Theme } from '~/theme'

export default function(
  theme: Theme
): {
  root: StyleRuleSet<ViewStyle>
  paper: PaperStyleOverride
  submit: ButtonStyleOverride
} {
  return {
    root: Styles.createViewStyle(
      {
        height: 400,
        
        justifyContent: 'center',
        alignItems: 'center',
      },
      false
    ),
    paper: {
      root: Styles.createViewStyle(
        {maxWidth: 400,
          borderRadius: theme.shape.borderRadius,
          padding: 48,
        },
        false
      ),
    },
    submit: {
      root: Styles.createViewStyle({
        borderRadius: theme.shape.borderRadius,
      }),
    },
    
  }
}
