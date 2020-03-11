<template>
  <div class="home">
    <img src="@/assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <communication></communication> -->
    <!-- <slot-example></slot-example> -->
    <Kform-template></Kform-template>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import communication from '@/components/communication'
// import SlotExample from '@/components/slots'
import KformTemplate from '@/components/Kform'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    // communication,
    // SlotExample,
    KformTemplate
  }
  // created () {
  //   this.$store.state = {};
  // },
}
</script>