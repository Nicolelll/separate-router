/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:51:31
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-05-11 17:22:12
 * @Description: 文件描述
 */
import React from 'react'
import styles from './basicLayout.less'
class BasicLayout extends React.Component {
  renderContent = () => (
    <div className={'base_layout_container'}>
      <div className={'header'}>header</div>
      <div>{this.props.children}</div>
    </div>
  )

  render() {
    console.log('styles', styles)
    return this.renderContent()
  }
}
export default BasicLayout
