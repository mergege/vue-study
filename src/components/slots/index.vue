<template>
  <div>
    <h2>插槽</h2>
    <layout>
      <!-- 具名插槽 -->
      <template v-slot:header>插槽头部</template>
      <!-- 匿名插槽 -->
      <template>contents...</template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="ctx">
        <p>{{ctx.fc}}</p>
        <p>{{ctx.fc2}}</p>
      </template>
    </layout>
  </div>
</template>

<script>
import layout from './layout.vue'
export default {
  components: {
    layout
  },
}
</script>

<style lang="scss" scoped>
</style>