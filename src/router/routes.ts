import { MyMeta, MyRoute, MyRouteConfig, MyRouteRecord } from "./routes.models";
import Home from "@views/Home.vue";
import error404 from "@views/error404.vue";

// Liste d'identifiants des routes
export const routesNames = {
  HOME: "home",
};

// Liste des routes
export const routesList: MyRouteConfig[] = [
  {
    path: "/",
    name: routesNames.HOME,
    component: Home,
  },
  {
    path: "/*",
    meta: {
      title: "Page non trouvée",
    },
    component: error404,
  },
];
