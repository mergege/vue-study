import Vue from 'vue'

// component是组件对象，props是传入组件的数据
function create(Component, props) {
  // 1.如何获得组件构造函数：用来生成组件的实例对象
  // 方法一：Vue.extend()
  // 方法二：render函数
  const vm = new Vue({
    // h是createElement,会创建vNode
    render: h => h(Component, { props })
  }).$mount() // 挂载就会生成真实dom,但是没指定挂载对象不会追加
  console.log('vm---', vm)
  // 手动把Dom挂载到body
  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]
  //vm是Vue的实例,comp是组件的实例
  comp.remove = function() {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}
export default create
