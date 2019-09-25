import React, { Component } from 'react'

import { NetlifyControlWidgetProps } from './props'

export type Value = {
  src: string
  hiddenHeaderContent?: string
  hiddenHeaderLevel?: string
}

type State = {
  src: string
}

type Props = NetlifyControlWidgetProps<any, Value>

interface CMS {
  getWidget(
    name: string
  ): {
    control: React.ComponentClass<any, any>
  }
}

export function imageControlWithCMS(cms: CMS) {
  const DefaultImageControl = cms.getWidget('image').control
  return class ImageControl extends Component<Props> {
    private get value(): Value {
      return this.props.value || {
        src: "" 
      }
    }

    public render() {
      const {
        forID,
        classNameWrapper
      } = this.props
      
      console.log(this.props)
      
      return (
        <div id={forID} className={classNameWrapper}>
          <DefaultImageControl
            field={this.props.field}
            getAsset={e => {
              console.log(e)
              return this.props.getAsset(e)
            }}
            mediaPaths={this.props.mediaPaths}
            onAddAsset={e => {
              console.log(e)
              this.props.onAddAsset(e)
            }}
            onChange={this.onURIChange}
            onRemoveInsertedMedia={e => {
              console.log(e)
              this.props.onRemoveInsertedMedia(e)
            }}
            onOpenMediaLibrary={e => {
              console.log(e)
              this.props.onOpenMediaLibrary(e)
            }}
            onClearMediaControl={e => {
              console.log(e)
              this.props.onClearMediaControl(e)
            }}
            onRemoveMediaControl={e => {
              console.log(e)
              this.props.onRemoveMediaControl(e)
            }}
            classNameWrapper={classNameWrapper}
            value={this.value.src}
          />
          <input
            className={classNameWrapper}
            onChange={this.onHiddenHeaderContentChange}
            value={this.value.hiddenHeaderContent}
            placeholder={'Hidden Hn content'}
          />
          <select
            className={classNameWrapper}
            onChange={this.onHiddenHeaderLevelChange}
            value={this.value.hiddenHeaderLevel}
          >
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
            <option value={'6'}>6</option>
          </select>
        </div>
      )
    }

    private onHiddenHeaderLevelChange = (
      e: React.FormEvent<HTMLSelectElement>
    ) => {
      this.props.onChange({
        ...this.value,
        hiddenHeaderLevel: e.currentTarget.value
      })
    }

    private onHiddenHeaderContentChange = (
      e: React.FormEvent<HTMLInputElement>
    ) => {
      this.props.onChange({
        ...this.value,
        hiddenHeaderContent: e.currentTarget.value
      })
    }

    private onURIChange = (src: string) => {
      console.log(src)
      this.props.onChange({
        ...this.value,
        src
      })
    }
  }
}
