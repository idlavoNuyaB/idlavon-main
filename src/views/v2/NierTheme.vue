<template>
  <Introduction/>
</template>
  
  <script>
  import Introduction from '@/components/v1//Introduction.vue'
  import Main from '@/assets/js/index.js'
  
  export default {
    name: 'NierTheme',
    components: {
      Introduction,
    },
    mounted() {
      this.$nextTick(() => {
        Main.generate(true)
      })
    }}
  </script>
  <style>
  @import '../../assets/css/index.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css';
  </style>
  