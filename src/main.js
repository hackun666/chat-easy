import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from "./http";

Vue.prototype.$http = http;

Vue.config.productionTip = false


import weui from "weui.js";
import "weui";
Vue.prototype.$weui = weui;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
