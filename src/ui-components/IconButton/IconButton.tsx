import React from 'react'
import {IconButtonProps as IconButtonMUIProps, IconButton as IconButtonMUI} from '@mui/material'
import {Icon} from '../Icon'
import {ThemeIcons} from '../Icon/icons'
import {ThemeColors} from "../../theme/themeColors";

type IconButtonProps = Omit<IconButtonMUIProps, 'size'> & {
    icon: ThemeIcons,
    iconSize?: string,
    size?: 'lg' | 'md' | 'sm',
    primaryColor: ThemeColors,
    secondaryColor: ThemeColors,
}

export const IconButton: React.FC<IconButtonProps> = ({
      iconSize= '1.8rem',
      icon,
      size = 'lg',
      primaryColor,
      secondaryColor,
      ...props
  }) => {

    return (
        <IconButtonMUI
            {...props}
            disableRipple
            className={`IconButton IconButton-${size}`}
            sx={{
                backgroundColor: secondaryColor,
                "&.Mui-disabled": {
                    background: secondaryColor,
                }
            }}
        >
            <Icon color={primaryColor} icon={icon} width={iconSize} height={iconSize}/>
        </IconButtonMUI>
    )
}
