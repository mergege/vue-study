export default {
  // 这个render函数只会在创建的时候调用，如何做到current变化就调用，这个时候需要current是响应式的
  render(h) {
    console.log(4444, this.$router)
    let { routeMap, current } = this.$router
    let component = null
    // 因为mixin里 this.$router = Vue.prototype.$router = this.$options.router
    // 这里每次都要循环，所以用映射表优化
    // this.$router.$options.routes.forEach(route => {
    //   if (route.path === this.$router.current) {
    //     component = route.component
    //   }
    // })
    // 标记当前router-view的深度，以及是router-view组件的标示,这里还是虚拟dom有$vnode.data存储数据的地方
    this.$vnode.data.routerView = true
    let depth = 0
    let parent = this.$parent
    while (parent) {
      let vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData) {
        if (vnodeData.routerView) {
          说明当前的parent是router - view
          depth++
        }
      }
      parent = parent.$parent
    }
    component = routeMap[current].component || null
    return h(component)
  }
}
