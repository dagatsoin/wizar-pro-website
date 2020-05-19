import { View } from '@sproutch/ui'
import { withPrefix } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { Footer } from '..'
import { Header } from '../header'
import * as style from './style'

export type Props = {
  children: React.ReactNode
  logoUrl: string
  menuItems: Array<{
    url: string
    menuItemLabel: string
  }>
}

export const Layout = ({ children, logoUrl, menuItems }) => {
  return (
    <View style={style.root}>
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            href: `${'/favicon.png'}`,
          },
        ]}
      >
        <html lang="fr" />
      </Helmet>
      <Header
        menuItems={menuItems}
        brandLogoUrl={withPrefix(`./images/${logoUrl}`)}
        brandName={'Wizar'}
      />
      {children}
      <Footer />
    </View>
  )
}