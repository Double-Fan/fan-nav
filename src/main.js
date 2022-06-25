import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/mock/mockServer'
import * as API from '@/api/base'

Vue.config.productionTip = false

Vue.prototype.$http = API

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
