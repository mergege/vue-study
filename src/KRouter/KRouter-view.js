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
    component = routeMap[current].component || null
    return h(component)
  }
}
