import React from 'react'
import {Box} from "../../ui-components/Box";
import {Text} from "../../ui-components/Text";

type ClockFaceProps = {
    time: number
    isPlay: boolean
    theme: Record<string, string>
    color: string
}

const addZero = (n: number) => n < 10 ? `0${n}` : n
const secondsToMinutes = (seconds: number) => Math.floor(seconds / 60)
const restOfSeconds = (seconds: number) => seconds - secondsToMinutes(seconds) * 60

export const ClockFace: React.FC<ClockFaceProps> = ({time, theme, color, isPlay}) => {

    return (
        <Box mb="1.4rem" display="flex" justifyContent="center" alignItems="center" whiteSpace="pre-line" flexDirection="column">
            {
                isPlay ? <Text variant="timerPaused" color={theme[color]}>{addZero(secondsToMinutes(time))} <br/> {addZero(restOfSeconds(time))}</Text> :
                    <Text variant="timerRunning" color={theme[color]}>{addZero(secondsToMinutes(time))} <br/> {addZero(restOfSeconds(time))}</Text>
            }
        </Box>
    )
}