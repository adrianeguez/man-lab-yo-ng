import {RUTAS_MODULO_NEST_URL_CONSTANTES} from "../../imports/rutas-url.constantes";
import {Ruta<%= nombreMayuscula %>Component} from "./ruta-<%= nombreGuiones %>.component";

export const Ruta<%= nombreMayuscula %>Router = {
    path: RUTAS_MODULO_NEST_URL_CONSTANTES.ruta<%= nombreMayuscula %>.path,
    component: Ruta<%= nombreMayuscula %>Component,
    data: {breadcrumb: RUTAS_MODULO_NEST_URL_CONSTANTES.ruta<%= nombreMayuscula %>.breadcrumb}
};
