import CMS from 'netlify-cms'
import React, { Component } from 'react'

import { NetlifyControlWidgetProps } from './props'

export type Value = {
  src: string
  hiddenHeaderContent?: string
  hiddenHeaderLevel?: string
}

type Props = NetlifyControlWidgetProps<any, Map<keyof Value, string>>

interface CMS {
  getWidget(
    name: string
  ): {
    control: React.ComponentClass<any, any>
  }
}

const DefaultImageControl = CMS.getWidget('image').control

export class ImageControl extends Component<Props> {
  private get value(): Value {
    return this.props.value
      ? {
        src: this.props.value.get('src') || '',
        hiddenHeaderContent: this.props.value.get('hiddenHeaderContent'),
        hiddenHeaderLevel: this.props.value.get('hiddenHeaderLevel')
      }
      : {
        src: ''
      }
  }

  public render() {
    const { forID, classNameWrapper } = this.props

    console.log(this.props)

    return (
      <div id={forID} className={classNameWrapper}>
        <DefaultImageControl
          field={this.props.field}
          getAsset={this.props.getAsset}
          mediaPaths={this.props.mediaPaths}
          onAddAsset={this.props.onAddAsset}
          onChange={this.onURIChange}
          onRemoveInsertedMedia={this.props.onRemoveInsertedMedia}
          onOpenMediaLibrary={this.props.onOpenMediaLibrary}
          onClearMediaControl={this.props.onClearMediaControl}
          onRemoveMediaControl={this.props.onRemoveMediaControl}
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
    console.log(e.currentTarget.value)
    this.props.onChange(
      this.props.value.set('hiddenHeaderLevel', e.currentTarget.value)
    )
  }

  private onHiddenHeaderContentChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value)
    this.props.onChange(
      this.props.value.set('hiddenHeaderContent', e.currentTarget.value)
    )
  }

  private onURIChange = (src: string) => {
    console.log(src)
    this.props.onChange(this.props.value.set('src', src))
  }
}