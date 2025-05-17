<template>
  <div 
    class="wrapper" 
    id="wrapper"
    @click="handleInteraction"
    @touchstart="handleInteraction">
    <div class="flex-end">
      <button v-if="!isV2" class ="change-theme">
        <router-link to="/v2"><i class="fa-repeat fa-solid"></i></router-link>
      </button>
      <audio ref="audioPlayer" :src="musicSrc" loop></audio>
      <button @click.stop="togglePlay" class ="change-theme">
        <a>
          <i v-if="!isPlaying" class="fa-solid fa-play"></i>
          <i v-else class="fa-solid fa-pause"></i>
        </a>
      </button>
    </div>
    <div class="name-wrapper" :class="{ 'slide-up': isV2 && interacted }">
      <h1 id="name"></h1>
      <h4 id="title"></h4>
    </div>
    <h4 v-if="!interacted" id="start"></h4>
    <div v-if="isV2 && interacted && !activeComponent" class="list-button-start">
      <button class="button-outline-start" v-for="section in sections" :key="section.label" @click.stop="showSection(section.component)">
        <h4 id="button-start">{{ section.label }}</h4>
      </button>
    </div>

    <component :is="activeComponent" v-if="activeComponent" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { shallowRef, ref, onMounted} from 'vue'
import About from '@/components/v2/About.vue'
import Projects from '@/components/v2/Projects.vue'
import Tools from '@/components/v2/Tools.vue'
import Main from '@/assets/js/index.js'

const musicSrc = 'src/assets/music/intro.mp3'
const isPlaying = ref(false)
const audioPlayer = ref(null)

function togglePlay() {
  if (!audioPlayer.value) return

  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = 0.25
  }
  setTimeout(() => {
    audioPlayer.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      console.log('Autoplay prevented by browser')
    })
  }, 3000)
})

const route = useRoute();

const isV2 = route.path.startsWith('/v2');
const interacted = ref(false);
const activeComponent = shallowRef(null);
const sections = [
  { label: 'About', component: About },
  { label: 'Projects', component: Projects },
  { label: 'Tools', component: Tools }
];

function handleInteraction() {
  if (!interacted.value && isV2) {
    interacted.value = true;
  }
  else if (!isV2)
  {
    Main.scrolling('#wrapper','#wrapper2')
    interacted.value = false;
  }
}
function showSection(component) {
  activeComponent.value = component
}
</script>