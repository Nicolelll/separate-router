/*
 * @Author: zhangLing
 * @Date: 2020-03-17 18:00:42
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-23 15:59:50
 * @Description: 文件描述
 */
import React from 'react';
import BasicLayout from './layout/basicLayout'
import TestLayout from './layout/testLayout'
import NoFound from './404'
import { HashRouter, Route, Switch   } from 'react-router-dom'

const rootRoutes =  [
  {
  component: BasicLayout,
  child: (r => {
    return r.keys().map(key => r(key))
    })(require.context('./routes', true, /\/router\.js$/))
  },
  {
    component: TestLayout,
    child: (r => {
      return r.keys().map(key => r(key))
    })(require.context('./routes', true, /test\.router\.js$/))
  },
]
const RootRouters = () => {
  return (
    <HashRouter>
       <Switch>
         <Route render={routerProps => (
           rootRoutes.map(item => {
             console.log(routerProps)
             return <item.component key={item.component} router={routerProps}>
               {
                 item.child.map(r => (
                  <Route exact {...r.default} key={r.path} />
                 ))
               }
             </item.component>
           })
         )} >
         </Route>
         <Route component={NoFound} path='*' />
        </Switch>
    </HashRouter>
  )
}

export default RootRouters
