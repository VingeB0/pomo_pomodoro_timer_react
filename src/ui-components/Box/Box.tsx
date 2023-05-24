import React from 'react'
import { Box as BoxMui, BoxProps } from '@mui/material'

export const Box = ({ children, ...props }: BoxProps) => {
  return <BoxMui {...props}>{children}</BoxMui>
}
