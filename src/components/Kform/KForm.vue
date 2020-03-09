<template>
  <div :model="model" :rules="rules">
    <slot></slot>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter.js'
export default {
  name: 'KForm',
  componentName: 'KForm',
  mixins: [emitter],
  provide() {
    return { form: this }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: []
    }
  },
  created() {
    // 一创建就监听
    try {
      this.$on('kkb.form.addValid', item => {
        console.log(333, item)
        if (item) {
          this.fields.push(item)
        }
      })
    } catch (error) {
      console.log(error)
    }
    console.log(222, this.fields)
  },
  methods: {
    validate(cb) {
      // 获取所有的子孩子并且调用他们的validate方法
      // 这里如果用emitter的broadcast方法会一直递归查找，费性能
      const tasks = this.fields.map(item => item.validate()) // 调用validate方法，.map返回的是数组[result]
      console.log('孩子', tasks)
      Promise.all(tasks)
        .then(() => {
          cb(true)
        })
        .catch(() => {
          cb(false)
        })
      // 获取所有的子孩子并且调用他们的validate方法
      // const tasks = this.$children
      //   .filter(child => child.prop) // 过滤有prop属性的孩子
      //   .map(item => item.validate()) // 调用validate方法，.map返回的是数组[result]
      // console.log('孩子', tasks)
      // Promise.all(tasks)
      //   .then(() => {
      //     alert(1)
      //     cb(true)
      //   })
      //   .catch(() => {
      //     cb(false)
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>