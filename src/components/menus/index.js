/*
 * @Author: zhangLing
 * @Date: 2020-04-28 17:04:31
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-05-06 18:10:02
 * @Description: 文件描述
 */

import React, { useState, useCallback, useMemo } from 'react'

const Menus = (menus) => {
  const [activeKey, setKey] = useState(0)
  const selectMenu = useCallback(
    (id) => {
      setKey(id)
    },
    [activeKey],
  )
  return (
    <div>
      <h1>Menu</h1>
      {menus.length > 0 &&
        menus.map((item) => <li onClick={selectMenu.bind(this, item.id)}>{item.name}</li>)}
    </div>
  )
}

export default Menus
