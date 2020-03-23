/*
 * @Author: zhangLing
 * @Date: 2020-03-23 13:58:11
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-23 15:58:15
 * @Description: 文件描述
 */
import React from 'react'
import NoFound from '../404'

class TestLayout extends React.Component {  
  isMatch = () => {
    const { router, children } = this.props
    const curPath = router.location.pathname
    return children.some(item => item.props.path == curPath)
  }
  renderContent = () => (
    this.isMatch() ?
    <div>
      <div>{this.props.children}</div>
      <div>this is test page</div>
    </div> :
    null
  )
  render() {
    return (
      this.renderContent()
    )
  }
}
export default TestLayout
