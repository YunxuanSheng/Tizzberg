import Vue from 'vue'
import 'mutationobserver-shim'
import './Utils/fliter'
import Raphael from 'raphael/raphael'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import './registerServiceWorker'
import i18n from './i18n'

global.Raphael = Raphael

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
