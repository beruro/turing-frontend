import React, { memo } from 'react'
// 使用require导入图片，避免TypeScript错误
const Image = require('../../../../snapshoot.png');

import './index.less'

const Home = () => {
  return (
    <>
      {/* <h3 className="custom-home-h2">组件丰富，选用自如</h3>
      <p className="custom-home-desc">
        大量实用组件满足你的需求，灵活定制与拓展
      </p> */}

      {/* <div className="custom-home-snapshoot">
        <img src={Image} />
      </div> */}
    </>
  )
}

export default memo(Home)
