export default {
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
}
