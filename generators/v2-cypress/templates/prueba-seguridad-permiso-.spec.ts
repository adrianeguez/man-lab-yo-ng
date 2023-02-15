import {OBJETO_PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>} from './prueba-seguridad-permiso-<%= nombreGuiones %>.constante';

const ruta: RutaCypressInterface = {};

verificarSiEjecutaPorEtiquetas(
  OBJETO_PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>(ruta)
);
