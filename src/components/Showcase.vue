<template>
  <div class="wrapper" id="wrapper2">
    <h1 id="projectTitle">Project Showcase</h1>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'Showcase',
  components: {
    Carousel
  }
}
</script>