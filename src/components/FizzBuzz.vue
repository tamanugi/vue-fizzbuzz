<template>
  <div>
    <div v-if="fizzbuzz">{{ fizzbuzz }}</div>
    <div v-else>{{ $store.state.count }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'fizzbuzz'
  ])
}
</script>
