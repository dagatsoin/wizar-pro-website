import { Button } from "@sproutch/ui"
import React from 'react'

export type CTAProps = {
  label: string
}

export default ({ label }: CTAProps) => (
  <Button variant="contained" palette="primary" label={label}/>
)
