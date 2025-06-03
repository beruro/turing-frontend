/**
 * title: 创建按钮主题配置
 * description: 为不同app配置不同的create按钮颜色
 */

import React from 'react'
import { View, Text } from 'react-native'

import Button from '../button'
import Space from '../../space'

export default function CreateButtonThemes() {
    // DreamLux theme - purple
    const dreamluxTheme = {
        button_create_color: '#7662EC',
    }

    // Groovo theme - orange
    const groovoTheme = {
        button_create_color: '#FF6B35',
    }

    // Fluenty theme - teal
    const fluentyTheme = {
        button_create_color: '#00D4AA',
    }

    return (
        <View style={{ padding: 16 }}>
            <Space>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                    DreamLux (Purple)
                </Text>
                <Space direction="horizontal">
                    <Button type="create" text="Create" theme={dreamluxTheme} />
                    <Button type="create" text="Create" round theme={dreamluxTheme} />
                    <Button type="create" text="Create" disabled theme={dreamluxTheme} />
                </Space>

                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, marginTop: 16 }}>
                    Groovo (Orange)
                </Text>
                <Space direction="horizontal">
                    <Button type="create" text="Create" theme={groovoTheme} />
                    <Button type="create" text="Create" round theme={groovoTheme} />
                    <Button type="create" text="Create" disabled theme={groovoTheme} />
                </Space>

                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, marginTop: 16 }}>
                    Fluenty (Teal)
                </Text>
                <Space direction="horizontal">
                    <Button type="create" text="Create" theme={fluentyTheme} />
                    <Button type="create" text="Create" round theme={fluentyTheme} />
                    <Button type="create" text="Create" disabled theme={fluentyTheme} />
                </Space>
            </Space>
        </View>
    )
} 