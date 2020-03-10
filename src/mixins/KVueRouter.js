let Vue
// 1.实现一个插件：并且要挂载$router

class VueRouter {
  constructor(options) {
    this.$options = options
  }
}

// 实现一个插件就是要有install方法，在Vue.use(VurRouter)的时候会调用
VueRouter.install = function(_Vue) {
  // 接收一个Vue,这样试用的时候打包就不会import Vue
  Vue = _Vue
  // 挂载$router到根组件实例
  // 如何获取到根组件实例：用全局混入的方式，并且在实例中有router这个属性的就是根
  Vue.mixin({
    beforeCreate() {
      if (this.router) {
        this.$router = router
      }
    }
  })
}

export default VueRouter
