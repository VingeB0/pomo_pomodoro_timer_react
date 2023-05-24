import React from 'react'
import { Box } from '../../ui-components/Box'
import { Text } from '../../ui-components/Text'

type ClockFaceProps = {
  time: number
  isPlay: boolean
  theme: Record<string, string>
  color: string
}

const padWithLeadingZeros = (n: number) => (n < 10 ? `0${n}` : n)
const transformSecondsToMinutes = (seconds: number) => Math.floor(seconds / 60)
const calculateTimeLeft = (seconds: number) => seconds - transformSecondsToMinutes(seconds) * 60

export const ClockFace = ({ time, theme, color, isPlay }: ClockFaceProps) => {
  return (
    <Box
      mb="1.4rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      whiteSpace="pre-line"
      flexDirection="column"
    >
      {isPlay ? (
        <Text variant="timerPaused" color={theme[color]}>
          {padWithLeadingZeros(transformSecondsToMinutes(time))} <br /> {padWithLeadingZeros(calculateTimeLeft(time))}
        </Text>
      ) : (
        <Text variant="timerRunning" color={theme[color]}>
          {padWithLeadingZeros(transformSecondsToMinutes(time))} <br /> {padWithLeadingZeros(calculateTimeLeft(time))}
        </Text>
      )}
    </Box>
  )
}
