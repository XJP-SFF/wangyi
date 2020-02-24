import Vue from 'vue'
// import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store'
// import './VeeValidate'
import waterfall from "vue-waterfall2"
Vue.use(waterfall);

import * as API from './api'

//Uncaught (in promise) NavigationDuplicated 報錯問題
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.config.productionTip = false;
//事件总线对象: 将所有发送请求的额方法都放在Vue的原型对象上
Vue.prototype.$API = API;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
