import React, { useState } from 'react'
import { TextFieldProps } from '@mui/material'
import {
  StyledTextField,
  StyledTextFieldControl,
  StyledTextFieldPlus,
  StyledTextFieldMinus,
  StyledTextFieldWrapper,
} from './styled'

type TextFieldMuiProps = TextFieldProps & {
  color: string
  getValue?: Function
  time?: number
}

export const NumberTextField = ({ color, getValue = () => {}, time }: TextFieldMuiProps) => {
  const [value, setValue] = useState<number>(time || 0)

  const handleGetValue = (value: string | number) =>
    typeof value === 'string' ? getValue(Number(value)) : getValue(value)

  const plus = () => {
    setValue(value + 1)
    handleGetValue(value + 1)
  }
  const minus = () => {
    if (value) {
      setValue(value - 1)
      handleGetValue(value - 1)
    }
  }

  return (
    <StyledTextFieldWrapper>
      <StyledTextField
        value={value}
        type="number"
        onChange={(event) => {
          handleGetValue(event.target.value)
          setValue(Number(event.target.value))
        }}
      />
      <StyledTextFieldControl>
        <StyledTextFieldPlus color={color} onClick={plus} />
        <StyledTextFieldMinus color={color} onClick={minus} />
      </StyledTextFieldControl>
    </StyledTextFieldWrapper>
  )
}
