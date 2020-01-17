<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <communication></communication> -->
    <!-- <slot-template></slot-template> -->
    <Kform-template></Kform-template>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import communication from './components/communication'
// import slotTemplate from './components/slots'
import KformTemplate from './components/Kform'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // communication,
    KformTemplate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
