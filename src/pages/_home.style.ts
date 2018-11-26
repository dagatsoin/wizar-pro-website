import React from 'react'

export const theme = require('../theme').default

export const style: {
  [key in string]: React.CSSProperties;
} = {
  heroShot: {
    paddingTop: `${theme.spacing.unit * 8}px`,
  },
  sectionRoot: {
    backgroundSize: 'cover'
  },
  sectionContainer: {
    display: 'flex',
    margin: '0 auto',
    padding: '64px 0',
    flexDirection: 'column',
    maxWidth: '740px'
  },
  sectionTitle: {
    color: 'white'
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  sectionImage: {},
}