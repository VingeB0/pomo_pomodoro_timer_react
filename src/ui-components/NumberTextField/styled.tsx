import styled from '@emotion/styled'
import { TextField as TextFieldMui } from '@mui/material'
import { Box } from '../Box'

export const StyledTextField = styled(TextFieldMui)`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .MuiInputBase-input {
    padding: 10.5px 14px;
    width: calc(100% - 58px);
    height: 100%;
    text-align: center;
  }

  .MuiInputBase-root {
    border: 0;
  }

  fieldset {
    border: 0;
  }
`

export const StyledTextFieldWrapper = styled(Box)`
  position: relative;
  height: 2.5rem;
  width: 6rem;
  border-radius: 0.5rem;
  border: ${({ theme }) => `1px solid ${theme.themeColors.otherColors.blackAlpha200}`};
`

export const StyledTextFieldControl = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  border-left: ${({ theme }) => `1px solid ${theme.themeColors.otherColors.blackAlpha200}`};
`

export const StyledTextFieldPlus = styled(Box)`
  position: relative;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.themeColors.otherColors.blackAlpha200}`};
  cursor: pointer;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.5;
  }

  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-width: 0 6px 8px 6px;
    border-color: ${({ color }) => ` transparent transparent ${color} transparent`};
    border-style: solid;
  }
`

export const StyledTextFieldMinus = styled(Box)`
  position: relative;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.5;
  }

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-width: 8px 6px 0 6px;
    border-color: ${({ color }) => `${color} transparent transparent transparent`};
    border-style: solid;
  }
`
