/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:51:31
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-31 10:14:22
 * @Description: 文件描述
 */
import React from 'react'

class BasicLayout extends React.Component {
  renderContent = () => (
    <div>
      <div>header</div>
      <div>{this.props.children}</div>
    </div> 
  )
  
  render() {
    return (
      this.renderContent()
    )
  }
}
export default BasicLayout
