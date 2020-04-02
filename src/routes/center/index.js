/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:43:05
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-01 16:35:57
 * @Description: 文件描述
 */
import React from 'react'

class Center extends React.PureComponent {
  componentDidMount() {
    this.handleWebsocket()
  }
  
  handleWebsocket = () => {
    const socket = new WebSocket('ws://localhost:8080')
    this.handleSocketState(socket.readyState)
  }
  handleSocketState = (state) => {
    switch (state) {
      case WebSocket.CONNECTING:
        return console.log('连接中')
      case WebSocket.OPEN:
        return console.log('连接成功')
      case WebSocket.CLOSING:
        return console.log('连接正在关闭')
      default:
        return console.log('连接关闭');
    }
  }
  render() {
    return (
      <div>center</div>
    )
  }
}

export default Center
