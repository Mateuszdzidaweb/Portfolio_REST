import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import VueObserveVisibility from 'vue-observe-visibility'
import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



AOS.init();

Vue.use(VueObserveVisibility)
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
