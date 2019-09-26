import React, { Component } from 'react'

import { Cta } from '../components/cta'
import { NetlifyControlWidgetProps, NetlifyPreviewWidgetProps } from './props'

export type Value = {
  palette: 'primary' | 'secondary'
  label: string
}
type ControlProps = NetlifyControlWidgetProps<undefined, Value>
type PreviewProps = NetlifyPreviewWidgetProps<undefined, Value>

export class CTAControl extends Component<ControlProps> {
  get value(): Value {
    return this.props.value
      ? this.props.value
      : {
          palette: 'primary',
          label: '',
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
    if (this.value.label) {
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
  console.log(props, props.value)
  /*const value = props.value.toObject()
  console.log(value)*/
  return <></>
}
