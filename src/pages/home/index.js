/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:41:38
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-05-11 17:29:05
 * @Description: 文件描述
 */
import React from 'react'
import styles from './index.less'

const Home = props => {
  console.log(111, styles)
  return (
    <div className={styles.container}>Home</div>
  )
}

export default Home
