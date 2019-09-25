import React, { Component } from 'react'

import { NetlifyWidgetProps } from './props'

export type Value = {
  palette: 'primary' |'secondary'
  label: string
}
type Props = NetlifyWidgetProps<Value>

export class CTAControl extends Component<Props> {
  get value(): Value {
    return this.props.value
      ? this.props.value
      : {
        palette: 'primary',
        label: ''
      }
  }

  public render() {
    const { forID, classNameWrapper } = this.props
    return (
      <div id={forID} className={classNameWrapper}>
        <input className={classNameWrapper} onChange={this.onLabelChange} placeholder={"CTA Label"}/>
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
    this.props.onChange({
      ...this.value,
      palette: e.currentTarget.value as 'primary' | 'secondary',
    })
  }

  private onLabelChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange({
      ...this.value,
      label: e.currentTarget.value
    })
  }
}