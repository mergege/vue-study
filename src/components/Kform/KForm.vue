<template>
  <div :model="model"
       :rules="rules">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KForm',
  componentName: 'KForm',
  provide () {
    return { 'form': this }
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
  created () {
    this.fileds = []
    this.$on('kkb.KForm.addFiled', item => {
      this.fileds.push(item)
    })
  },
  methods: {
    validate (cb) {
      // 获取所有的子孩子并且调用他们的validate方法
      // const tasks = this.$children.filter(child => child.prop) // 过滤有prop属性的孩子
      //   .map(item => item.validate()) // 调用validate方法，.map返回的是数组[result]
      // console.log('孩子', tasks)
      const tasks = this.fileds.map(item => item.validate())
      Promise.all(tasks).then(() => {
        cb(true)
      }).catch(() => {
        cb(false)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>