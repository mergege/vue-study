let Vue
// 任务1.实现一个插件：插件要有install方法

class VueRouter {
  constructor(options) {
    this.$options = options
    console.log(11111, this.$options)
  }
}

VueRouter.install = function(_Vue) {
  Vue = _Vue

  // 挂载$router
  // 如何才能获取router
  Vue.mixin({
    beforeCreate() {
      // 确保是根组件才添加
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
  Vue.component('router-view', {})
}

export default VueRouter
