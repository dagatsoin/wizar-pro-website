import React from 'react'

export const theme = require('../../theme').default

export const style: {
  [key in string]: React.CSSProperties;
} = {
  heroShot: {
    paddingTop: `${theme.spacing.unit * 8}px`,
  },
  root: {
    backgroundSize: 'cover'
  },
  container: {
    display: 'flex',
    margin: '0 auto',
    padding: '64px 0',
    flexDirection: 'column',
    maxWidth: '740px'
  },
  title: {
    color: 'white'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  image: {},
}