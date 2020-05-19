import { Module, Provider } from "gatsby-theme-warfog"
import React from 'react'

export function ModulePreview(props: any) {
  console.log({
    label: props.widgetsFor('cta').getIn(['data', 'label']),
    palette: props.widgetsFor('cta').getIn(['data', 'palette'])
  })
  return (
    <Provider>
      <Module
        noMargin
        layout={props.entry.getIn(['data', 'layout'])}
        cta={{
          label: props.widgetsFor('cta').getIn(['data', 'label']),
          palette: props.widgetsFor('cta').getIn(['data', 'palette'])
        }}
        title={props.entry.getIn(['data', 'title'])}
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