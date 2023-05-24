import React from 'react'
import { SwitchProps } from '@mui/material'
import { StyledSwitch } from './styled'
import { TYPE_OF_COLORS } from '../../components/Timer/colors'
import { ThemeColors } from '../../theme/themeColors'

type SwitchMuiProps = SwitchProps & {
  colors: Record<TYPE_OF_COLORS, ThemeColors>
  currentTheme: Record<string, any>
}

export const Switch = ({ colors, currentTheme, ...props }: SwitchMuiProps) => {
  return <StyledSwitch colors={colors} currentTheme={currentTheme} {...props} />
}
