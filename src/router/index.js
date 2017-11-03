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
    path: '/signup',
    component: _import('login/signup'),
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    redirect: '/manage/userList',
    hidden: true
  },
  {
    path: '/manage',
    name: '数据管理',
    component: Index,
    icon: 'el-icon-document',
    children: [
      { path: '/manage/userList', component: _import('manage/index'), name: '用户列表' },
      { path: '/manage/shopList', component: _import('manage/shopList'), name: '商家列表' },
      { path: '/manage/foodList', component: _import('manage/foodList'), name: '食品列表' },
      { path: '/manage/orderList', component: _import('manage/orderList'), name: '订单列表' },
      { path: '/manage/adminList', component: _import('manage/adminList'), name: '管理员列表' },
      { path: '/manage/goods', component: _import('manage/goods'), name: '商品' },
      { path: '/manage/banner', component: _import('manage/banner'), name: '焦点图' },
      { path: '/manage/category', component: _import('manage/category'), name: '分类' }
    ]
  },
  {
    path: '/add',
    name: '添加数据',
    component: Index,
    icon: 'el-icon-plus',
    children: [
      { path: '/add/addshop', component: _import('add/index'), name: '添加商铺' },
      { path: '/add/addGoods', component: _import('add/addGoods'), name: '添加商品' },
      { path: '/add/addBanner', component: _import('add/addBanner'), name: '添加焦点图' }
    ]
  }
]
export default new Router({
  routes: routermap
})

