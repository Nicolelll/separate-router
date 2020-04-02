/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:41:38
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-01 16:12:01
 * @Description: 文件描述
 */
import React, { useState } from "react";

const Home = props => {
  const [num, setNum] = useState(0);
  const plusNum = () => {
    setNum(num + 1)
  }
  console.log('render')
  return (
    <div>
      <h1>Home</h1>
      <div>render num {num}</div>
      <button onClick={plusNum}>+</button>
    </div>
  );
};

export default Home;
