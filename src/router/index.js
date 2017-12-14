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
    icon: 'data',
    children: [
      { path: '/manage/userList', component: _import('manage/index'), name: '用户列表' },
      { path: '/manage/adminList', component: _import('manage/adminList'), name: '管理员列表' },
      { path: '/manage/goods', component: _import('manage/goods'), name: '商品' },
      { path: '/manage/banner', component: _import('manage/banner'), name: '焦点图' },
      { path: '/manage/category', component: _import('manage/category'), name: '分类' }
    ]
  },
  {
    path: '',
    name: '图表',
    component: Index,
    icon: 'charts',
    children: [
      { path: '/charts/index', component: _import('charts/index'), name: '图表' }
    ]
  },
  {
    path: '',
    name: '文本编辑',
    component: Index,
    icon: 'markdown',
    children: [
      { path: '/markdown', component: _import('markdown/index'), name: 'markdown' }
    ]
  },
  {
    path: '',
    name: '说明',
    component: Index,
    icon: 'explain',
    children: [
      { path: '/explain', component: _import('explain/index'), name: 'explain' }
    ]
  }
]
export default new Router({
  routes: routermap
})

