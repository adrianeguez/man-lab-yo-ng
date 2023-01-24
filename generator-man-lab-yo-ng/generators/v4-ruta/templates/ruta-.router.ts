import {Ruta<%= nombreMayuscula %>Component} from "./ruta-<%= nombreGuiones %>.component";

export const Ruta<%= nombreMayuscula %>Router = {
    path: RUTAS_MODULO__ALGUN_MODULO__URL_CONSTANTES.ruta<%= nombreMayuscula %>.path,
    component: Ruta<%= nombreMayuscula %>Component,
    data: {breadcrumb: RUTAS_MODULO__ALGUN_MODULO__URL_CONSTANTES.ruta<%= nombreMayuscula %>.breadcrumb}
};
