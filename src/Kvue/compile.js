// 编译器
// 递归遍历dom树
// 判断节点类型，如果是文本，则判断是否是插值绑定：{{xxx}}
// 如果是元素，则遍历其属性判断是否指令或者事件：k-/@,然后继续遍历递归子元素

class Compiler {
  // el是宿主元素
  // vm是Kvue实例
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      this.compile(this.$el)
    }
  }

  compile(el) {
    // 遍历节点树
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 判断是否是元素
      if (this.isElement(node)) {
        console.log('编译元素：' + node.nodeName)
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // 如果是插值表达式
        console.log('编译插值绑定' + node.textContent)
        this.compileText(node)
      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isElement(node) {
    return node.nodeType === 1
  }

  isInter(node) {
    // 首先是文本
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
  // 编译文本:插值表达式
  compileText(node) {
    // node.textContent = this.$vm[RegExp.$1.trim()]
    this.update(node, RegExp.$1.trim(), 'text')
  }
  // 编译节点元素
  compileElement(node) {
    // 节点是元素
    // 遍历其属性，调用对应指令方法
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      // attr: K-xx="oo"
      const attrName = attr.name // K-xx
      const exp = attr.value //oo
      if (this.isDirective(attrName)) {
        let dir = attrName.substring(2)
        // 这里指令调用了对应的方法：k-text:this.text()
        this[dir] && this[dir](node, exp)
      }
    })
  }
  // 初始化并且创建Watcher实例观察者：值再次变化的时候执行观察事先设置的函数
  update(node, exp, dir) {
    // 初始化
    // 指令对应更新函数xxUpdater:textUpdater
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    console.log('这个exp是：', exp)
    // 更新处理，封装一个更新函数，可以更新对应的dom元素
    new Watcher(this.$vm, exp, function(val) {
      fn && fn(node, val)
    })
  }
  textUpdater(node, value) {
    node.textContent = value
  }

  isDirective(attrName) {
    console.log('11111', attrName)
    return attrName.indexOf('k-') === 0
  }
  // k-text
  text(node, exp) {
    this.update(node, exp, 'text')
  }
  // k-html
  html(node, exp) {
    this.update(node, exp, 'html')
  }
  htmlUpdater(node, value) {
    node.innerHTML = value
  }
}
