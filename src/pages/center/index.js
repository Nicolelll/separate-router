/*
 * @Author: zhangLing
 * @Date: 2020-03-20 14:43:05
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-05-11 17:06:00
 * @Description: 文件描述
 */
import React from "react";
import { circulation } from '../../utils/webWorker'
// import logo from '../../logo.svg'
class Center extends React.PureComponent {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isShow: false,
    }
  }
  handleData = () => {
    const listsData = 500;
    const arrData = [];
    const objData = {}
    for (let i = 0; i < listsData; i++) {
      // arrData.push({
      //   name: `list-${i}`,
      //   key: i,
      // });
      objData[`list-${i}`] = i
    }
    return objData;
  };
  handleClick = () => {
    // const myWorker = new Worker(circulation)
    // myWorker.onmessage = function (e) {
    //   console.log('e: ', e);
    //   console.log(e.data)
    // }
    
  }
  render() {
    const data = this.handleData()
    console.log('data: ', data);
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        {this.state.isShow && <h3>center</h3>}
        {/* <img src={logo} className={styles.App-logo} /> */}
        {
          Object.keys(data).map(item => <div key={data[item]}>{item}</div>)
        }
      </div>
    );
  }
}

export default Center;
