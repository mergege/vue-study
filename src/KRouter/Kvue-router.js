let Vue
// 任务1.实现一个插件：插件要有install方法
class VueRouter {
  constructor(options) {
    // 这里的this是构造函数VueRouter的实例
    this.$options = options
    // 需要创建current响应式的属性
    Vue.util.defineReactive(this, 'current', '/')
    // this.current = '/'
    // 任务3：监听地址栏路由变化
    window.addEventListener('hashchange', this.hashChange.bind(this)) //因为是window调用，所以这里需要bind一下hashChange的this
    window.addEventListener('load', this.hashChange.bind(this))
    // 用箭头函数不需要bind
    // window.addEventListener('load', () =>{
    //   console.log(window.location.hash)
    //   this.current = window.location.hash.slice(1)
    //   console.log(this.current)
    // })
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
      // 确保是根组件才添加
      // 这里的this是Vue组件实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  // 任务2:实现全局组件router-link和router-view
  // 全局组件：Vue.component(组件名， 配置项)
  Vue.component('router-link', {
    // h就是createElement方法，返回VNode
    props: {
      to: {
        type: String,
        default: ''
      }
    },
    render(h) {
      console.log(this.$slots)
      // <router-link to="/about" class="router-link">About</router-link>
      // 最终变成：<a href="#/about" class="router-link">About<a/>
      // h(tag, data, children)----data里的数据内容如果是特定属性需要方attrs里
      return h(
        'a',
        { attrs: { href: '#' + this.to }, class: 'router-link' },
        this.$slots.default
      )
    }
  })
  Vue.component('router-view', {
    // 这个render函数只会在创建的时候调用，如何做到current变化就调用，这个时候需要current是响应式的
    render(h) {
      console.log(4444, this.$router)
      let component = null
      this.$router.$options.routes.forEach(route => {
        if (route.path === this.$router.current) {
          component = route.component
        }
      })
      return h(component)
    }
  })
}

export default VueRouter
