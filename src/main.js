import Vue from 'vue'
import App from './App.vue'
import create from '@/util/create.js'

Vue.config.productionTip = false
// 事件总线方式
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create

new Vue({
  render: h => h(App)
}).$mount('#app')
