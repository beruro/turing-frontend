import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Svg, Path } from 'react-native-svg'

export interface ButtonIconSparkleProps {
    style?: ViewStyle
    width?: number
    height?: number
    color?: string
}

const ButtonIconSparkle: React.FC<ButtonIconSparkleProps> = ({
    style,
    width = 20,
    height = 20,
    color = '#FFFFFF',
    ...restProps
}) => {
    return (
        <Svg
            {...restProps}
            style={style}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none">
            <Path
                d="M12.5 1L15.5 7L21.5 8L17 12.5L18 19L12.5 16L7 19L8 12.5L3.5 8L9.5 7L12.5 1Z"
                fill={color}
            />
        </Svg>
    )
}

export default memo(ButtonIconSparkle) 