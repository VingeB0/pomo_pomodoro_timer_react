import React from 'react'
import {Box} from "../../ui-components/Box";
import {IconButton} from "../../ui-components/IconButton";
import {useTheme} from "@mui/material";
import {colorToStatePlay, colorToStateOthers, TYPE_OF_COLORS} from "./colors";

type ControlsProps = {
    nextStep: () => void
    setOpen: () => void
    setPlay: Function
    play: boolean
    currentTheme: Record<string, any>
    disabled: boolean
}

export const Control: React.FC<ControlsProps> = ({nextStep, setPlay, play, currentTheme, setOpen, disabled}) => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const colorByModePlay = colorToStatePlay[mode]
    const colorByModeOthers = colorToStateOthers[mode]

    return (
        <Box display="flex" gap="1rem" alignItems="center">
            <IconButton
                primaryColor={currentTheme[colorByModeOthers[TYPE_OF_COLORS.SECONDARY]]}
                secondaryColor={currentTheme[colorByModeOthers[TYPE_OF_COLORS.PRIMARY]]}
                size="md"
                icon="dotsThree"
                onClick={() => {
                    setPlay(true);
                    setOpen();
                }}
            />
            <IconButton
                primaryColor={currentTheme[colorByModePlay[TYPE_OF_COLORS.SECONDARY]]}
                secondaryColor={currentTheme[colorByModePlay[TYPE_OF_COLORS.PRIMARY]]}
                size="lg"
                icon={play ? 'play' : 'pause'}
                onClick={() => setPlay(!play)}
                disabled={disabled}
            />
            <IconButton
                primaryColor={currentTheme[colorByModeOthers[TYPE_OF_COLORS.SECONDARY]]}
                secondaryColor={currentTheme[colorByModeOthers[TYPE_OF_COLORS.PRIMARY]]}
                size="md"
                icon="fastForward"
                onClick={() => {
                    nextStep();
                    setPlay(true);
                }}
            />
        </Box>
    )
}