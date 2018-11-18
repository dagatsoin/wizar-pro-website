import React from 'react'
import injectSheet, { InjectedSheetProps } from 'react-jss'

import { style } from './style'

type Props = {
    children: React.ReactNode
    className?: string
} & InjectedSheetProps<typeof style>

const MobileSkin = ({classes, className, children}: Props) => (
    <div className={`${classes.root} ${className}`}>
        {children}
    </div>
)

export default injectSheet(style)(MobileSkin)