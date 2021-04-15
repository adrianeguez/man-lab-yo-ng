import {OBJETO_PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>} from './prueba-navegacion-<%= nombreGuiones %>/prueba-navegacion-<%= nombreGuiones %>.constante';
import {OBJETO_PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>} from './prueba-seguridad-permiso-<%= nombreGuiones %>/prueba-seguridad-permiso-<%= nombreGuiones %>.constante';

export const ARREGLO_PRUEBAS_RUTA_<%= nombreSoloMayusculas %>: ((rutaPrueba: RutaCypressInterface) => ObjetoPruebaManticore)[] = [
  OBJETO_PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>,
  OBJETO_PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>
];
