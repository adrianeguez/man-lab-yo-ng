import {PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS} from '../pruebas/prueba-navegacion-<%= nombreGuiones %>/prueba-navegacion-<%= nombreGuiones %>.etiquetas';
import {PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS} from '../pruebas/prueba-seguridad-permiso-<%= nombreGuiones %>/prueba-seguridad-permiso-<%= nombreGuiones %>.etiquetas';

export const ETIQUETA_RUTA_GESTION_<%= nombreSoloMayusculas %>: IndiceEtiquetas = {
  ...PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS,
  ...PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS,
};
