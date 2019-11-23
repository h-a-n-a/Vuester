import Vue from 'vue'
import App from '@/App.vue'
import Plugin from 'utils/plugin'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import * as filters from './filters/index'
import './mixins/index'
import './styles/index.scss'
import './mock/index'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI)
Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
