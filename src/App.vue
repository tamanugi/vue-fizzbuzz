<template>
  <div id="app">
    <fizz-buzz></fizz-buzz>
    <buttons></buttons>
  </div>
</template>

<script>
import FizzBuzz from './components/FizzBuzz'
import Buttons from './components/Buttons'

export default {
  name: 'app',
  components: {
    FizzBuzz,
    Buttons
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
