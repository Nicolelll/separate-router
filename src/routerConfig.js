/*
 * @Author: zhangLing
 * @Date: 2020-03-17 18:00:42
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-03-24 15:42:26
 * @Description: 路由文件
 */
import React from 'react';
import BasicLayout from './layout/basicLayout'
import TestLayout from './layout/testLayout'
import NoFound from './404'
import { HashRouter, Route, Switch   } from 'react-router-dom'

const rootRoutes =  [
  {
    path: '/',
    component: BasicLayout,
    routes: (r => {
      return r.keys().map(key => r(key).default)
      })(require.context('./routes', true, /\/router\.js$/)).flat()
  },
  {
    path: '/test',
    component: TestLayout,
    routes: (r => {
      return r.keys().map(key => r(key).default)
    })(require.context('./routes', true, /test\.router\.js$/))
  },
]
const renderRoutes = () => {
  const routesList = []
  rootRoutes.map((route) => (
    route.routes.map(r => (
      routesList.push({
        layout: route.component,
        path: r.path,
        component: r.component,
      })
    ))
  ))
  return routesList
}
const RootRouters = () => {
  return (
    <HashRouter>
       <Switch>
         {
           renderRoutes().map(route => (
             <RouteWithLayout {...route} />
           ))
         }
         <Route component={NoFound} path='*' />
        </Switch>
    </HashRouter>
  )
}
const RouteWithLayout = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.layout {...props}>
          <route.component />
        </route.layout>
      )}
    />
  )
}

export default RootRouters
