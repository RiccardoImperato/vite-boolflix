import { createApp } from 'vue'
// Main style file
import '../src/assets/scss/style.scss'
import App from './App.vue'
// Font Montserrat
import "@fontsource/montserrat";
// Font awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, emptyStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
