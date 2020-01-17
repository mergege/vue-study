<template>
  <div>
    <!-- label -->
    <p v-if="label">{{label}}</p>
    <slot></slot>
    <!-- 校验规则的显示 -->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      error: '' // 为空表示校验通过
    }
  },
  mounted () {
    // 这个生命周期里子组件已经渲染完成，slot已经被替代成子组件
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      // 规则
      const rules = this.form.rules[this.prop]
      // 要校验的值
      const model = this.form.model[this.prop]
      // 校验描述对象
      const desc = { [this.prop]: rules }
      // 创建一个schema实例
      const schema = new Schema(desc)
      console.log(1)
      return schema.validate({ [this.prop]: model }, errors => {
        console.log(this.prop, errors)
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })

    }
  },
}
</script>

<style lang="scss" scoped>
</style>