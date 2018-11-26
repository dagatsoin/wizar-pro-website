import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from "./styles.module.css"

import demo from '../../assets/demo.png'
//import { MobileSkin } from '../'
import { withPrefix, Link } from 'gatsby'

type Props = {
  backgroundImageURL: string
  style?: React.CSSProperties
}

const HeroShot = ({ backgroundImageURL, style }: Props) => (
  <div
    className={styles.root}
    style={{
      ...style,
      backgroundImage: `url(${withPrefix(backgroundImageURL)})`,
    }}
  >
    <div className={styles.content}>
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        className={styles.headers}
      >
        Le tourisme dont vous êtes le héro.
      </Typography>

      <Typography
        component="h3"
        variant="h5"
        gutterBottom
        className={styles.headers}
      >
        Parcours touristiques sous forme d'un jeu de rôle géolocalisé.
      </Typography>
      <Link to="/askDemo/" className={styles.cta}>
        <Button variant="contained" color="primary">
          Demander une démo
        </Button>
      </Link>
    </div>

    {/* <MobileSkin className={styles.mobileSkin}>
      <video src="./demo.mp4" />
    </MobileSkin> */}
    <img src={demo} className={styles.mobile} alt="demo" />
  </div>
)

export default HeroShot
