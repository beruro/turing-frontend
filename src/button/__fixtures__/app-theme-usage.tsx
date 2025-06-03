/**
 * title: 实际项目中使用APP主题
 * description: 展示如何在实际项目中为不同app配置创建按钮主题
 */

import React from 'react'
import { View, Text } from 'react-native'

import Button from '../button'
import { getAppTheme, createAppTheme } from '../app-themes'
import Space from '../../space'

export default function AppThemeUsage() {
    // 直接使用预定义的app主题
    const dreamluxTheme = getAppTheme('dreamlux')
    const groovoTheme = getAppTheme('groovo')
    const fluentyTheme = getAppTheme('fluenty')

    // 或者创建包含其他主题配置的组合主题
    const extendedDreamluxTheme = createAppTheme('dreamlux', {
        button_border_radius: 12, // 自定义圆角
    })

    return (
        <View style={{ padding: 16 }}>
            <Space>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
                    实际项目使用示例
                </Text>

                <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
                    1. 直接使用预定义主题
                </Text>
                <Space direction="horizontal">
                    <Button type="create" text="DreamLux" theme={dreamluxTheme} />
                    <Button type="create" text="Groovo" theme={groovoTheme} />
                    <Button type="create" text="Fluenty" theme={fluentyTheme} />
                </Space>

                <Text style={{ fontSize: 14, color: '#666', marginBottom: 8, marginTop: 16 }}>
                    2. 扩展主题配置
                </Text>
                <Space direction="horizontal">
                    <Button type="create" text="Extended" theme={extendedDreamluxTheme} />
                </Space>

                <Text style={{ fontSize: 12, color: '#999', marginTop: 16 }}>
                    代码示例:
                    {'\n'}
                    import {`{getAppTheme}`} from '@turing/react-native-ui'
                    {'\n'}
                    const theme = getAppTheme('dreamlux')
                    {'\n'}
                    &lt;Button type="create" text="Create" theme={`{theme}`} /&gt;
                </Text>
            </Space>
        </View>
    )
} 