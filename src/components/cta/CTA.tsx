import { Button } from "@sproutch/ui"
import React from 'react'

import { Value as CTAProps } from '../../cms/CTAControl'

export default ({ label, palette }: CTAProps) => {
  return (
  <Button variant="contained" palette={palette} label={label}/>
)}