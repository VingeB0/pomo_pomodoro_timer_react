import React from 'react'
import { Modal as ModalMui, ModalProps } from '@mui/material'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

export const Modal: React.FC<ModalProps> = ({ children, closeAfterTransition = true, open, ...props }) => {
  return (
    <ModalMui
      {...props}
      open={open}
      closeAfterTransition={closeAfterTransition}
    >
      <Fade key='modal-fade' in={open}>
        <Box>{children}</Box>
      </Fade>
    </ModalMui>
  )
}
