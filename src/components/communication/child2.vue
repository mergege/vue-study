<template>
  <div>
    <h2 v-on="$listeners">child2</h2>
    <!-- msg未在props中接收,可以被$attr接收 -->
    <p>{{$attrs.msg}}</p>
    <!-- <p>{{foo}}</p> -->
    <p>{{bar}}</p>
  </div>
</template>

<script>
export default {
  // inject: ['foo'],
  inject: { bar: { from: 'foo' } }, // 可以取别名
  methods: {
    // child1Click (e) {
    //   console.log(e)
    // }
  },
  mounted () {
    // this.$bus.$on('child1-child2', (e) => {
    //   console.log(e)
    // })
    this.$parent.$on('child1-child2', (e) => {
      console.log(e)
    })
  },
}
</script>

<style lang="scss" scoped>
</style>