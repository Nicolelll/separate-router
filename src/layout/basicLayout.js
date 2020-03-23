/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:51:31
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-23 16:02:54
 * @Description: 文件描述
 */
import React from 'react'

class BasicLayout extends React.Component {
  isMatch = () => {
    const { router, children } = this.props
    const curPath = router.location.pathname
    return children.some(item => item.props.path == curPath)
  }
  renderContent = () => (
    this.isMatch() ?
    <div>
      <div>header</div>
      <div>{this.props.children}</div>
    </div> :
    null
  )
  
  render() {
    return (
      this.renderContent()
    )
  }
}
export default BasicLayout
