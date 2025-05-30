/**
 * title: 综合用法
 * description: 对可能出错的组件进行包裹
 */

import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { ErrorBoundary } from 'turing-react-native-ui'

const ErrorApp = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '显示了内容',
      }
    }
    return null
  }, [])

  // @ts-ignore
  return <Text>{randomData.text}</Text>
}

const BasicResult: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorApp />
    </ErrorBoundary>
  )
}

export default BasicResult
