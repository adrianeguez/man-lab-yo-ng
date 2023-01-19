import {Observable, of} from "rxjs";
import {BreadcrumbValue, RUTAS_URL_CONSTANTES, URL_INICIAL} from "../../../imports/rutas-url.constantes";
import {RouterUrl} from "../../../interfaces/router-url";

export const URL_INICIAL_MODULO_NEST = ['<%= nombreGuiones %>'];
// types de parametros de ruta

export type RutaConParametros = (...params: any) => string[];

export enum RUTAS_MODULO_NEST_URL_ENUM {
    RUTA_<%= nombreSoloMayusculas %> = 'ruta<%= nombreMayuscula %>',
}

export type RutaModuloNestConstanteType = {
    [key in RUTAS_<%= nombreSoloMayusculas %>_URL_ENUM]: RouterUrl
}
export const RUTAS_<%= nombreSoloMayusculas %>_URL_CONSTANTES: RutaModuloNestConstanteType = {
    [RUTAS_<%= nombreSoloMayusculas %>_URL_ENUM.RUTA_<%= nombreSoloMayusculas %>]: {
        path: '<%= nombreGuiones %>',
        label: '<%= nombreGuiones %>.<%= nombreCamel %>.migaPan',
        ruta: [...URL_INICIAL, 'home', ...URL_INICIAL_<%= nombreSoloMayusculas %>, '<%= nombreGuiones %>'],
        breadcrumb: (data: any): Observable<BreadcrumbValue> => of(
            [
                {
                    label: RUTAS_URL_CONSTANTES.rutaHome.label,
                    link: RUTAS_URL_CONSTANTES.rutaHome.ruta as string[]
                },
                {
                    label: RUTAS_URL_CONSTANTES.moduloNest.label,
                    link: RUTAS_URL_CONSTANTES.moduloNest.ruta as string[]
                },
                {
                    label: RUTAS_<%= nombreSoloMayusculas %>_URL_CONSTANTES.ruta<%= nombreMayuscula %>.label,
                    link: RUTAS_<%= nombreSoloMayusculas %>_URL_CONSTANTES.ruta<%= nombreMayuscula %>.ruta as string[],
                }
            ]
        )
    },
};

