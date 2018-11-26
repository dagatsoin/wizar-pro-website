import { Grid, Typography } from '@material-ui/core'
import React from 'react'

import style from './style'

export default () => (
  <div style={style.root}>
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <div style={{ textAlign: 'center' }}>
          <Typography>
            &copy; 2018 Warfog &#8212; All rights reserved.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ textAlign: 'center' }}>
          <Typography>
            <a href="mailto:contact@warfog.gg">E-Mail</a> &nbsp;/&nbsp;{' '}
            <a href="https://http://facebook.com/wizar.game" target="_blank">
              Facebook
            </a>{' '}
            &nbsp;/&nbsp;{' '}
            <a href="https://twitter.com/WizarGame" target="_blank">
              Twitter
            </a>{' '}
            &nbsp;/&nbsp;{' '}
            <a href="https://www.instagram.com/wizargame/" target="_blank">
              Instagram
            </a>
          </Typography>
        </div>
      </Grid>
    </Grid>
  </div>
)
