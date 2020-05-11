/*
 * @Author: zhangLing
 * @Date: 2020-03-17 18:00:42
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-29 17:23:44
 * @Description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './global.less';
import RootRoutes from './routerConfig';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RootRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
