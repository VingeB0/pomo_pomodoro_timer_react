export const muiIconButton = {
  styleOverrides: {
    root: {
      '&.IconButton': {
        transition: 'opacity .3s linear',
        '&:hover': {
          opacity: 0.7,
        },
        '&:disabled': {
          opacity: 0.2,
        },
      },
      '&.IconButton-lg': {
        borderRadius: '2rem',
        padding: '1.9rem 3.1rem',
      },
      '&.IconButton-md': {
        borderRadius: '1.2rem',
        padding: '1.42rem 1.62rem',
      },
      '&.IconButton-sm': {
        borderRadius: '1.2rem',
        padding: '.1rem .5rem',
      },
    },
  },
}
