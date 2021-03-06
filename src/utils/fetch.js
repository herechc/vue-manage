import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url->nginx->baseURL: '/api'
  timeout: 5000, // 请求超时
  withCredentials: true// 对应服务器响应头设置Access-Control-Allow-Credentials:true，表示跨域时，允许cookie添加到请求中。
})

service.interceptors.request.use(config => {
  // console.log(config.params)
  if (store.getters.token) {
    if (config.params) {
      config.params.access_token = store.getters.token
    } else {
      config.params = { 'access_token': store.getters.token }
    }
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  // console.log(res)
  if (res.status === 401) {
    store.dispatch('LogOut').then(_ => {
      location.reload()
    })
  } else {
    return res
  }
}, error => {
  if (error.response.status / 1 === 401) {
    // console.log(window.vm)
    window.vm.$alert('由于您长时间没有操作，为保证账户安全，需要重新登录', '重新登录', {
      confirmButtonText: '确定',
      close() {
        store.dispatch('LogOut').then(_ => {
          location.reload()
        })
      }
    })
  } else {
    return Promise.reject(error)
  }
})

export default service
