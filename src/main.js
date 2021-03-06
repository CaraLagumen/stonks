import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueResource);
Vue.http.options.root = "https://stonks-trader.firebaseio.com/";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
