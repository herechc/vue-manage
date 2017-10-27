import cookie from 'utils/cookie'
import * as key from 'utils/config'

const state = {
  token: cookie.get(key.TOKEN)
}

export default state
