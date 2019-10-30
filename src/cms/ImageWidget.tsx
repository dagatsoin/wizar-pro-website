import { Map } from 'immutable'
import CMS from 'netlify-cms-app'
import React, { Component } from 'react'

import { Image as ImageComp } from '../components/image'
import { Image } from '../types/widget'
import { NetlifyControlWidgetProps, NetlifyPreviewWidgetProps } from './props'

type ControlProps = NetlifyControlWidgetProps<any, Image | Map<keyof Image, string>>
type PreviewProps = NetlifyPreviewWidgetProps<any, Image>

interface CMS {
  getWidget(
    name: string
  ): {
    control: React.ComponentClass<any, any>
  }
}

const DefaultImageControl = CMS.getWidget('image').control

export class ImageControl extends Component<ControlProps> {
  get value(): Image {
    if (this.props.value) {
      if (Map.isMap(this.props.value)) {
        const value = this.props.value as Map<keyof Image, string>
        return {
          src: value.get('src'),
          hiddenHeaderContent: value.get('hiddenHeaderContent'),
          hiddenHeaderLevel: Number(value.get('hiddenHeaderLevel')),
        }
      } else {
        return this.props.value as Image
      }
    } else {
      return {
        src: '',
      }
    }
  }

  /**
   * Override ControlHOC behavior set by registerWidget
   */
  public shouldComponentUpdate() {
    return true
  }

  public render() {
    const { forID, classNameWrapper } = this.props

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
          disabled={!this.value.src.length}
          onChange={this.onHiddenHeaderContentChange}
          value={this.value.hiddenHeaderContent}
          placeholder={'Hidden Hn content'}
        />
        <select
          className={classNameWrapper}
          disabled={!this.value.src.length}
          onChange={this.onHiddenHeaderLevelChange}
          value={this.value.hiddenHeaderLevel}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
    )
  }

  private onHiddenHeaderLevelChange = (
    e: React.FormEvent<HTMLSelectElement>
  ) => {
    this.props.onChange({
      ...this.value,
      hiddenHeaderLevel: e.currentTarget.value,
    })
  }

  private onHiddenHeaderContentChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    this.props.onChange({
      ...this.value,
      hiddenHeaderContent: e.currentTarget.value,
    })
  }

  private onURIChange = (src: string) => {
    this.props.onChange(src.length
      ? {
        ...this.value,
        src,
      }
      : undefined)
  }
}

export function ImagePreview(props: PreviewProps) {
  const fieldName = props.field.get('name')
  // todo what if it is a nested field
  const value = props.value || props.entry.getIn(['data', fieldName]).toJS()
  return <ImageComp {...value}/>
}