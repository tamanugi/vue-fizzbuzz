
<template>
  <div class="buttons">
    <button @click="increment" >+</button>
    <button @click="decrement" >-</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>