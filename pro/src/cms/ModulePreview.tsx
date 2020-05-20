import { Module, Provider } from "gatsby-theme-warfog"
import React from 'react'
import theme from '~/theme'

export function ModulePreview(props: any) {
  const cta = {
    label: props.widgetsFor('cta').getIn(['data', 'label']),
    palette: props.widgetsFor('cta').getIn(['data', 'palette'])
  }
  const featureImageSrc = props.widgetsFor('image').getIn(['data', 'src'])
  const hiddenHeaderContent = props.widgetsFor('image').getIn(['data', 'hiddenHeaderContent'])
  const image = featureImageSrc ? {
    src: featureImageSrc,
    hiddenHeaderContent,
    hiddenHeaderLevel: hiddenHeaderContent ? props.widgetsFor('image').getIn(['data', 'hiddenHeaderLevel']) : undefined
  } : undefined
  console.log(image)
  return (
    <Provider themeConfig={theme}>
      <Module
        noMargin
        layout={props.entry.getIn(['data', 'layout'])}
        cta={cta.label ? cta : undefined}
        title={props.entry.getIn(['data', 'title'])}
        image={image}
        titleLevel={props.entry.getIn(['data', 'titleLevel'])}
        isTitleDisplayed={props.entry.getIn(['data', 'isTitleDisplayed'])}
        elevation={props.entry.getIn(['data', 'elevation'])}
        imageFirst={props.entry.getIn(['data', 'imageFirst'])}
        contrastText={props.entry.getIn(['data', 'contrastText'])}
        content={props.entry.getIn(['data', 'body'])}
      />
    </Provider>
  )
}