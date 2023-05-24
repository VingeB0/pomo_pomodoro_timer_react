import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import { TYPE_OF_COLORS } from '../../components/Timer/colors'
import { ThemeColors } from '../../theme/themeColors'

type StyledSwitchProps = {
  colors: Record<TYPE_OF_COLORS, ThemeColors>
  currentTheme: Record<string, any>
}

export const StyledSwitch = styled(Switch)<StyledSwitchProps>(({ colors, currentTheme, theme }) => ({
  width: 34,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.themeColors.otherColors.blackAlpha200,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: currentTheme[colors[TYPE_OF_COLORS.PRIMARY]],
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: theme.themeColors.otherColors.blackAlpha200,
    boxSizing: 'border-box',
  },
}))
