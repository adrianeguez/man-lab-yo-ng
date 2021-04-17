import {PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS} from './prueba-seguridad-permiso-<%= nombreGuiones %>.etiquetas';
import {pruebaSeguridadPermiso<%= nombreMayuscula %>Funcion} from './prueba-seguridad-permiso-<%= nombreGuiones %>.funcion';

declare var cy: any;

export const OBJETO_PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>: (rutaPrueba: RutaCypressInterface) => ObjetoPruebaManticore
  = (rutaPrueba: RutaCypressInterface) => {
  return {
    ruta: rutaPrueba,
    etiquetasRuta: PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS.pruebaSeguridadPermiso<%= nombreMayuscula %>.etiquetas,
    funcionRuta: pruebaSeguridadPermiso<%= nombreMayuscula %>Funcion,
    cy
  };
};
