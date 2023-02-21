import {Injectable} from '@angular/core';
import {SRuta<%= nombreMayuscula %>Module} from './s-ruta-<%= nombreGuiones %>.module';
import {SRuta<%= nombreMayuscula %>Parametros} from '../interfaces/s-ruta-<%= nombreGuiones %>.parametros';
import {<%= nombreMayuscula %>BusquedaDto} from '../../../dto/<%= nombreGuiones %>-busqueda.dto';
import {<%= nombreMayuscula %>Interface} from '../../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>Service} from '../../../servicios/<%= nombreGuiones %>/<%= nombreGuiones %>.service';
import {MatDialog} from '@angular/material/dialog';
import {<%= nombreSoloMayusculas %>_FORMULARIO} from '../../../formularios/<%= nombreGuiones %>/<%= nombreGuiones %>-formulario';
import {GRUPOS_FORMULARIO_BUSQUEDA} from './grupos-formulario-busqueda';
import {GRUPOS_FORMULARIO_CREAR_EDITAR} from './grupos-formulario-crear-editar';
import {DomSanitizer} from '@angular/platform-browser';
<% if(!internacionalizar) { %>
const nombre = '<%= nombreEspacioMayuscula %>';
<% } %>

@Injectable({
  providedIn: SRuta<%= nombreMayuscula %>Module
})
export class SRuta<%= nombreMayuscula %>Service extends RutaComun<SRuta<%= nombreMayuscula %>Parametros,
  <%= nombreMayuscula %>BusquedaDto,
  <%= nombreMayuscula %>Service,
  <%= nombreMayuscula %>Interface> {
  constructor(
    public readonly _<%= nombreCamel %>Service: <%= nombreMayuscula %>Service,
    public readonly _cargandoService: CargandoService,
    public readonly _notificacionService: NotificacionService,
    public matDialog: MatDialog,
    public readonly _menuGeneralService: MenuGeneralService,
    private readonly _archivoPrincipalService: ArchivoPrincipalService,
    public readonly _domSanitizer: DomSanitizer,
  ) {
    super(
      _<%= nombreCamel %>Service,
      _cargandoService,
      _notificacionService,
      matDialog,
      <%= nombreSoloMayusculas %>_FORMULARIO,

        <% if(internacionalizar) { %>

        'formularios.crearEditar.formularioCrearEditar.tituloCrear',
        'formularios.crearEditar.formularioCrearEditar.descripcionCrear',
        'formularios.crearEditar.formularioCrearEditar.tituloActualizar',
        'formularios.crearEditar.formularioCrearEditar.descripcionActualizar',

        <% } else{ %>

        'Creando ' + nombre,
        'Llene el formulario con los datos de ' + nombre,
        'Actualizando ' + nombre,
        'Llene el formulario con los datos de ' + nombre,

        <% } %>

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
        ModalCrearEditarComunComponent,
        TAKE,
        REGISTROS_POR_PAGINA,
        ActivoInactivo as {Activo:any, Inactivo:any},
        _menuGeneralService,
        _archivoPrincipalService,
        _domSanitizer,
    );
    // Si se quiere que el stepper sea horizontal
    // this.vertical = false;

    // Path de propiedades para poder agrupar en la tabla

    // Ej1: {nombre:'Adrian', apellido:'Eguez', clase:'Clase uno'}
    // this.nombreAtributoAAgrupar = ['clase'];
    // En este caso solo se accede a -> registro.clase

    // Ej2: {nombre:'Adrian', apellido:'Eguez', campoRelacion:{campoNombre:'Clase'}}
    // this.nombreAtributoAAgrupar = ['campoRelacion', 'campoNombre'];
    // En este caso solo se accede a -> registro.campoRelacion.campoNombre
  }
}