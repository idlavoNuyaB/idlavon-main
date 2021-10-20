<template>
  <div class ="footer">
    <button class = "contact">
      <a class="link" href ="https://github.com/idlavoNuyaB" target="_blank" rel="noopener noreferrer">
        <i class ="fab fa-github"></i>
      </a>
    </button>
    <button class = "contact">
      <a class="link" href ="https://www.linkedin.com/in/bayu-novaldi-40aa1a1b5/" target="_blank" rel="noopener noreferrer">
        <i class ="fab fa-linkedin"></i>
      </a>
    </button>
    <button class = "contact">
      <a class="link" href ="mailto:bayun.novaldi@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class ="fas fa-envelope"></i>
      </a>
    </button>
    <button class ="top">
      <a @click="scrolling('.top','#wrapper')"><i class="fas fa-chevron-up"></i></a>
    </button>
  </div>
</template>

<script>
import Main from './../assets/js/index.js'

export default {
  name: "Contact",
  methods: {
    scrolling(from,to) {
      Main.scrolling(from,to);
    }
  }  
}
</script>