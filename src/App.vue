<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width='10%'>
    <app-counter/>
  </div>
</template>

<script>
import Counter from './components/Counter'
export default {
  name: 'App',
  components: {
    appCounter: Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
