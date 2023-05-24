export const themeColors = {
  lightTheme: {
    focusColors: {
      main50: 'hsla(0, 100%, 97%, 1)', //red50
      mainAlpha100: 'hsla(0, 100%, 65%, 0.15)', //Red Alpha/100
      mainAlpha600: 'hsla(0, 100%, 65%, 0.71)', //Red Alpha/700
      main900: 'hsla(0, 54%, 18%, 1)', //Red/900
    },
    shortBreakColors: {
      main50: 'hsla(134, 100%, 97%, 1)', //green50
      mainAlpha100: 'hsla(134, 66%, 58%, 0.15)', //Green Alpha/100
      mainAlpha600: 'hsla(134, 66%, 58%, 0.62)', //Green Alpha/600
      main900: 'hsla(132, 52%, 16%, 1)', //Green/900
    },
    longBreakColors: {
      main50: 'hsla(208, 100%, 97%, 1)', //blue50
      mainAlpha100: 'hsla(208, 100%, 65%, 0.15)', //blue Alpha/100
      mainAlpha600: 'hsla(208, 100%, 65%, 0.62)', //blue Alpha/600
      main900: 'hsla(208, 54%, 18%, 1)', //blue/900
    },
    otherColors: {
      blackAlpha200: 'hsla(0, 0%, 0%, 0.24)',
    },
  },
  darkTheme: {
    focusColors: {
      main50: 'hsla(0, 100%, 97%, 1)', //red50
      main950: 'hsla(0, 52%, 3%, 1)', //red950
      mainAlpha100: 'hsla(0, 100%, 65%, 0.15)', //Red Alpha/100
      mainAlpha600: 'hsla(0, 100%, 65%, 0.71)', //Red Alpha/600
    },
    shortBreakColors: {
      main50: 'hsla(134, 100%, 97%, 1)', //green50
      main950: 'hsla(134, 52%, 3%, 1)', //green950
      mainAlpha100: 'hsla(134, 66%, 58%, 0.15)', //green Alpha/100
      mainAlpha600: 'hsla(134, 66%, 58%, 0.62)', //green Alpha/600
    },
    longBreakColors: {
      main50: 'hsla(208, 100%, 97%, 1)', //blue50
      main950: 'hsla(208, 52%, 3%, 1)', //blue950
      mainAlpha100: 'hsla(208, 100%, 65%, 0.15)', //blue Alpha/100
      mainAlpha600: 'hsla(208, 100%, 65%, 0.62)', //blue Alpha/600
    },
    otherColors: {
      blackAlpha200: 'hsla(0, 0%, 100%, 0.24)',
    },
  },
}

export const themeColorNameToValue = {
  ...themeColors.lightTheme.otherColors,
  ...themeColors.lightTheme.focusColors,
  ...themeColors.lightTheme.longBreakColors,
  ...themeColors.lightTheme.shortBreakColors,
  ...themeColors.darkTheme.otherColors,
  ...themeColors.darkTheme.focusColors,
  ...themeColors.darkTheme.shortBreakColors,
  ...themeColors.darkTheme.longBreakColors,
}

export type ThemeColors = keyof (typeof themeColors.lightTheme.otherColors &
  typeof themeColors.lightTheme.focusColors &
  typeof themeColors.lightTheme.longBreakColors &
  typeof themeColors.lightTheme.shortBreakColors &
  typeof themeColors.darkTheme.otherColors &
  typeof themeColors.darkTheme.focusColors &
  typeof themeColors.darkTheme.longBreakColors &
  typeof themeColors.darkTheme.shortBreakColors)
