<template>
  <Introduction/>
  <Showcase/>
</template>

<script>
import Introduction from './components/Introduction.vue'
import Main from './assets/js/index.js'
import Showcase from './components/Showcase.vue'

export default {
  name: 'App',
  components: {
    Introduction,
    Showcase
  },
  mounted() {
    this.$nextTick(() => {
      Main.generate()
      Main.scrolling()
    })
  }}
</script>

<style>
@import './assets/css/index.css'
</style>
