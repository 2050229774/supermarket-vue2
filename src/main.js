import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const Bus = new Vue()

Vue.config.productionTip = false

new Vue({
  data:{
　　　　Bus
  },
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
