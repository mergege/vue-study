<template>
  <div>
    <h3>插槽</h3>
    <!-- 匿名插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <!-- 作用域插槽 -->
    <div class="footer">
      <slot name="footer"
            :fc="footContent"
            :fc2="footContent2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footContent: 'footContent',
      footContent2: 'footContent2'
    }
  },
}
</script>

<style lang="scss" scoped>
</style>