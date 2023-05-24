import {ThemeColors} from "../../theme/themeColors";
import {THEME_MODE} from "../../theme/themes";

export enum TYPE_OF_COLORS {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export const colorToStateChip: Record<THEME_MODE, Record<TYPE_OF_COLORS, ThemeColors>> = {
    [THEME_MODE.LIGHT]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha100',
        [TYPE_OF_COLORS.SECONDARY]: 'main900'
    },
    [THEME_MODE.DARK]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha100',
        [TYPE_OF_COLORS.SECONDARY]: 'main50'
    },
}

export const colorToStateBg: Record<THEME_MODE, ThemeColors> = {
    [THEME_MODE.LIGHT]: 'main50',
    [THEME_MODE.DARK]: 'main950',
}

export const colorToStateClock: Record<THEME_MODE, ThemeColors> = {
    [THEME_MODE.LIGHT]: 'main900',
    [THEME_MODE.DARK]: 'main50',
}

export const colorToStatePlay: Record<THEME_MODE, Record<TYPE_OF_COLORS, ThemeColors>> = {
    [THEME_MODE.LIGHT]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha600',
        [TYPE_OF_COLORS.SECONDARY]: 'main900'
    },
    [THEME_MODE.DARK]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha600',
        [TYPE_OF_COLORS.SECONDARY]: 'main50'
    },
}

export const colorToStateOthers: Record<THEME_MODE, Record<TYPE_OF_COLORS, ThemeColors>> = {
    [THEME_MODE.LIGHT]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha100',
        [TYPE_OF_COLORS.SECONDARY]: 'main900'
    },
    [THEME_MODE.DARK]: {
        [TYPE_OF_COLORS.PRIMARY]: 'mainAlpha100',
        [TYPE_OF_COLORS.SECONDARY]: 'main50'
    },
}

export const colorToStateModal: Record<THEME_MODE, Record<TYPE_OF_COLORS, ThemeColors>> = {
    [THEME_MODE.LIGHT]: {
        [TYPE_OF_COLORS.PRIMARY]: 'main50',
        [TYPE_OF_COLORS.SECONDARY]: 'main900'
    },
    [THEME_MODE.DARK]: {
        [TYPE_OF_COLORS.PRIMARY]: 'main950',
        [TYPE_OF_COLORS.SECONDARY]: 'main50'
    },
}

export const modalOverlayColors: Record<THEME_MODE, string> = {
    [THEME_MODE.LIGHT]: 'rgba(0, 0, 0, 0.5)',
    [THEME_MODE.DARK]: 'rgba(255, 255, 255, 0.1)'
}