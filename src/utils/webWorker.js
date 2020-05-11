/*
 * @Author: zhangLing
 * @Date: 2020-05-08 10:51:07
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-05-08 11:11:58
 * @Description: webWorker 测试文件
 */
export function circulation() {
  for (let i = 0; i < 10000; i++) {
    if (i == 9999) {
      postMessage(true)
    }    
  }
}
