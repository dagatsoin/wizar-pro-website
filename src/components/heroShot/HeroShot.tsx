import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { MobileSkin } from '../'
import styles from './style'
import { withPrefix } from 'gatsby'

type Props = {
  backgroundImageURL: string
  style?: React.CSSProperties
}

const HeroShot = ({ backgroundImageURL, style }: Props) => (
  <div
    style={{
      ...style,
      ...styles.root,
      backgroundImage: `url(${withPrefix(backgroundImageURL)})`,
    }}
  >
    <div style={styles.content}>
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        style={styles.headers}
      >
        Le tourisme dont vous êtes le héro.
      </Typography>

      <Typography
        component="h3"
        variant="h5"
        gutterBottom
        style={styles.headers}
      >
        Parcours touristiques sous forme d'un jeu de rôle géolocalisé.
      </Typography>
      <Button variant="contained" color="primary">
        Demander une démo
      </Button>
    </div>

    <MobileSkin className={styles.mobileSkin}>
      {/* <video src="./demo.mp4" /> */}
      <img src="./screenShot.png" alt="demo" />
    </MobileSkin>
  </div>
)

export default HeroShot
