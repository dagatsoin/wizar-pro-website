import {
  ButtonStyleOverride,
  PaperStyleOverride,
  Styles,
  ViewStyle,
} from '@sproutch/ui'
import { StyleRuleSet } from 'reactxp/dist/common/Types'

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
        justifyContent: 'center',
        alignItems: 'center',
      },
      false
    ),
    paper: {
      root: Styles.createViewStyle(
        {
          maxWidth: 700,
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
