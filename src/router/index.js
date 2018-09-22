import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
  // esLint检测 空格 key前2space value前4space 不使用tab
  // 设置默认路由
    // {
    //   path: '/',
    //   redirect: '/hello'
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
