import React from 'react'
import { ScrollView } from 'react-native'

import { Space } from 'turing-react-native-ui'

import ResultIcon from './icon'
import ResultStatus from './status'
import ResultCustom from './custom'

const BasicResult: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <ResultIcon />
        <ResultStatus />
        <ResultCustom />
      </Space>
    </ScrollView>
  )
}

export default BasicResult
