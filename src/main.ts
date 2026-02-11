import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ScrollTrigger, initializeAnimations } from '@/composables/useGsap'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize animations after app and DOM are fully ready
router.isReady().then(() => {
  initializeAnimations()
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 800)
})