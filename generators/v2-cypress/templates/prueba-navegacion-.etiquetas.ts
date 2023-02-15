import {ruta<%= nombreMayuscula %>Constante} from '../../constantes/ruta-<%= nombreGuiones %>.constante';
import {PruebaNavegacion<%= nombreMayuscula %>Interface} from './prueba-navegacion-<%= nombreGuiones %>.interface';


export const PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS: PruebaNavegacion<%= nombreMayuscula %>Interface = {
  pruebaNavegacion<%= nombreMayuscula %>: {
    path: ruta<%= nombreMayuscula %>Constante.path + '/prueba-navegacion-<%= nombreGuiones %>/prueba-navegacion-<%= nombreGuiones %>.spec.js',
    etiquetas: [
      'frontend',
      'navegacion'
    ],
    describe: ruta<%= nombreMayuscula %>Constante.describeGeneral + ' - Casos de prueba de <%= nombreEspacioMayuscula %>',
    escenarios: {
      navegacion: 'Probar permisos, Filtros y Búsqueda, Crear, Editar, Habilitar, Deshabilitar',
      navegacionFalla: 'No tiene permisos para ir a gestión de <%= nombreEspacioMayuscula %>',
    }
  }
}
