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
  input: StyleRuleSet<ViewStyle>
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
          margin: 24,
          padding: 24,
        },
        false
      ),
    },
    input: Styles.createViewStyle({
      marginVertical: 12
    }),
    submit: {
      root: Styles.createViewStyle({
        borderRadius: theme.shape.borderRadius,
      }),
    },
    
  }
}
