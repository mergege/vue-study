function defineReactive(obj, key, val) {
  observe(val)
  // 对传入的obj进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ' + key + ':' + val)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal
        console.log('set: ' + key + ':' + newVal)
      }
    }
  })
}

// 数组响应化
// 覆盖数组的7个方法
const originalProto = Array.prototype
// 备份一份，修改备份功能
const arrayProto = Object.create(originalProto)
let arrayMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'reverse',
  'sort'
]
arrayMethods.forEach(method => {
  arrayProto[method] = function() {
    // 先调用原数组方法
    originalProto[method].apply(this, arguments)
    // 执行数组响应化
    console.log('数组变更' + method + '操作')
  }
})

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }

  if (Array.isArray(obj)) {
    obj.__proto__ = arrayProto
    // 遍历数组，每一项循环响应化
    for (let i = 0; i < obj.length; i++) {
      observe(obj[i])
    }
  }
  // 对象响应化
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}
function set(obj, key, val) {
  defineReactive(obj, key, val)
}
// 响应式
const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 }, arr: [1, 2, 3] }
observe(obj)

// obj.foo = 'fooooooooo'
// obj.bar = 'barrrrrrrr'
// obj.baz.a = 10

obj.baz.a
obj.baz = { a: 1000 }
obj.baz.a

// obj.dong = 'dong'
set(obj, 'dong', 'dong')
obj.dong
// Object.defineProperty对数组无效
// 解决办法：重写数组的7个方法，同时做相应操作
obj.arr.push(4)
obj.arr
