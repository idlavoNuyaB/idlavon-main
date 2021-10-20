<template>
  <div class="wrapper" id="wrapper2">
    <h1 id="projectTitle" data-text="Project Showcase">Project Showcase</h1>
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