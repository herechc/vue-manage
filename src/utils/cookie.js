import Cookies from 'js-cookie'
export default {
  get: (key, cookie) => {
    return Cookies.get(key, cookie)
  },
  set: (key, cookie) => {
    return Cookies.set(key, cookie)
  },
  remove: (key, cookie) => {
    return Cookies.remove(key, cookie)
  }
}
