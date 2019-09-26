import { Map } from 'immutable'
import React, { Component } from 'react'

import { Cta } from '../components/cta'
import { NetlifyControlWidgetProps, NetlifyPreviewWidgetProps } from './props'

export type CTA = {
  palette: 'primary' | 'secondary'
  label: string
}

type ControlProps = NetlifyControlWidgetProps<undefined, CTA | Map<keyof CTA, string>>
type PreviewProps = NetlifyPreviewWidgetProps<undefined, CTA>

export class CTAControl extends Component<ControlProps> {
  get value(): CTA {
    if (this.props.value) {
      if (Map.isMap(this.props.value)) {
        const value = this.props.value as Map<keyof CTA, string>
        return {
          palette: value.get('palette') as 'primary' | 'secondary',
          label: value.get('label'),
        }
      } else {
        return this.props.value as CTA
      }
    } else {
      return {
        palette: 'primary',
        label: ''
      }
    } 
  }
 
  public render() {
    const { forID, classNameWrapper } = this.props
    return (
      <div id={forID} className={classNameWrapper}>
        <input
          value={this.value.label}
          className={classNameWrapper}
          onChange={this.onLabelChange}
          placeholder={'CTA Label'}
        />
        <select
          className={classNameWrapper}
          onChange={this.onPaletteChange}
          value={this.value.palette}
        >
          <option value={'primary'}>Primary</option>
          <option value={'secondary'}>Secondary</option>
        </select>
      </div>
    )
  }

  private onPaletteChange = (e: React.FormEvent<HTMLSelectElement>) => {
    if (this.value.label.length) {
      this.props.onChange({
        ...this.value,
        palette: e.currentTarget.value as 'primary' | 'secondary',
      })
    }
  }

  private onLabelChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange({
      ...this.value,
      label: e.currentTarget.value,
    })
  }
}

export function CTAPreview(props: PreviewProps) {
  const fieldName = props.field.get('name')
  // todo what if it is a nested field
  const value = props.value || props.entry.getIn(['data', fieldName]).toJS()
  return <Cta {...value}/>
}
