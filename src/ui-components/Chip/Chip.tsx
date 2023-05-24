import React from 'react'
import { ChipProps, Chip as ChipMui } from '@mui/material'
import { ThemeIcons } from '../Icon/icons'
import { Icon } from '../Icon'
import { ThemeColors } from '../../theme/themeColors'

type ChipMuiProps = Omit<ChipProps, 'icon'> & {
  primaryColor: ThemeColors
  secondaryColor: ThemeColors
  icon: ThemeIcons
  iconColor: ThemeColors
}

export const Chip = ({
  iconColor,
  primaryColor,
  secondaryColor,
  icon,
  children,
  variant = 'outlined',
  ...props
}: ChipMuiProps) => {
  return (
    <ChipMui
      {...props}
      icon={<Icon color={iconColor} icon={icon} width="2rem" height="2rem" />}
      variant={variant}
      sx={{
        borderColor: primaryColor,
        backgroundColor: secondaryColor,
      }}
    >
      {children}
    </ChipMui>
  )
}
