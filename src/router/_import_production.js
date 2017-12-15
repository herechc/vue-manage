module.exports = file => () => import('@/views/' + file + '.vue')// 要这样写才能分割js
