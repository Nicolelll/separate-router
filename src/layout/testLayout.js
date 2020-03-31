/*
 * @Author: zhangLing
 * @Date: 2020-03-23 13:58:11
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-31 10:14:07
 * @Description: 文件描述
 */
import React from 'react'

class TestLayout extends React.Component {  
  renderContent = () => (
    <div>
      <div>{this.props.children}</div>
      <div>this is test page</div>
    </div>
  )
  render() {
    return (
      this.renderContent()
    )
  }
}
export default TestLayout
