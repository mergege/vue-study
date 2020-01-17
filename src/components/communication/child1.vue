<template>
  <div>
    <h2 @click="click1">child1</h2>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
  },
  methods: {
    click1 () {
      this.$emit('child1-parent', '自定义事件：子-父')
      // this.$bus.$emit('child1-child2', '子1-子2')
      // 和$bus一样,谁派发,谁监听
      this.$parent.$emit('child1-child2', '子1-子2')
    },
    eat () {
      console.log('这就回家吃饭')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>