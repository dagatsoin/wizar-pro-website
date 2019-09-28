import React from 'react'

import layoutStyle from './style.module.less'

type Props =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function({className, children, ...props}: Props) {
  return <div className={`${layoutStyle.view} ${className}`} {...props}>{children}</div>
}