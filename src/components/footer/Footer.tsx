import { Button } from '@sproutch/ui'
import React from 'react'

import { Text, View } from '..'
import style from './layout.module.less'

declare const window: Window

export default () => (
  <View className={style.root}>
    <View className={style.copyrightContainer}>
      <Text style={{color: "white"}}>&copy; 2018 Warfog &#8212; All rights reserved.</Text>
    </View>
    <View className={style.links}>
      <Button variant='text' onPress={() => window.open("mailto:contact@warfog.gg")} label="E-Mail"/>
      <Button variant='text' onPress={() => window.open("https://facebook.com/wizar.game", '_blank')} label="Facebook"/>
      <Button variant='text' onPress={() => window.open("https://discord.gg/Hway5Vv", '_blank')} label="Discord"/>
      <Button variant='text' onPress={() => window.open("https://twitter.com/WizarGame", '_blank')} label="Twitter"/>
      <Button variant='text' onPress={() => window.open("https://www.instagram.com/wizargame/", '_blank')} label="Instagram"/>
    </View>
  </View>
)
