import {Injectable} from '@angular/core';
import {SRutaServicioLogisticoModule} from './s-ruta-servicio-logistico.module';
import {SRutaServicioLogisticoParametros} from '../interfaces/s-ruta-servicio-logistico.parametros';
import {ServicioLogisticoBusquedaDto} from '../../../dto/servicio-logistico-busqueda.dto';
import {ServicioLogisticoInterface} from '../../../interfaces/servicio-logistico.interface';
import {ServicioLogisticoService} from '../../../servicios/servicio-logistico/servicio-logistico.service';
import {MatDialog} from '@angular/material/dialog';
import {FORMULARIO_SERVICIO_LOGISTICO} from '../../../formularios/servicio-logistico/formulario-servicio-logistico';
import {GRUPOS_FORMULARIO_BUSQUEDA} from './grupos-formulario-busqueda';
import {GRUPOS_FORMULARIO_CREAR_EDITAR} from './grupos-formulario-crear-editar';

const nombre = 'Servicio Logistico';

@Injectable({
  providedIn: SRutaServicioLogisticoModule
})
export class SRutaServicioLogisticoService extends RutaComun<SRutaServicioLogisticoParametros,
  ServicioLogisticoBusquedaDto,
  ServicioLogisticoService,
  ServicioLogisticoInterface> {
  constructor(
    public readonly _servicioLogisticoService: ServicioLogisticoService,
    public readonly _cargandoService: CargandoService,
    public readonly _notificacionService: NotificacionService,
    public matDialog: MatDialog,
  ) {
    super(
      _servicioLogisticoService,
      _cargandoService,
      _notificacionService,
      matDialog,
      FORMULARIO_SERVICIO_LOGISTICO,
    'Creando ' + nombre,
      'Llene el formulario con los datos de '+ nombre,
      'Actualizando '+ nombre,
      'Llene el formulario con los datos de '+ nombre,
      GRUPOS_FORMULARIO_BUSQUEDA,
      GRUPOS_FORMULARIO_CREAR_EDITAR,
      ()=> {
        return [
          // {
          //   nombreCampo: 'nombreCampo', // nombre del campo a mostrarse en la tabla
          //   nombreAMostrar: (valorCampo: any, nombreCampo: string) => {
          //     return 'Nombre Campò'; // Nombre a mostrarse del campo
          //   },
          //   valorAMostrar: (valorCampo: any, nombreCampo: string) => {
          //     return  valorCampo ; // Valor a mostrarse del campo, se pueden hacer transformaciones
          //   },
          // },
          // {
          //   nombreCampo: 'campoOpciones',  // nombre del campo a mostrarse en la tabla
          //   nombreAMostrar: (valorCampo: any, nombreCampo: string) => {
          //     return 'Opciones'; // Nombre a mostrarse del campo
          //   },
          //   valorAMostrar: (valorCampo: ActivoInactivo, nombreCampo: string) => {
          //     switch (valorCampo) { // se puede dar diferentes nombres dependiendo del valor del campo
          //       case 'opcionUno':
          //         return 'Uno';
          //       case 'opcionDos':
          //         return 'Dos';
          //     }
          //   },
          // },
        ]
      },
    );
  }
}
