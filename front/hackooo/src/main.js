import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'
import store from './store'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
import { gsap } from "gsap";

const app = createApp(App)
app.use(gsap)
app.use(LottieAnimation)
app.use(router, axios)
app.use(store)

app.mount('#app')