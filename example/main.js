import Vue from 'vue'
import App from './App.vue'
import VueYodify from '../source'

Vue.config.productionTip = false

Vue.use(VueYodify)

new Vue({
	render: h => h(App),
}).$mount('#app')
