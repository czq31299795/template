import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
console.log(process.env.VUE_APP_NGINX_BASE)
export const constantRoutes = [
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  }, {
    path: '/',
    component: (resolve) => require(['@/views/index'], resolve),
    hidden: true
  },
]
export default new Router({
  mode: 'history', // 去掉url中的#
  base: process.env.VUE_APP_NGINX_BASE,   // nginx 前端项目文件夹名称
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
