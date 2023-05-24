import React from 'react'
import { ThemeIcons, icons } from './icons'
import { StyledIcon } from './styled'
import { ThemeColors } from '../../theme/themeColors'

type IconProps = {
  icon: ThemeIcons
  width?: string
  height?: string
  color?: ThemeColors
}

export const Icon = ({ color = 'main50', icon, height = '2rem', width = '2rem', ...props }: IconProps) => {
  const IconType = icons[icon]

  return (
    <StyledIcon color={color}>
      <IconType width={width} height={height} {...props} />
    </StyledIcon>
  )
}
