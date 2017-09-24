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
    redirect: '/datamanage',
    hidden: true
  },
  {
    path: '/datamanage',
    name: '数据管理',
    component: Index,
    redirect: '/datamanage/index',
    icon: 'el-icon-document',
    children: [
      { path: 'index', component: _import('datamanage/index'), name: '数据' }
    ]
  }
]
export default new Router({
  routes: routermap
})

