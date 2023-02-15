import {PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS} from './prueba-navegacion-<%= nombreGuiones %>.etiquetas';
import {pruebaNavegacion<%= nombreMayuscula %>Funcion} from './prueba-navegacion-<%= nombreGuiones %>.funcion';

declare var cy: any;

export const OBJETO_PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>: (rutaPrueba: RutaCypressInterface) => ObjetoPruebaManticore
    = (rutaPrueba: RutaCypressInterface) => {
    return {
        ruta: rutaPrueba,
        etiquetasRuta: PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS.pruebaNavegacion<%= nombreMayuscula %>.etiquetas,
        funcionRuta: pruebaNavegacion<%= nombreMayuscula %>Funcion,
        cy
    };
};
