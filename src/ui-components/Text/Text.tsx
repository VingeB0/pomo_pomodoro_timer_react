import React from 'react'
import { Typography as TypographyMui, TypographyProps } from '@mui/material'
import { ThemeTypography } from '../../theme/themeTypography'

type TypographyMuiProps = Omit<TypographyProps, 'variant'> & {
  variant: ThemeTypography
}

export const Text = ({ children, variant, ...props }: TypographyMuiProps) => {
  return (
    <TypographyMui variant={variant} {...props}>
      {children}
    </TypographyMui>
  )
}
