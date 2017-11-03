import $api from 'api'
import cookie from 'utils/cookie'
import * as key from 'utils/config'
import * as types from './mutation-types.js'
import { Message } from 'element-ui'
export const Login = ({ commit }, userInfo) => {
  return new Promise((resolve, reject) => {
    $api.login(userInfo).then(res => {
      console.log(res)
      if (res.data.code === 1) {
        const data = res.data
        cookie.set(key.TOKEN, data.token)
        commit(types.SET_TOKEN, data.token)
        resolve()
      } else {
        Message.error(res.data.message)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export const LogOut = ({ commit }) => {
  return new Promise(resolve => {
    commit(types.SET_TOKEN, '')
    cookie.remove(key.TOKEN)
    resolve()
  })
}
