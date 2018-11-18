import React from 'react'
import injectSheet, { InjectedSheetProps } from 'react-jss'

import { MobileSkin } from '.'

type Props = {
  backgroundImageURL: string
} & InjectedSheetProps<typeof heroStyle>

const HeroShot = ({ classes }: Props) => (
  <div className={classes.root}>
    <div className={classes.background}/>
    <div className={classes.content}>
      <h1>Wizar</h1>
      <p>La tourisme dont vous êtes le héro.</p>
      <p>Parcours touristiques sous forme d'un jeu de rôle géolocalisé.</p>
      <MobileSkin className={classes.mobileSkin}>
        <video src="./demo.mp4"/>
      </MobileSkin>
    </div>
  </div>
)

export const heroStyle = {
  root: {},
  background: {
      backgroundImageSize: 'cover'
  },
  content: {},
  mobileSkin: {}
}

export default injectSheet(heroStyle)(HeroShot)
