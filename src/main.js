import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';



Vue.config.productionTip = false

//默认配置iView
Vue.use(iView);

new Vue({
  render: h => h(App),
}).$mount('#app')
