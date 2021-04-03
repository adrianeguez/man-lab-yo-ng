import {MigaPanRuta} from '@manticore-labs/ng-2021';
import {NOMBRE_SCOPE_<%= nombreSoloMayusculas %>} from '../transloco/loader-<%= nombreGuiones %>';
import {SRuta<%= nombreMayuscula %>Parametros} from '../interfaces/s-ruta-<%= nombreGuiones %>.parametros';

export const <%= nombreSoloMayusculas %>_MIGAS_PAN
  : (componente: any) => MigaPanRuta = (componente: any) => {
  // Inicializar todos los parametros de ruta con '0'
  let parametros: SRuta<%= nombreMayuscula %>Parametros = {
    // parametroRutaUno: '0',
    // parametroRutaDos: '0',
    // parametroRutaTres: '0',
  };
  let ruta: any = {};
  if (componente) {
    if (componente.nombreServicio) {
      ruta = componente[componente.nombreServicio] as any;
      parametros = ruta.parametros as SRuta<%= nombreMayuscula %>Parametros;
    }
  }
  return {
    // path que va a ir en el RoutingModule
    id: 'path-uno/:parametroRutaUno/path-dos/:parametroRutaDos/path-tres/:parametroRutaTres/path-final',
    // Nombre a visualizarse
    label: '<%= nombreEspacioMayuscula %>',
    // Aqui se debe de llenar el arreglo del path de esta ruta.
    // Se puede utilizar las migas de pan de la anterior ruta.
    routerLink: [
      // ...MODULO_PAPA_MIGAS_PAN(componente).routerLink, // Se llama a la miga de pan PAPA de esta ruta.
      // parametros.parametroRutaTres as string, // parametro de ruta del ultimo parametro de ruta, en este caso "parametroRutaTres"
      // 'path-final' // si existe un path al final se lo pone aqui
    ],
    scopeTransloco: NOMBRE_SCOPE_<%= nombreSoloMayusculas %>,  // si no se quiere internacionalizar poner un string vacio Ej: ''
  };
}
