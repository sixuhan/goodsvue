import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router';
import router from './router'


Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
