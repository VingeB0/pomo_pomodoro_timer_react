import styled from '@emotion/styled'
import { ThemeColors } from '../../theme/themeColors'

export const StyledIcon = styled.i<{ color: ThemeColors }>`
  ${({ color }) => color && `color: ${color};`}
  display: inline-block;
`
