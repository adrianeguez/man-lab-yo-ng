import {Ruta<%= nombreMayuscula %>Component} from "./ruta-<%= nombreGuiones %>.component";

export const Ruta<%= nombreMayuscula %>Router = {
    path: RUTAS_MODULO_<%= nombreSoloMayusculasModulo %>_URL_CONSTANTES.ruta<%= nombreMayuscula %>.path,
    component: Ruta<%= nombreMayuscula %>Component,
    data: {breadcrumb: RUTAS_MODULO_<%= nombreSoloMayusculasModulo %>_URL_CONSTANTES.ruta<%= nombreMayuscula %>.breadcrumb}
};
