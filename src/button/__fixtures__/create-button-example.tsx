/**
 * title: 创建按钮
 * description: 带有闪光图标的紫色创建按钮
 */

import React from 'react'
import { View } from 'react-native'

import Button from '../button'
import Space from '../../space'

export default function CreateButtonExample() {
    return (
        <View style={{ padding: 16 }}>
            <Space>
                <Button type="create" text="Create" />
                <Button type="create" text="Create" round />
                <Button type="create" text="Create" disabled />
                <Button type="create" text="Create" round disabled />
            </Space>
        </View>
    )
} 