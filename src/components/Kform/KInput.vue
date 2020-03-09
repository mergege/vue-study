<template>
  <div>
    <!-- 要实现自定义组件双向绑定需要:value和@input -->
    <!-- v-bind="$attrs"展开非props的属性：像type和placeholder不需要再申明props -->
    <input v-bind="$attrs" :value="value" @input="kinput">
  </div>
</template>

<script>
import emitter from '@/mixins/emitter.js'
export default {
  inheritAttrs: false, // 避免展开属性（type/placeholder）到根元素div上
  inject: ['form'],
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    kinput(e) {
      console.log(e.target.value)
      // 派发一个事件：告知父组件input的值发生了改变
      this.$emit('input', e.target.value)
      // 派发一个事件通知校验
      // this.$parent.$emit('validate') // parent派发事件父子耦合太强
      this.dispatch('KInputItem', 'validate')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>