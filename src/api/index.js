import fetch from 'utils/fetch'
import qs from 'qs'
export default {
  /**
   * 接口名称：登录
   * 参数：
   *      access_token(token)
   *      name(名称)
   *      password(密码)
  */
  login: data => {
    return fetch.post('/admin/login', qs.stringify(data))
  },
   /**
   * 接口名称：注册
   * 参数：
   *      access_token(token)
   *      name(名称)
   *      password(密码)
  */
  signup: data => {
    return fetch.post('/admin/signup', qs.stringify(data))
  },
  /**
   * 接口名称：添加焦点图
   * 参数：
   *      access_token(token)
   *      image_path(图片地址)
  */
  addBanner: data => {
    return fetch.post('/admin/banner/new', qs.stringify(data))
  },
  /**
   * 接口名称：获取焦点图
   * 参数：
   *      access_token(token)
  */
  fetchBanner: data => {
    return fetch.get('/admin/banner/list')
  },
  /**
   * 接口名称：删除焦点图
   * 参数：
   *      access_token(token)
   *      id(焦点图id)
  */
  delBanner: id => {
    return fetch.post('/admin/banner/del/' + id)
  },
  /**
   * 接口名称：添加分类
   * 参数：
   *      access_token(token)
   *      name(分类名)
  */
  addCategory: data => {
    return fetch.post('/admin/category/new', qs.stringify(data))
  },
  /**
   * 接口名称：删除分类
   * 参数：
   *      access_token(token)
   *      id
  */
  delCategory: id => {
    return fetch.post('/admin/category/del/' + id)
  },
  /**
   * 接口名称：分类列表
   * 参数：
   *      access_token(token)
  */
  fetchCategory: data => {
    return fetch.get('/admin/category/list')
  },
  /**
   * 接口名称：商品列表
   * 参数：
   *      access_token(token)
  */
  fetchGoods: data => {
    return fetch.get('/admin/goods/list')
  },
  /**
   * 接口名称：删除商品
   * 参数：
   *      access_token(token)
   *      id
  */
  delGoods: id => {
    return fetch.post('/admin/goods/del/' + id)
  },
  /**
   * 接口名称：添加商品
   * 参数：
   *      access_token(token)
   *      name(名字)
   *      price(价格)
   *      category(分类)
   *      image_path(图片)
  */
  addGoods: data => {
    return fetch.post('/admin/goods/new', qs.stringify(data))
  }
}
