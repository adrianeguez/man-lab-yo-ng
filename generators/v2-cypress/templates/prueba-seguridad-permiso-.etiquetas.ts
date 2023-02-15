import {ruta<%= nombreMayuscula %>Constante} from '../../constantes/ruta-<%= nombreGuiones %>.constante';
import {PruebaSeguridadPermiso<%= nombreMayuscula %>Interface} from './prueba-seguridad-permiso-<%= nombreGuiones %>.interface';


export const PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS: PruebaSeguridadPermiso<%= nombreMayuscula %>Interface = {
  pruebaSeguridadPermiso<%= nombreMayuscula %>: {
    path: ruta<%= nombreMayuscula %>Constante.path + '/prueba-seguridad-permiso-<%= nombreGuiones %>/prueba-seguridad-permiso-<%= nombreGuiones %>.spec.js',
    etiquetas: [
      'backend',
      'seguridad'
    ],
    describe: ruta<%= nombreMayuscula %>Constante.describeGeneral + ' - Verificar permisos en el backend',
    escenarios: {
      verificarNoTienePermiso: 'Verificar no tiene permiso en el backend en los metodos de buscar, crear, modificar vigencia y modificar registro',
      verificarTienePermiso: 'Verificar tiene permiso en el backend en los metodos de buscar, crear, modificar vigencia y modificar registro'
    }
  }
}
