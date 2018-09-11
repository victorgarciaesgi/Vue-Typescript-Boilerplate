import Vue from 'vue';
import VueRouter from 'vue-router';
import { routesList } from './routes';
import { MyRoute } from './routes.models';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  fallback: false,
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: routesList,
});

Router.beforeEach(async (to: MyRoute, from: MyRoute, next) => {
  next();
});

export default Router;
