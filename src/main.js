import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
Vue.config.productionTip = false
Cookies.set('includePath', ['home', 'about'])
// 初始化两个页面都缓存住
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
