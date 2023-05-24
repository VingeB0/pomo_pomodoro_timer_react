import React from 'react'
import { Box as BoxMui, BoxProps } from '@mui/material'

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <BoxMui {...props}>{children}</BoxMui>
}
