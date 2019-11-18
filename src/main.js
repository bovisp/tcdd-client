/* eslint-disable */

import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import 'buefy/dist/buefy.css'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://tcdd-api.test/api/'

Vue.config.productionTip = false

Vue.use(Buefy)

store.dispatch('auth/attempt', localStorage.getItem('token'))
	.then(() => {
		new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')
	})
