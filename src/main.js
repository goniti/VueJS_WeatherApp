import Vue from 'vue'
import App from './App.vue'
import './assets/normalize.css'
Vue.config.productionTip = false
import { VueSpinners } from '@saeris/vue-spinners'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueSpinners)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
