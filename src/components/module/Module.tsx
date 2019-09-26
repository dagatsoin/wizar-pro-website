import { Text } from '@sproutch/ui'
import React from 'react'
import { Attributes } from 'src/types/module'
import { style } from './style'

export function Module({
  cta,
  title,
  backgroundImage,
  imagePosition,
  contrastText,
  image,
  html,
}: { html: string } & Attributes): JSX.Element {
  return (
    <section
      key={title}
      style={{
        ...style.sectionRoot,
        backgroundImage: backgroundImage
          ? `url(${
              typeof backgroundImage === 'string'
                ? backgroundImage
                : backgroundImage.childImageSharp.fluid.src
            })`
          : undefined,
      }}
    >
      <div style={style.sectionContainer}>
        <Text>{title}</Text>
        <div
          style={{
            ...style.sectionContent,
            flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
          }}
        >
          {image && (
            <img
              src={
                typeof image === 'string'
                  ? image
                  : image.src.childImageSharp.fixed.src
              }
              alt={title}
            />
          )}
          <div
            className={`markdown ${contrastText ? 'contrast' : undefined}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  )
}