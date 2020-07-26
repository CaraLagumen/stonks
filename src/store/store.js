import Vue from "vue";
import Vuex from "vuex";

import stonks from "./modules/stonks";
import portfolio from "./modules/portfolio";
import * as actions from "./actions";

Vue.use(Vuex);
Vue.filter("currency", (value) => "$" + value.toLocaleString());

export default new Vuex.Store({
  actions,
  modules: {
    stonks,
    portfolio,
  },
});
