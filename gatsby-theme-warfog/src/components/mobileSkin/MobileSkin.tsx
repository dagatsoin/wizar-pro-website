import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const MobileSkin = ({children}: Props) => (
    <div>
        {children}
    </div>
)

export default MobileSkin