export const themeTypography = {
  timerPaused: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: '16rem',
    lineHeight: '14rem',
    letterSpacing: '.15px',
  },
  timerRunning: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '16rem',
    lineHeight: '14rem',
    letterSpacing: '.15px',
  },
  headingH1: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '1.75',
    letterSpacing: '.15px',
  },
  labelMedium: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: '1.75',
  },
  textRegular: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.188',
    letterSpacing: '.15px',
  },
  labelSmall: {
    fontFamily: 'Roboto Flex',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '.75rem',
    lineHeight: '.875rem',
    letterSpacing: '.15px',
  },
}

export type ThemeTypography = keyof typeof themeTypography
