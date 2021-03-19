import {MenuItem} from 'primeng/api';

import {SRuta<%= nombreMayuscula %>Parametros} from '../interfaces/s-ruta-<%= nombreGuiones %>.parametros';

export const <%= nombreSoloMayusculas %>_MIGAS_PAN
: (componente: any, items?: MenuItem) => MenuItem = (componente: any, items?: MenuItem) => {
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
    // Si se desea tener una visualización completa de las rutas disponibles
    // se debe de llenar este arreglo con las rutas "hijas" y todas las posibilidades que existan.
    const restoDeMigas: MenuItem[] = [
        // {
        //   label: 'Nombre Siguiente Ruta Subnivel 1',
        //   disabled: true,
        //   expanded: true,
        //   items: [
        //     {
        //       label: 'Nombre Siguiente Ruta Subnivel 2',
        //       disabled: true,
        //       expanded: true,
        //       items: [
        //         {
        //           label: 'Nombre Siguiente Ruta Subnivel 3',
        //           disabled: true,
        //           expanded: true,
        //         }
        //       ]
        //     }
        //   ]
        // }
    ];
    return {
        // path que va a ir en el RoutingModule
        id: 'path-uno/:parametroRutaUno/path-dos/:parametroRutaDos/path-tres/:parametroRutaTres/path-final',
        icon: 'pi pi-pw',
        expanded: true,
        items: restoDeMigas.length > 0 ? restoDeMigas : undefined,
        // Nombre a visualizarse
        label: '<%= nombreEspacioMayuscula %>',
        // Aqui se debe de llenar el arreglo del path de esta ruta.
        // Se puede utilizar las migas de pan de la anterior ruta.
        routerLink: [
            // ...MODULO_PAPA_MIGAS_PAN(componente).routerLink, // Se llama a la miga de pan PAPA de esta ruta.
            // parametros.parametroRutaTres, // parametro de ruta del ultimo parametro de ruta, en este caso "parametroRutaTres"
            // 'path-final' // si existe un path al final se lo pone aqui
        ]
    };
}
