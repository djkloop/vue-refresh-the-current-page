import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
Vue.config.productionTip = false

// 初始化两个页面都缓存住
Cookies.set('includePath', ['home', 'about'])
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
