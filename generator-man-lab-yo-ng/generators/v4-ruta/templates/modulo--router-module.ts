import {RouterModule} from "@angular/router";
import {RUTAS_MODULO_NEST_URL_CONSTANTES} from "./rutas-url.constantes";
import {Ruta<%= nombreMayuscula %>Router} from "../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.router";


export const MODULO_NEST_ROUTER_MODULE =
    RouterModule.forChild([
        Ruta<%= nombreMayuscula %>Router,
        {
            path: '',
            redirectTo: RUTAS_MODULO_NEST_URL_CONSTANTES.ruta<%= nombreMayuscula %>.path,
            pathMatch: 'full'
        }
    ]);
