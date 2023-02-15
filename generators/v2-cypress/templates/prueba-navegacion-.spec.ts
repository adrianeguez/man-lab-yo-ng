import {OBJETO_PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>} from './prueba-navegacion-<%= nombreGuiones %>.constante';

const ruta: RutaCypressInterface = {};

verificarSiEjecutaPorEtiquetas(
  OBJETO_PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>(ruta)
);
