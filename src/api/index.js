import fetch from 'utils/fetch'
import qs from 'qs'
export default {
  login: data => {
    return fetch.post('/admin/login', qs.stringify(data))
  },
  signup: data => {
    return fetch.post('/admin/signup', qs.stringify(data))
  }
}
