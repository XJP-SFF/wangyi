import Vue from 'vue'
import App from './App.vue'
import router from './router'

import * as API from './api'

Vue.config.productionTip = false;
//事件总线对象: 将所有发送请求的额方法都放在Vue的原型对象上
Vue.prototype.$API = API;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
