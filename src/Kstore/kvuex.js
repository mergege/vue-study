let Vue

class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions

    // 创建响应式的state
    // this.state = new Vue({
    //   data: options.state // 这个Vue是根组件，data可以直接赋值，这样state就是响应式数据，也可以用方法Vue.util.defineReactive
    // })
    // 以上的state里的数据可能被用户修改，所以要保护起来
    this._vm = new Vue({
      data: {
        // 加两个$,Vue不会做代理，所以隐藏了无法访问
        $$state: options.state
      }
    })
    // 绑定commit和dispatch的上下文，防止actions在调用commit的时候因为用了window.setTimeout方法改变了this指向
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // 存取器
  get state() {
    // return this._vm.data.$$state  //Vue实例的data要用_data或者$data访问
    return this._vm.$data.$$state
    // return this._vm._data.$$state
  }
  set state(mydata) {
    // 用户想传mydata来修改state的值
    console.error('你造吗，改state的数据是不对的！')
  }
  // commit('add', 1)
  commit(type, payLoad) {
    let entry = this._mutations[type]
    console.log(entry)
    if (entry) {
      entry(this.state, payLoad)
    }
    console.log(this.state.counter)
  }
  // store.dispatch('add', 1)
  dispatch(type, payLoad) {
    let entry = this._actions[type]
    if (entry) {
      entry(this, payLoad)
    }
  }
}

function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
