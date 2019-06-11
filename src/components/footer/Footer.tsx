import { Text, View } from '@sproutch/ui'
import React from 'react'

import style from './style'

export default () => (
  <div style={style.root}>
    <View>
      <View>
        <div style={{ textAlign: 'center' }}>
          <Text>
            &copy; 2018 Warfog &#8212; All rights reserved.
          </Text>
        </div>
      </View>
      <View>
        <div style={{ textAlign: 'center' }}>
          <Text>
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
          </Text>
        </div>
      </View>
    </View>
  </div>
)
