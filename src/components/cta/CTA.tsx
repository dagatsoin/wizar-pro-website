import { Button } from "@sproutch/ui"
import React from 'react'
import { CTA } from 'src/types/widget'

export default ({ label, palette }: CTA) => {
  return (
  <Button variant="contained" palette={palette} label={label}/>
)}
