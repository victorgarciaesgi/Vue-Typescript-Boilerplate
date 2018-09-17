import { Router } from "@router";
import { DebugMode, storeBuilder } from "@store";
import MyFilters from "@utils";
import "es6-shim";
import Vue from "vue";
import Vue2Filters from "vue2-filters";
import Vuelidate from "vuelidate";
import { Store } from "vuex";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import "./shims/polyfills/function.name.polyfill";
import "./styles/root.scss";

// Plugins declaration
Vue.use(Vuelidate);
Vue.use(Vue2Filters);
Vue.use(MyFilters);

// Store init
const store: Store<any> = storeBuilder.vuexStore({
  strict: DebugMode,
});

// Sync VueRouter and VuexStore
sync(store, Router, { moduleName: "RouterModule" });

Vue.config.keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27,
};

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount("#app");
