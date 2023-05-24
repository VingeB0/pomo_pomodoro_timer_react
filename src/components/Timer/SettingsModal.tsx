import React from 'react'
import {Modal} from "../../ui-components/Modal";
import {StyledModal} from "./styled";
import {TYPE_OF_COLORS, modalOverlayColors, colorToStateModal} from "./colors";
import {Text} from "../../ui-components/Text";
import {useTheme} from "@mui/material";
import {Box} from "../../ui-components/Box";
import {IconButton} from "../../ui-components/IconButton";
import {Switch} from "../../ui-components/Switch";
import {THEME_MODE, THEME_STATE} from "../../theme/themes";
import {NumberTextField} from "../../ui-components/NumberTextField";
import {lockedStateType, timeType} from "./Timer";

type SettingsModalProps = {
    time: timeType
    lockedState: lockedStateType
    state: THEME_STATE
    setLockedState: Function
    setTime: Function
    setOpen: () => void
    open: boolean
    setTheme: () => void
    currentTheme: Record<string, any>
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
        open,
        setOpen,
        setTheme,
        currentTheme,
        setTime,
        time,
        setLockedState,
        state,
        lockedState
    }) => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const colorByModeModal = colorToStateModal[mode]

    return (
        <Modal
            open={open}
            onClose={setOpen}
            sx={{bgcolor: mode === THEME_MODE.LIGHT ? modalOverlayColors[THEME_MODE.LIGHT] : modalOverlayColors[THEME_MODE.DARK]}}
        >
            <StyledModal
                bgcolor={currentTheme[colorByModeModal[TYPE_OF_COLORS.PRIMARY]]}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb="1.625rem">
                    <Text variant="headingH1"
                          color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Settings</Text>
                    <IconButton
                        iconSize=".75rem"
                        icon="close"
                        primaryColor={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}
                        secondaryColor={currentTheme[colorByModeModal[TYPE_OF_COLORS.PRIMARY]]}
                        size="sm"
                        onClick={setOpen}
                    />
                </Box>
                <Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py="1.375rem">
                        <Text variant="textRegular"
                              color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Dark
                            mode</Text>
                        <Switch colors={colorByModeModal} currentTheme={currentTheme} onChange={setTheme}/>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py="1.375rem">
                        <Text variant="textRegular"
                              color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Focus length</Text>
                        <NumberTextField time={time[THEME_STATE.FOCUS]}
                                         getValue={(value: number) => setTime((prev: timeType) => ({
                                             ...prev,
                                             [THEME_STATE.FOCUS]: value
                                         }))}
                                         color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}/>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py="1.375rem">
                        <Text variant="textRegular"
                              color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Short break
                            length</Text>
                        <NumberTextField time={time[THEME_STATE.SHORT_BREAK]}
                                         getValue={(value: number) => setTime((prev: timeType) => ({
                                             ...prev,
                                             [THEME_STATE.SHORT_BREAK]: value
                                         }))}
                                         color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}/>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py="1.375rem">
                        <Text variant="textRegular"
                              color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Long break
                            length</Text>
                        <NumberTextField time={time[THEME_STATE.LONG_BREAK]}
                                         getValue={(value: number) => setTime((prev: timeType) => ({
                                             ...prev,
                                             [THEME_STATE.LONG_BREAK]: value
                                         }))}
                                         color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}/>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py="1.375rem">
                        <Text variant="textRegular"
                              color={currentTheme[colorByModeModal[TYPE_OF_COLORS.SECONDARY]]}>Notifications</Text>
                        <Switch checked={!!lockedState}
                                onChange={(e) => e.target.checked ? setLockedState(state) : setLockedState('')}
                                colors={colorByModeModal} currentTheme={currentTheme}/>
                    </Box>
                </Box>
            </StyledModal>
        </Modal>
    )
}