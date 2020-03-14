// 注意：这里有两个this,一个是VueRouter的实例this.$router，里面包含创建实例的时候传的路由配置项routes,也包含属性$options,current
// 二个是Vue组件的实例this.$options，而最大的Vue实例里面就包含第1个的实例router

import Link from './KRouter-Link'
import View from './KRouter-view'

let Vue
// 任务1.实现一个插件：插件要有install方法
class VueRouter {
  constructor(options) {
    // 这里的this是构造函数VueRouter的实例

    // 这个options就是构造函数VueRouter创建实例的时候传的，包含路由配置routes
    // const router = new VueRouter({
    //   mode: 'history',
    //   base: process.env.BASE_URL,
    //   routes
    // })
    this.$options = options
    // 需要创建current响应式的属性
    Vue.util.defineReactive(this, 'current', '/')
    // this.current = '/' // 这个current属性是router实例里的
    // 任务3：监听地址栏路由变化
    window.addEventListener('hashchange', this.hashChange.bind(this)) //因为是window调用，所以这里需要bind一下hashChange的this
    window.addEventListener('load', this.hashChange.bind(this))
    // 用箭头函数不需要bind
    // window.addEventListener('load', () =>{
    //   console.log(window.location.hash)
    //   this.current = window.location.hash.slice(1)
    //   console.log(this.current)
    // })
    // 创建路由映射表
    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }
  hashChange() {
    console.log(window.location.hash)
    this.current = window.location.hash.slice(1)
    console.log(this.current)
  }
}

VueRouter.install = function(_Vue) {
  Vue = _Vue
  // 挂载$router
  // 如何才能获取router
  Vue.mixin({
    beforeCreate() {
      console.log()
      // 确保是根组件才添加
      // 因为用到混入，生命周期就是组件实例的，这里的this是Vue组件实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router // this.$router.$options的router就是Vue创建实例时候的属性,继承VueRouter的属性：$optioons/current/routeMap
      }
    }
  })
  // 任务2:实现全局组件router-link和router-view
  // 全局组件：Vue.component(组件名， 配置项)
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default VueRouter
