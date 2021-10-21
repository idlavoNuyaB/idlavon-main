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
    Showcase,
  },
  mounted() {
    this.$nextTick(() => {
      Main.generate()
      Main.scrolling('#wrapper','#wrapper2')
      Main.generateSecondPage()
    })
  }}
</script>

<style>
@import './assets/css/index.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css';
</style>
