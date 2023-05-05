<template>
  <div id="app">
    <h1 v-if="isMobile">Mobile Screen</h1>
    <h1 v-else-if="isTablet">Tablet Screen</h1>
    <h1 v-else-if="isDesktop">Desktop Screen</h1>
    <h2>Screen Type: <b>{{ sizeType }}</b></h2>
    <h3>Screen Size: <b>{{ windowWidth }}px</b></h3>
    <p>Adjust screen to see different messages</p>
    <p v-if="isAndroid()">Android</p>
    <p v-else-if="isIOS()">iOS</p>
    <p v-else>Another Platform</p>
  </div>
</template>

<script>
import VueBreakpointMixin from 'vue-breakpoint-mixin';

export default {
  name: 'App',
  mixins: [VueBreakpointMixin],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
