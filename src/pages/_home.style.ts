import React from 'react'

export const theme = require('../theme').default

export const style: {
  [key in string]: React.CSSProperties;
} = {
  heroShot: {
    paddingTop: `${theme.spacing.unit * 8}px`,
  }
}