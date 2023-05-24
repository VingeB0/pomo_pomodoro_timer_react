import { createTheme } from '@mui/material'
import { themeColors } from './themeColors'
import { themeTypography } from './themeTypography'
import { muiChip } from './muiChip'
import { muiTypography } from './muiTypography'
import { muiIconButton } from './muiIconButton'

export enum THEME_STATE {
  FOCUS = 'focus',
  SHORT_BREAK = 'shortBreak',
  LONG_BREAK = 'longBreak',
}

export enum THEME_MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeComponents = {
  MuiTypography: muiTypography,
  MuiChip: muiChip,
  MuiIconButton: muiIconButton,
}

export const lightTheme = createTheme({
  palette: {
    mode: THEME_MODE.LIGHT,
  },
  typography: themeTypography,
  themeColors: themeColors.lightTheme,
  components: themeComponents,
})

export const darkTheme = createTheme({
  palette: {
    mode: THEME_MODE.DARK,
  },
  typography: themeTypography,
  themeColors: themeColors.darkTheme,
  components: themeComponents,
})
