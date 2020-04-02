/*
 * @Author: zhangLing
 * @Date: 2020-04-01 17:02:49
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-02 10:15:09
 * @Description: 后台服务
 */
const Koa = require('koa2')
const app = new Koa()
const HtmlWebpackPlugin = require('html-webpack-plugin');

app.use(async ctx => {
  ctx.body = new HtmlWebpackPlugin(
      {
        inject: true,
        template: '../public/index.html',
      }
)

app.listen(3000)
