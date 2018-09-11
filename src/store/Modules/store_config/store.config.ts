import Vuex from 'vuex';
import Vue from 'vue';
import { getStoreBuilder } from 'vuex-typex';

Vue.use(Vuex);

export const storeBuilder = getStoreBuilder<any>();

export function stateBuilder<T>(state, name) {
  const b = storeBuilder.module<T>(name, state);
  return b;
}
