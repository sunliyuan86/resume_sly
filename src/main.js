// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import './assets/css/global.css'


 
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
