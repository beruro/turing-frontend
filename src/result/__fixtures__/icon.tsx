/**
 * title: 图标集合
 * description: 内置几种图标。
 */

import { Result, Space } from 'turing-react-native-ui'

const ResultIcon = () => {
  return (
    <Space>
      <Result.IconBox />
      <Result.IconEmpty />
      <Result.IconError />
      <Result.IconWarning />
      <Result.IconWarning
        style={{ backgroundColor: '#f30', alignSelf: 'center' }}
      />
    </Space>
  )
}

export default ResultIcon
