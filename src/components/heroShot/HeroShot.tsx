import { Text } from '@sproutch/ui'
import { graphql, Link, StaticQuery, withPrefix } from 'gatsby'
import Img from "gatsby-image"
import React from 'react'
import styles from './styles.module.css'

import { Fluid, Image } from 'src/types/image'
import { Cta } from '..'
import demo from '../../assets/demo.png'

type Data = {
  file: Image<Fluid>
}

type Props = {
  style?: React.CSSProperties,
}

const HeroShot = ({
  backgroundImage,
  style,
}: Props & {
  backgroundImage: Image<Fluid>
}) => (
  <div
    className={styles.root}
    style={style}
  >
    <Img className={styles.backgroundImage} fluid={backgroundImage.childImageSharp.fluid} />
    <div className={styles.content}>
      <Text>
        Le tourisme dont vous êtes le héro.
      </Text>

      <Text>
        Parcours touristiques sous forme d'un jeu de rôle géolocalisé.
      </Text>
      <Link to="/askDemo/" className={styles.link}>
        <Cta label="Demander une démo"/>
      </Link>
    </div>
    <img src={demo} className={styles.mobile} alt="demo" />
  </div>
)

export default (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "heroshot.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data: Data) => {
      console.log(data)
      return (
        <HeroShot
          backgroundImage={data.file}
          {...props}
        />
      )
    }}
  />
)