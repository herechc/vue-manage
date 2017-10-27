import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 5000 // 请求超时
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.params.access_token = store.getters.token
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  if (res.status === 401) {
    store.dispatch('LogOut').then(_ => {
      location.reload()
    })
  } else {
    return res
  }
}, error => {
  return Promise.reject(error)
})

export default service
