import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Api from './api'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.config.productionTip = false

Vue.mixin(Api)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')