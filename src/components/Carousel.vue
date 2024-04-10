<template>
  <div class="carousel glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <div class="card">
            <a href="https://github.com/Rakamin-Bootcamp-Kelompok-1/alodokter-rakamin-android-kelompok1" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <div class="img">
                <img src="../assets/img/medikuy.png" alt="Error">
              </div>
              <div class="content">
                <h2>Medikuy</h2>
                <p class="content-description">Create MVVM monolith app to complete Android Developer bootcamp organized by Rakamin and Alodokter. 
                  This app usage for read health article and make appointment with doctor</p>
              </div>
            </a>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <a href="https://github.com/idlavoNuyaB/MovieDB" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <div class="img">
                <img src="../assets/img/movie-db.png" alt="Error">
              </div>
              <div class="content">
                <h2>MovieDB</h2>
                <p class="content-description">Create MVVM modular app to graduate from Dicoding MADE 
                  (Menjadi Android Developer Expert) class. This app usage for see reviewed movie or TV series and save favorite reviewed movie or TV series</p>
              </div>
            </a>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <a href="https://github.com/idlavoNuyaB/idlavon-main" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <div class="img">
                <img src="../assets/img/main-website.png" alt="Error">
              </div>
              <div class="content">
                <h2>Website Portofolio</h2>
                <p class="content-description">Create this website using Vue.js and Glide.js. Then revamp this website using Vite.js</p>
              </div>
            </a>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <a href="https://play.google.com/store/apps/details?id=iSellerCommerce.Android" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <div class="img">
                <img src="../assets/img/lakoo.png" alt="Error">
              </div>
              <div class="content">
                <h2>Lakoo</h2>
                <p class="content-description">Develop & maintain this apps. This apps, which is used for selling goods offline and online, is usually used for micro, small and medium businesses </p>
              </div>
            </a>
          </div>
        </li>
        <li class="glide__slide">
          <div class="card">
            <a style="text-decoration:none;">
              <div class="img">
                <img src="../assets/img/iresto.svg" alt="Error">
              </div>
              <div class="content">
                <h2>iResto</h2>
                <p class="content-description">Develop & maintain this apps. This apps, which is used for selling goods offline and online, is used for enterprise businesses. Coming soon this year</p>
              </div>
            </a>
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
      startAt: 0, 
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      gap: 0,
      hoverpause: true,
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