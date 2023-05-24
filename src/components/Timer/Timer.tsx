import React, { useEffect, useState } from 'react'
import { Box } from '../../ui-components/Box'
import { useTheme } from '@mui/material'
import { Chip } from '../../ui-components/Chip'
import { Text } from '../../ui-components/Text'
import { ThemeIcons } from '../../ui-components/Icon/icons'
import { Control } from './Control'
import { colorToStateChip, colorToStateClock, colorToStateBg, TYPE_OF_COLORS } from './colors'
import { THEME_STATE } from '../../theme/themes'
import { SettingsModal } from './SettingsModal'
import { ClockFace } from './ClockFace'
import { Themes } from '../../theme/themeProvider'

const iconToState: Record<THEME_STATE, ThemeIcons> = {
  [THEME_STATE.FOCUS]: 'brain',
  [THEME_STATE.SHORT_BREAK]: 'coffe',
  [THEME_STATE.LONG_BREAK]: 'coffe',
}

const textToState: Record<THEME_STATE, string> = {
  [THEME_STATE.FOCUS]: 'Focus',
  [THEME_STATE.SHORT_BREAK]: 'Short Break',
  [THEME_STATE.LONG_BREAK]: 'Long Break',
}

type TimerProps = {
  nextStep: () => void
  setTheme: () => void
  state: THEME_STATE
}

export type timeType = Record<THEME_STATE, number>
export type lockedStateType = THEME_STATE | string

export const Timer: React.FC<TimerProps> = ({ setTheme, nextStep, state }) => {
  const [lockedState, setLockedState] = useState<lockedStateType>('')

  const theme = useTheme()
  const stateKey: keyof Themes = (lockedState ? `${lockedState}Colors` : `${state}Colors`) as keyof Themes
  const currentTheme: Record<string, any> = theme.themeColors[stateKey]
  const mode = theme.palette.mode

  const [isPlay, setIsPlay] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)
  const [time, setTime] = useState<timeType>({
    [THEME_STATE.FOCUS]: 2,
    [THEME_STATE.LONG_BREAK]: 230,
    [THEME_STATE.SHORT_BREAK]: 130,
  })

  const handleOpen = () => setOpen(!open)

  const colorByModeBg = colorToStateBg[mode]
  const colorByModeClock = colorToStateClock[mode]
  const colorByModeChip = colorToStateChip[mode]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlay && time[state] > 0) {
        setTime((prev) => ({ ...prev, [state]: time[state] - 1 }))
      }
      if (time[state] === 0) {
        setIsPlay(true)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [state, time, isPlay])

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
        bgcolor={currentTheme[colorByModeBg]}
      >
        <Box mb="2rem">
          <Chip
            primaryColor={currentTheme[colorByModeChip[TYPE_OF_COLORS.SECONDARY]]}
            secondaryColor={currentTheme[colorByModeChip[TYPE_OF_COLORS.PRIMARY]]}
            iconColor={currentTheme[colorByModeChip[TYPE_OF_COLORS.SECONDARY]]}
            icon={iconToState[state]}
            label={
              <Text variant="labelMedium" color={currentTheme[colorByModeChip[TYPE_OF_COLORS.SECONDARY]]}>
                {textToState[state]}
              </Text>
            }
          />
        </Box>
        <ClockFace time={time[state]} isPlay={isPlay} color={colorByModeClock} theme={currentTheme} />
        <Control
          disabled={time[state] === 0}
          setOpen={handleOpen}
          nextStep={nextStep}
          play={isPlay}
          setPlay={setIsPlay}
          currentTheme={currentTheme}
        />
      </Box>
      <SettingsModal
        state={state}
        lockedState={lockedState}
        setLockedState={setLockedState}
        time={time}
        setTime={setTime}
        currentTheme={currentTheme}
        open={open}
        setTheme={setTheme}
        setOpen={handleOpen}
      />
    </>
  )
}
