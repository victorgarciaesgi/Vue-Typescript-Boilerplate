import './shims/polyfills/function.name.polyfill';
import 'es6-shim';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vue2Filters from 'vue2-filters';
import { Store } from 'vuex';
import App from './App.vue';
import MyFilters from '@utils';
import { sync } from 'vuex-router-sync';
import { Router } from '@router';
import './styles/root.scss';
import { storeBuilder, DebugMode } from '@store';

// Plugins declaration
Vue.use(Vuelidate);
Vue.use(Vue2Filters);
Vue.use(MyFilters);

// Store init
const store: Store<any> = storeBuilder.vuexStore({
  strict: DebugMode,
});

// Sync VueRouter and VuexStore
sync(store, Router, { moduleName: 'RouterModule' });

Vue.config.keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27,
};

new Vue({
  router: Router,
  store: store,
  render: h => h(App),
}).$mount('#app');
