<template>
  <div class="carousel glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <div class="card">
            <div class="img">
              <img src="../assets/img/android.png">
            </div>
            <div class="content">
              <h2>Title Project</h2>
              <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <div class="img">
              <img src="../assets/img/vue.png">
            </div>
            <div class="content">
              <h2>Title Project 2</h2>
              <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <div class="img">
              <img src="../assets/img/react.png">
            </div>
            <div class="content">
              <h2>Title Project 3</h2>
              <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="fas fa-arrow-left"></i></button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  name: 'Carousel',
  mounted() {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      gap: 0,
      autoplay: 3000,
      breakpoints: {
        1200: {
          perView: 2
        },
        768: {
          perView: 1
        }
      }
    }).mount()
  }
}
</script>

<style>
@import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
@import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
</style>