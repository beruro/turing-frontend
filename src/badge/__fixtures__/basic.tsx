import React from 'react'
import { ScrollView } from 'react-native'
import { Space } from '@turing/react-native-ui'

import BadgeBase from './base'
import BadgeStatus from './status'

const BasicBadge: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <BadgeBase />
        <BadgeStatus />
      </Space>
    </ScrollView>
  )
}

export default BasicBadge
