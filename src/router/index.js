import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import SonHome from '@/components/effectComponent/home'
// import Login from '@/components/effectComponent/login'
// import userList from '@/components/effectComponent/userList'
// import userInfo from '@/components/effectComponent/userList/userInfo'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve),
      children: [
        {
          path: '/sonhome',
          name: '首页',
          component: resolve => require(['@/components/effectComponent/home'], resolve)
        },
        {
          path: '/login',
          name: '登陆',
          component: resolve => require(['@/components/effectComponent/login'], resolve)
        },
        {
          path: '/userInfo',
          name: '用户信息',
          component: resolve => require(['@/components/effectComponent/userList/userInfo'], resolve)
        }
      ],
      redirect: to => {
        if (to.path === '/') {
          return '/sonhome'
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/sonhome')
  } else {
    next()
  }
})

export default router
