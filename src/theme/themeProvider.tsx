import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ThemeProvider as MaterialThemeProvider, Theme as MUITheme } from '@mui/material'
import { GlobalStyles } from './GlobalStyles'
import {lightTheme} from "./themes";

export interface ColorsLightTheme {
    main50: React.CSSProperties['color']
    mainAlpha100: React.CSSProperties['color']
    mainAlpha600: React.CSSProperties['color']
    main900: React.CSSProperties['color']
}

export interface OtherColorsLightTheme {
    blackAlpha200: React.CSSProperties['color']
}

export interface ColorsDarkTheme {
    main50: React.CSSProperties['color']
    main950: React.CSSProperties['color']
    mainAlpha100: React.CSSProperties['color']
    mainAlpha600: React.CSSProperties['color']
}

export interface OtherColorsDarkTheme {
    blackAlpha200: React.CSSProperties['color']
}

export interface LightTheme {
    focusColors: ColorsLightTheme
    shortBreakColors: ColorsLightTheme
    longBreakColors: ColorsLightTheme
    otherColors: OtherColorsLightTheme
}

export interface DarkTheme {
    focusColors: ColorsDarkTheme
    shortBreakColors: ColorsDarkTheme
    longBreakColors: ColorsDarkTheme
    otherColors: OtherColorsDarkTheme
}

export type Themes = LightTheme | DarkTheme

interface CustomThemeVariables {
    themeColors: Themes
}

interface ThemeProviderProps {
    children: React.ReactNode,
    theme?: MUITheme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = lightTheme }) => {
    return (
        <MaterialThemeProvider theme={theme}>
            <GlobalStyles />
            <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </MaterialThemeProvider>
    )
}

export default ThemeProvider

export interface WithTheme {
    theme: MUITheme
}

declare module '@mui/material/styles' {
    interface Theme extends CustomThemeVariables {}

    interface ThemeOptions extends CustomThemeVariables {}
}

declare module '@emotion/react' {
    export interface Theme extends CustomThemeVariables {}
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        timerPaused: true;
        timerRunning: true;
        headingH1: true;
        labelMedium: true;
        textRegular: true;
        labelSmall: true;
    }
}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        timerPaused: React.CSSProperties;
        timerRunning: React.CSSProperties;
        headingH1: React.CSSProperties;
        labelMedium: React.CSSProperties;
        textRegular: React.CSSProperties;
        labelSmall: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        timerPaused: React.CSSProperties;
        timerRunning: React.CSSProperties;
        headingH1: React.CSSProperties;
        labelMedium: React.CSSProperties;
        textRegular: React.CSSProperties;
        labelSmall: React.CSSProperties;
    }
}
