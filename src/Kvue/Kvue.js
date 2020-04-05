class Kvue {
  constructor(options) {
    // 保存选项
    this.$options = options
    this.$data = options.data
    // 响应式处理
    observe(this.$data)

    // 代理this直接访问data的数据
    proxy(this, '$data')

    // 编译
    new Compiler(options.el, this)
  }
}

// 根据对象数据类型进行不同的响应化操作
class Observer {
  constructor(value) {
    if (typeof value === 'object') {
      this.walk(value)
    }
  }
  // 对象类型响应化
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  // 数组类型响应化，待补充
}

// Watcher类:保存更新函数，值发生变化调用更新函数
const watchers = []
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm

    this.key = key

    this.updateFn = updateFn

    // watchers.push(this)
    // 在Dep构造函数上设置target静态属性，暂存当前watcher实例
    Dep.target = this
    this.vm[this.key] // 这里主动读取一次属性key,触发getter方法，完成依赖收集
    Dep.target = null // 收集完置空
  }
  update() {
    console.log('更新哪个值：', this.key, this.vm[this.key])
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

// Dep:依赖，管理某一个key的所有watcher实例
class Dep {
  constructor() {
    this.deps = []
  }
  // 这个dep就是一个watcher实例
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}

// 基本操作
// 每次定义一个data的key都会调一次
function defineReactive(obj, key, val) {
  observe(val)

  // 创建Dep的实例，会和当前的key一一对应
  const dep = new Dep()

  // 对传入的obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ' + key + ':' + val)
      // 依赖收集在这里：收集的是watcher实例
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal
        console.log('set: ' + key + ':' + newVal)
        observe(newVal)
        // 调用watcher更新函数
        // watchers.forEach(w => w.update())
        dep.notify()
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  //Observer的实例
  new Observer(obj)
}

// 代理$data
function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key]
      },
      set(newVal) {
        vm[sourceKey][key] = newVal
      }
    })
  })
}
