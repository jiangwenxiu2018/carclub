// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/normalize.css'
import './assets/styles/animate.css'
import 'amfe-flexible/index'
import Cpts from '@/components/index'
import VueTouch from 'vue-touch'



Vue.config.productionTip = false
Vue.use(VueTouch)
Vue.use(Cpts)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
