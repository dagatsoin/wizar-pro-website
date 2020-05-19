import React from 'react'
import { TextInput as TextInputComp } from 'reactxp'
import { TextInputProps } from 'reactxp/dist/common/Types'

import { ThemeContext } from '~/ThemeContext'
import { inputStyle } from './style'

type Props = TextInputProps

export default function TextInput(props: Props) {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
        <TextInputComp
          {...props}
          style={[inputStyle(theme), props.style]}
        />
      )}
    </ThemeContext.Consumer>
  )
}
