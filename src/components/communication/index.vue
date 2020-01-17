<template>
  <div>
    <h2>组件通信</h2>
    <!-- props和自定义事件实现父子组件通信 -->
    <child1 ref="child1"
            msg="some msg from parent"
            @child1-parent="child1Parent"></child1>
    <!-- 事件派发：$bus和$parent -->
    <!-- $attrs:获取未被props接收的其他属性数据 -->
    <child2 ref="child2"
            msg="some msg from parent"
            @click="click2"></child2>
    <button @click='goHome'>回家吃饭</button>
  </div>
</template>

<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
  // provide/inject多用于组件库开发通信，可跨层级
  provide () {
    return {
      foo: 'fooooo'
    }
  },
  components: {
    child1,
    child2
  },
  methods: {
    child2Click (event) {
      // let a = event
      console.log(event)
    },
    child1Parent (e) {
      console.log(e)
    },
    goHome () {
      // $children无法保证顺序
      this.$children[0].eat()
    },
    click2 () {
      console.log('来自老爹的回调')
    }
  },
  mounted () {
    console.log(this.$refs)
  },
}
</script>

<style lang="scss" scoped>
</style>