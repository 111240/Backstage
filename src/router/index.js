import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SonHome from '@/components/effectComponent/home'
import Login from '@/components/effectComponent/login'
// import userList from '@/components/effectComponent/userList'
import userInfo from '@/components/effectComponent/userList/userInfo'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/sonhome',
          name: '首页',
          component: SonHome
        },
        {
          path: '/login',
          name: '登陆',
          component: Login
        },
        {
          path: '/userInfo',
          name: '用户信息',
          component: userInfo
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
