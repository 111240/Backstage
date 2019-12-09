// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './sass/base.scss'
import '@/assets/font/iconfont.css'
const baseUrl = 'http://localhost:3000'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
console.log('asdasdasdasdasdas')

axios.interceptors.request.use(
  config => {
    // let token = localStorage.getItem("x-auth-token");
    // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.token = `${token}`;
    // }
    if (config.url.indexOf(baseUrl) === -1) {
      config.url = baseUrl + config.url
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
