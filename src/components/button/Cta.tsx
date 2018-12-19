import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'

import styles from './styles.module.css'

export default ({ children, ...props }: ButtonProps) => (
  <Button {...props} variant="contained" color="primary" className={styles.cta}>
    {children}
  </Button>
)
