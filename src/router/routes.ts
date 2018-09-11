import { MyMeta, MyRoute, MyRouteConfig, MyRouteRecord } from './routes.models';

// Liste d'identifiants des routes
export const routesNames = {
  HOME: 'home',
};

// Liste des routes
export const routesList: MyRouteConfig[] = [
  {
    path: '/',
    name: routesNames.HOME,
    component: () => import('@views/Home.vue'),
  },
  {
    path: '/*',
    meta: {
      title: 'Page non trouvée',
    },
    component: () => import('@views/error404.vue'),
  },
];
