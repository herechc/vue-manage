import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Index from '../views/layout/Layout'

export const routermap = [
  {
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    redirect: '/userList',
    hidden: true
  },
  {
    path: '/manage',
    name: '数据管理',
    component: Index,
    icon: 'el-icon-document',
    children: [
      { path: '/userList', component: _import('manage/index'), name: '用户列表' },
      { path: '/shopList', component: _import('manage/shopList'), name: '商家列表' },
      { path: '/foodList', component: _import('manage/foodList'), name: '食品列表' },
      { path: '/orderList', component: _import('manage/orderList'), name: '订单列表' },
      { path: '/adminList', component: _import('manage/adminList'), name: '管理员列表' }
    ]
  },
  {
    path: '/add',
    name: '添加数据',
    component: Index,
    icon: 'el-icon-plus',
    children: [
      { path: '/addshop', component: _import('add/index'), name: '添加商铺' },
      { path: '/addGoods', component: _import('add/addGoods'), name: '添加商品' }
    ]
  }
]
export default new Router({
  routes: routermap
})

