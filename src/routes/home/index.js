/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:41:38
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-14 17:11:04
 * @Description: 文件描述
 */
import React, { useState, useCallback, } from "react";

const Home = props => {
  const [num, setNum] = useState(0);
  const plusNum = useCallback(
    () => {
      setNum(num + 1)
    },
    [num],
  )
  return (
    <div>
      <h1>Home</h1>
      <div>render num {num}</div>
      <button onClick={plusNum}>+</button>
    </div>
  );
};

export default Home;
