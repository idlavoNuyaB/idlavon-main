<template>
  <div class="wrapper" id="wrapper2">
    <h1 id="projectTitle"></h1>
    <Carousel/>
    <Contact/>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import Contact from './Contact.vue'

export default {
  name: 'Showcase',
  components: {
    Carousel,
    Contact
  }
}
</script>