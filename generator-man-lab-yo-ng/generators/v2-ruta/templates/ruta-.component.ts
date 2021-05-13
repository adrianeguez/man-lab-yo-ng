import {Component, OnInit} from '@angular/core';
import {SRuta<%= nombreMayuscula %>Service} from './s-ruta-<%= nombreGuiones %>/s-ruta-<%= nombreGuiones %>.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SRuta<%= nombreMayuscula %>Parametros} from './interfaces/s-ruta-<%= nombreGuiones %>.parametros';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {Crear<%= nombreMayuscula %>} from './clases/crear-<%= nombreGuiones %>';
import {Actualizar<%= nombreMayuscula %>} from './clases/actualizar-<%= nombreGuiones %>';
import {<%= nombreSoloMayusculas%>_FORMULARIO_BUSQUEDA} from './busqueda-filtros/busqueda/<%= nombreGuiones %>-formulario-busqueda';
import {MenuItem} from 'primeng/api';
import {<%= nombreSoloMayusculas%>_MIGAS_PAN} from './migas-pan/<%= nombreGuiones %>-migas-pan';
import {
  ArregloFiltroBusquedaFirestore,
  EventoCambioAutocomplete,
  EventoCambioFormulario, ObjetoBusquedaADto, ObjetoInternacionalizacionFormulario,
  SetearObjeto,
  TodosCamposValidados
} from '@manticore-labs/ng-2021';

@Component({
  selector: 'app-ruta-<%= nombreGuiones %>',
  templateUrl: './ruta-<%= nombreGuiones %>.component.html',
  styleUrls: ['./ruta-<%= nombreGuiones %>.component.scss']
})
export class Ruta<%= nombreMayuscula %>Component implements OnInit {


  opciones = [
    <% if(internacionalizar) { %>
    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     const parametros: SRutaArchivoSecundarioParametros = {
    //       nombreIdentificador: '<%= nombreGuiones %>',
    //       tipo: TipoArchivo.Archivo,
    //       idReferencial: id,
    //       tituloVista: this.translocoService.translate(this.objetoInternacionalizacion.nombreScopeTransloco + '.nombreRuta'),
    //     };
    //     return [
    //       ...ARCHIVO_SECUNDARIO_MIGAS_PAN(this, parametros).routerLink,
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'opcionesIrRuta.gestionarArchivos',
    //   rutaImagen: '/../comun/archivo.svg'
    // },
    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     const parametros: SRutaArchivoSecundarioParametros = {
    //       nombreIdentificador: '<%= nombreGuiones %>',
    //       tipo: TipoArchivo.Imagen,
    //       idReferencial: id,
    //       tituloVista: this.translocoService.translate(this.objetoInternacionalizacion.nombreScopeTransloco + '.nombreRuta'),
    //     };
    //     return [
    //       ...ARCHIVO_SECUNDARIO_MIGAS_PAN(this, parametros).routerLink,
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'opcionesIrRuta.gestionarImagenes',
    //   rutaImagen: '/../comun/imagen.svg'
    // },
    <% } else{ %>

    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     const parametros: SRutaArchivoSecundarioParametros = {
    //       nombreIdentificador: '<%= nombreGuiones %>',
    //       tipo: TipoArchivo.Archivo,
    //       idReferencial: id,
    //       tituloVista: '<%= nombreMayuscula %>',
    //     };
    //     return [
    //       ...ARCHIVO_SECUNDARIO_MIGAS_PAN(this, parametros).routerLink,
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'opcionesIrRuta.gestionarArchivos',
    //   rutaImagen: '/../comun/archivo.svg'
    // },
    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     const parametros: SRutaArchivoSecundarioParametros = {
    //       nombreIdentificador: '<%= nombreGuiones %>',
    //       tipo: TipoArchivo.Imagen,
    //       idReferencial: id,
    //       tituloVista: '<%= nombreMayuscula %>',
    //     };
    //     return [
    //       ...ARCHIVO_SECUNDARIO_MIGAS_PAN(this, parametros).routerLink,
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'opcionesIrRuta.gestionarImagenes',
    //   rutaImagen: '/../comun/imagen.svg'
    // },

    <% } %>


    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     return [
    //     ...<%= nombreSoloMayusculas %>_MIGAS_PAN(this).routerLink, // RUTA ACTUAL
    //     id,  // ids necesarios
    //     'termina-ruta' // opcional path final
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'Otra acción de ...',
    //   rutaImagen: '/<%= nombreGuiones %>/imagen-principal.svg'
    // }
  ];

  camposFormularioBusqueda = <%= nombreSoloMayusculas%>_FORMULARIO_BUSQUEDA;
  valorBusqueda = '';
  formularioBusqueda?: TodosCamposValidados;
  botonAceptarModalDisabled = true;

  formularioCrearEditar?: TodosCamposValidados;
  sistemaLogisticoSeleccionado?: <%= nombreMayuscula %>Interface;

  stepperActualBusqueda = 0;

  nombreServicio = '_sRuta<%= nombreMayuscula %>Service';

  // Usar cuando se necesite ocultar campos que dependan de otros:

  // ocultarFormulario = false;
  // camposRequeridos = {
  //   nombreCampoDependiendeUno: false,
  //   nombreCampoDependiendeDos: false,
  // };

  // Si existen campos AUTOGENERADOS en estas tablase se necesitarian estas variables

  // botonAceptarModalAutogeneradoDisabled = false;
  //
  // camposAutogeneradosAGuardar: CampoFormulario[] = [];
  //
  // arregloAutogenerado: { arregloDatos: CampoAutogenerado[]; grupoFormulario: GrupoFormulario[] } = {
  //   arregloDatos: [],
  //   grupoFormulario: [],
  // };

  migasPan: MigaDePanInterface[] = [];

  rutaImagenAssets = 'assets/img/' + NOMBRE_MODULO_ASSETS

  rutaImagenPrincipal = this.rutaImagenAssets + '/<%= nombreGuiones %>/imagen-principal.svg'

  <% if(internacionalizar) { %>
  objetoInternacionalizacion: ObjetoInternacionalizacionFormulario = {
        botonAtras: 'botonAtras',
        botonLimpiarFormulario: 'botonLimpiarFormulario',
        botonSiguiente: 'botonSiguiente',
        nombreScopeTransloco: NOMBRE_SCOPE_<%= nombreSoloMayusculas %>,
      }
  <% } else{ %>

  <% } %>


  constructor(
    public readonly _sRuta<%= nombreMayuscula %>Service: SRuta<%= nombreMayuscula %>Service,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router,
  <% if(internacionalizar) { %>
    public readonly translocoService: TranslocoService,
  <% } else{ %>

  <% } %>
  ) {
  }



  columnasPrimeTable = [
    // {
    //   field: 'nombreCampo',
    //   header: 'Nombre a mostrarse',
    //   posicion: 'text-center',
    //   tamanio: '60%', // tamaño en porcentaje de la columna
    //   fnMostrar: (valor: string) => {
    //   return valor;
    // },
    //     fnMostrar: (valor:TipoValor)=>{
    //       switch (valor) {
    //         case TipoValor.ValorUno:
    //           return 'Valor de uno';
    //         case TipoValor.ValorDos:
    //           return 'Valor de dos';
    //         default:
    //           return valor;
    //       }
    //     },
    // },

    // {
    //   field: '',
    //   header: 'sis_IM',
    //   posicion: 'text-center',
    //   tamanio: '15%', // tamaño en porcentaje de la columna
    //   fnMostrarImagen: (entrenador: <%= nombreMayuscula %>Interface) => {
    //     if (entrenador.sis_IM) {
    //       return this._sRuta<%= nombreMayuscula %>Service._domSanitizer.bypassSecurityTrustResourceUrl(`data:${<%= nombreCamel %>.sis_IM.mimetype};base64, ${<%= nombreCamel %>.sis_IM.buffer}`);
    //     } else {
    //       return '';
    //     }
    //   }
    // },
    {
      field: '<%= nombreHabilitado %>',
    <% if(internacionalizar) { %>
    header: 'habilitado',
    <% } else{ %>
    header: 'Habilitado',
    <% } %>
  posicion: 'text-left',
      tamanio: '20%'
},
  {
    field: '<%= id %>',
    <% if(internacionalizar) { %>
    header: 'acciones',
    <% } else{ %>
    header: 'Acciones',
    <% } %>
    posicion: 'text-right',
        tamanio: '20%'
  }
];

  ngOnInit(): void {
    this._obtenerParametros();
  }

  private _obtenerParametros(): void {
    this._sRuta<%= nombreMayuscula %>Service
      .obtenerYGuardarParametrosRuta(this._activatedRoute)
      .subscribe(
        (parametros: SRuta<%= nombreMayuscula %>Parametros) => {
          const busqueda = this._sRuta<%= nombreMayuscula %>Service
            .setearParametrosDeBusqueda(parametros, <%= nombreMayuscula %>BusquedaDto);
            <% if(!esFirebase){ %>
            // if (parametros.nombreCampoRelacion && busqueda) {
            //   busqueda.nombreCampoRelacion = +parametros.nombreCampoRelacion;
            // }
            <% } %>
            <% if(esFirebase){ %>
              // Setear los valores de las colecciones superiores
              // Ej:
              // if(parametros.nombreParametroPrimerNivel && parametros.nombreParametroSegundoNivel){
              //   this._sRuta<%= nombreMayuscula %>Service.arregloIdColeccionesSuperiores = [
              //     parametros.nombreParametroPrimerNivel,
              //     parametros.nombreParametroSegundoNivel,
              //   ];
              // }
            <% } %>
          this._sRuta<%= nombreMayuscula %>Service
            .busquedaDto = busqueda;
          this._sRuta<%= nombreMayuscula %>Service
              .construirMigasPan(
                  this,
                  [
                    // MODULO_MIGAS_PAN,
                    <%= nombreSoloMayusculas%>_MIGAS_PAN,
                  ],
              );
          this.buscarConFiltros();
        }
      );
  }

  buscarConFiltros(): void {
    <% if(!esFirebase){ %>
    if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
      this._sRuta<%= nombreMayuscula %>Service.busquedaDto.skip = 0;
      this._sRuta<%= nombreMayuscula %>Service.first = 0;
    }
    this.buscarSuscrito();
    <% } %>
    <% if(esFirebase){ %>
    if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
      this._sRuta<%= nombreMayuscula %>Service.first = 0;
      // Setear whereFirestore al valor inicial
      this._sRuta<%= nombreMayuscula %>Service.whereFirestore = [];
      this._sRuta<%= nombreMayuscula %>Service.lastDocumentFirestore = undefined;
      this._sRuta<%= nombreMayuscula %>Service.yaNoHayMasRegistros = false;
      // Dependiendo de los filtros de búsqueda setear las búsquedas
      // const arregloFiltroBusquedaFirestore: ArregloFiltroBusquedaFirestore[] = [
      //   {
      //     fieldPath: 'nombrePropiedadBusquedaDto',
      //     opStr: '=='
      //   }
      // ];
      const arregloFiltroBusquedaFirestore: ArregloFiltroBusquedaFirestore[] = [
        {
          fieldPath: '__busquedaGlobal',
          opStr: 'array-contains'
        },
        {
          fieldPath: 'sisHabilitado',
          opStr: '=='
        },
        // Anadir todos las busquedas que falten
        // {
        //   fieldPath: 'campo', // nombre de campo Firestore
        //   opStr: '==' // cualquier opStr de Firestore
        // },
      ];
      this._sRuta<%= nombreMayuscula %>Service.establecerWhereFirestore(arregloFiltroBusquedaFirestore);
    }
    this.buscarSuscrito();
    <% } %>
  }

  buscarSuscrito(){
    this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
    this._sRuta<%= nombreMayuscula %>Service
        .buscar()
        .subscribe(
            (data) => {
              this._sRuta<%= nombreMayuscula %>Service.registrosPagina = data[0].length;
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRuta<%= nombreMayuscula %>Service.busquedaDto,
                error
              });
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({

                <% if(internacionalizar) { %>
                titulo: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.title'),
                detalle: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.body'),
                <% } else{ %>
                titulo: 'Error',
                detalle: 'Error del servidor',
                <% } %>

                severidad: 'error'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            }
        );
  }

  // Usar para generar campos de formulario dinamicos

  // generarFormulario() {
  //   this.mostrarFormularioDePrueba = false;
  //   const arregloDatos: CampoAutogenerado[] = [];
  //   const grupoFormulario: GrupoFormulario[] = [];
  //   // crear los campos autogenerados "arregloDatos" y
  //   // AL MENOS debe existir un "grupoFormulario" que contenga a todos los campos para una visualización sencilla
  //   const respuestaAutogenerado = this._sRutaArticuloAtributoService
  //       .generarFormularioAutogenerado(
  //           arregloDatos,
  //           MENSAJES_ERROR,
  //           this,
  //           grupoFormulario
  //       )
  //   this.arregloFormulario.arregloValores = respuestaAutogenerado.arregloValores;
  //   this.arregloFormulario.grupo = respuestaAutogenerado.grupo;
  //   this.arregloFormulario.campos = respuestaAutogenerado.campos;
  //   this.mostrarFormularioDePrueba = true;
  // }

  formularioValidoBusqueda(formularioBusquedaValido: TodosCamposValidados): void {
    this.formularioBusqueda = formularioBusquedaValido;
    if (formularioBusquedaValido.valido) {
      this._sRuta<%= nombreMayuscula %>Service.setearCamposBusquedaValidos(
          formularioBusquedaValido,
          <%= nombreMayuscula %>BusquedaDto
      );
      // Transforma objetos a valores, si no hay objetos en la busqueda
      // como un autocomplete o select por ejemplo, entonces dejar vacío.
      const arregloCamposBusquedaConObjeto: ObjetoBusquedaADto[] = [
        {
          nombreCampoEnBusqueda: '<%= nombreHabilitado %>',
          nombreCampoEnDto: '<%= nombreHabilitado %>'
        },
        // {
        //   nombreCampoEnBusqueda: 'campoSelectOAutocomplete',
        //   nombreCampoEnDto: 'nombreCampoSelectOAutocomplete'
        // },
      ];
      this._sRuta<%= nombreMayuscula %>Service.transformarObjetosBusquedaABusquedaDto(
        arregloCamposBusquedaConObjeto
      );
    }
  }

  cambioCampoBusqueda(eventoCambioCampoBusqueca: EventoCambioFormulario): void {
    const campoBusquedaActualizado = eventoCambioCampoBusqueca.campoFormulario;
    if (campoBusquedaActualizado) {
      this._sRuta<%= nombreMayuscula %>Service
        .setearCamposBusquedaAUndefined(
            campoBusquedaActualizado,
          <%= nombreMayuscula %>BusquedaDto
        );
    }

  }

  formularioBusquedacambioCampoAutocomplete(evento: EventoCambioAutocomplete){
    // this.seleccionarBusquedaAutocompletePorEvento(evento);
  }

  formularioCrearEditarCambioAutocomplete(evento: EventoCambioAutocomplete,
                                          registro?: <%= nombreMayuscula %>Interface): void {
    // this.seleccionarBusquedaAutocompletePorEvento(evento);
  }

  // seleccionarBusquedaAutocompletePorEvento(evento: EventoCambioAutocomplete){
  //   if(evento.campoFormulario){
      // switch (evento.campoFormulario.nombreCampo) {
      //   case 'nombreCampo': // nombres de cada uno de los campos autocomplete
      //     // this.buscarAutocompleteNombreCampo(evento); // ejecutar una búsqueda con los servicios pertinentes
      //     break;
      // }
    // }
  // }

  // buscarAutocompleteNombreCampo(evento: EventoCambioAutocomplete) {
  //   const busqueda: NombreCampoBusquedaDto = {
  //     nombreCampo: evento.query,
  //   };
  //   this._nombrCampoService
  //       .buscar(busqueda)
  //       .toPromise()
  //       .then(res => res as [NombreCampoInterface[], number])
  //       .then(data => {
  //         const arregloDatos = data[0];
  //         // SI ES NECSARIO HACER UN MAP PARA VISUALIZAR OTROS CAMPOS UTILIZAR LA SIGUIENTE LÍNEA
  //         const arregloDatos = data[0].map((a:any)=>{ a.nombreCompeto = a.nombre + ' ' + a.apellido; return a;});
  //         if (evento.campoFormulario.autocomplete) {
  //           if (Array.isArray(arregloDatos)) {
  //             evento.campoFormulario.autocomplete.suggestions = [...arregloDatos];
  //           } else {
  //             evento.campoFormulario.autocomplete.suggestions = [arregloDatos];
  //           }
  //         }
  //         return data;
  //       });
  // }

  formularioCrearEditarValido(estaValido: TodosCamposValidados,
                              registro?: <%= nombreMayuscula %>Interface): void {
    this._sRuta<%= nombreMayuscula %>Service.setearFormularioEnModal(estaValido);
    if (estaValido.valido) {
      this.formularioCrearEditar = estaValido;
      this.botonAceptarModalDisabled = false;
    } else {
      this.botonAceptarModalDisabled = true;
    }
  }

  formularioCrearEditarCambioCampo(eventoCambioCampo: EventoCambioFormulario,
                                   registro?: <%= nombreMayuscula %>Interface): void {
    if (eventoCambioCampo.campoFormulario) {
        // Esta parte del codigo solo se debe de utilizar
        // si existe cambios de estructura del formulario
        // EJ: si selecciona el valor X de un campo entonces muestro tales campos
        // const formularioValido = {
        //   valido: false,
        //   camposFormulario: [eventoCambioCampo.campoFormulario],
        // };
        // this._sRuta<%= nombreMayuscula %>Service.setearFormularioEnModal(formularioValido);
        // switch (eventoCambioCampo.campoFormulario.nombreCampo) {
        //   case 'nombreCampo':
        //     if (registro) {
        //       this.actualizarValidez(
        //           eventoCambioCampo.valor,
        //           eventoCambioCampo.campoFormulario.nombreCampo,
        //           registro
        //       );
        //     } else {
        //       this.actualizarValidez(
        //           eventoCambioCampo.valor,
        //           eventoCambioCampo.campoFormulario.nombreCampo
        //       );
        //     }
        //     break;
        //   default:
        //     break;
        // }

    }
  }

//   actualizarValidez(
//       valorCampoValidez: any,
//       nombrePropiedadValidez: string,
//       registro?: any,
// ) {
//     // Los campos definidos "nombrePropiedad" cuando tengan un valor != undefined van a activar
//     // los campos que están en "nombresCamposRequeridosQueAfecta"
//     const camposAEstablecerValidezArreglo: CamposEstablecerValidez[] = [
//       {
//         nombrePropiedad: 'nombreCampo',
//         nombresCamposRequeridosQueAfecta: ['campoUno', 'campoDos']
//       },
//     // También hay el caso en donde al mostrar unos campos se oculten otros:
//       {
//         nombrePropiedad: 'nombreOtro',
//         nombresCamposRequeridosQueAfecta: ['campoTres', 'campoCuatro'],
//         nombresCamposRequeridosAOcultar: ['campoCinco', 'campoSeis'],
//         valorPropiedad: 'valorTresCuatro',
//       },
//       {
//         nombrePropiedad: 'nombreOtro',
//         nombresCamposRequeridosQueAfecta: ['campoCinco', 'campoSeis'],
//         nombresCamposRequeridosAOcultar: ['campoTres', 'campoCuatro'],
//         valorPropiedad: 'valorCincoSeis',
//       },
//     ];
//
//     this._sRuta<%= nombreMayuscula %>Service.establecerValidezDeFormulario<Ruta<%= nombreMayuscula %>Component>(
//         this,
//         camposAEstablecerValidezArreglo,
//         valorCampoValidez,
//         nombrePropiedadValidez,
//         undefined,
//         registro,
//     );
//   }


  abrirModal(
      registro: <%= nombreMayuscula %>Interface
  ){
    // Si se tienen campos dependientes se deben de
    // activarlos antes de editarlos
    // if(camposRequeridos.campoDependeUno){
    //   camposRequeridos.nombreCampoDependienteUno = true;
    // }
    // if(camposRequeridos.campoDependeDos){
    //   camposRequeridos.nombreCampoDependienteDos = true;
    // }
    this._sRuta<%= nombreMayuscula %>Service.abrirModal(this, registro);

    // En el caso de cammpos AUTOGERENADOS se habilita esta parte del codigo

    // const respuesta = this._sRuta<%= nombreMayuscula %>Service._<%= nombreCamel %>Service.generarFormulario(registro);
    // respuesta.arregloDatos = respuesta
    //     .arregloDatos
        // .map( // EJEMPLO DE IMPLEMENTACION:
        //     (aD) => {
        //       aD.valorInicial = registro.catValor;
        //       aD.required = true;
        //       aD.estaValido = false;
        //       aD.fnValidarInputMask = (campo, componente) => {
        //         if (campo) {
        //           return campo.length > 0
        //         } else {
        //           return true;
        //         }
        //       };
        //       return aD;
        //     }
        // );
    // const respuestaGrupoCampo = this._sRuta<%= nombreMayuscula %>Service
    //     .generarFormularioAutogenerado(
    //         respuesta.arregloDatos,
    //         MENSAJES_ERROR,
    //         this,
    //         respuesta.grupoFormulario
    //     );
    // this.abrirModalPrevisualizarTablaAutogenerado(respuestaGrupoCampo, false, registro);

  }

  // abrirModalPrevisualizarTablaAutogenerado(
  //     arregloDeDatos: {
  //   campos: (claseComponente: any) => CampoFormulario[],
  //       grupo: () => GrupoFormulario[],
  //       arregloValores: { nombre: string, campos: string[] }[]
  // },
  // mostrarTabla = false,
  //     registro?: <%= nombreMayuscula %>Interface) {
  //   this.botonAceptarModalAutogeneradoDisabled = true;
  //   const dialogRef = this.matDialog.open(
  //       ModalFormularioAutogeneradoComponent, // Modal de autogenerado
  //       {
  //         data: {
  //           arregloFormulario: arregloDeDatos,
  //           componente: this,
  //           mostrarTabla: mostrarTabla,
  //           registro,
  //         }
  //       }
  //   );
  // }

  // cambioCampoAutogenerado(eventoCambioCampo: EventoCambioFormulario) {
  //
  // }

  // formularioValidoAutogenerado(estaValido: TodosCamposValidados, registro?: <%= nombreMayuscula %>Interface) {
  //   if (estaValido.valido) {
  //     this.camposAutogeneradosAGuardar = estaValido
  //         .camposFormulario
  //         .filter((cF) => cF.estaValido && cF.valorActual)
  //     this.botonAceptarModalAutogeneradoDisabled = false;
  //   } else {
  //     this.botonAceptarModalAutogeneradoDisabled = true;
  //   }
  // }

  // aceptoFormularioAutogenerado(registro?: ArticuloCatalogoInterface) {
  //   if (registro) {
  //     this.editarRegistro(registro);
  //   } else {
  //     this.guardarNuevosCampos()
  //   }
  // }

  // Implementacion de guardado de campos auto generados

  // guardarNuevosCampos() {
  //
  // }

  // Implementacion de ediciion de campo autogenerado

  // editarRegistro(registro: ArticuloCatalogoInterface) {
  //
  // }

  // cambioStepperEnAutogenerado(indice: number) {
  //
  // }

  crearEditar(
    registro?: <%= nombreMayuscula %>Interface,
  ): void {
    if (registro) {
      this.editar(registro);
    } else {
      this.crear();
    }
  }

  crear(): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRuta<%= nombreMayuscula %>Service.obtenerCampos<Crear<%= nombreMayuscula %>>(
        Crear<%= nombreMayuscula %>,
        this.formularioCrearEditar
      );
      // Transforma objetos a valores, si no hay objetos en el formulario
      // como un autocomplete por ejemplo, se debe dejar vacío.
      const arregloPropiedades: SetearObjeto[] = [
        // {
        //   nombreCampo: 'sisHabilitado',
        //   nombrePropiedadObjeto: 'sisHabilitado'
        // }
      ];
      camposCrear.objetoCrear = this._sRuta<%= nombreMayuscula %>Service.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );


      // Setear campos extra
      // Ej:
      // camposCrear.objetoCrear.habilitado = 1;
      // Ej: Relación
      // if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
      //   camposCrear.objetoCrear.nombreCampoRelacion = this._sRuta<%= nombreMayuscula %>Service.busquedaDto.nombreCampoRelacion as number;
      // }
      <% if(esFirebase){%>
      // Si se necesita setear el CODIGO IDENTIFICADOR dentro del objeto se puede utilizar estas lineas

      // const campos = camposCrear.objetoCrear as Crear<%= nombreMayuscula %>;
      // camposCrear.objetoCrear.sisHabilitado = ActivoInactivo.Activo;
      // const codigo = campos.codigo;

      // Si esta dentro de una COLECCION se puede usar lo siguiente para setear al padre coleccion:

      // let nombreColeccionSuperior = '';
      // if (this._sRuta<%= nombreMayuscula %>Service.parametros) {
      //   if (this._sRuta<%= nombreMayuscula %>Service.parametros.nombreColeccionSuperior) {
      //     nombreColeccionSuperior = nombreColeccionSuperior;
      //   }
      // }

      <% }%>


      if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
        this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
        const crear$ = this._sRuta<%= nombreMayuscula %>Service
          ._<%= nombreCamel %>Service
          <% if(!esFirebase){ %>
          .crear(
              camposCrear.objetoCrear
          )
          <% } %>
          <% if(esFirebase){ %>
          .crear(
                camposCrear.objetoCrear,
                // codigo, // Solo si es necesario, también puede ser "undefined"
               // false,
              // this._sRuta<%= nombreMayuscula %>Service._<%= nombreCamel %>Service.arregloCamposBusqueda,
              // this._sRuta<%= nombreMayuscula %>Service._<%= nombreCamel %>Service.arregloIdColeccionesSuperiores,
            ) as Observable<<%= nombreMayuscula %>Interface>;
          <% } %>
          <% if(!esFirebase){ %>
          .pipe(
              this._sRuta<%= nombreMayuscula %>Service.buscarDeNuevo('<%= id %>')
          ) as Observable<<%= nombreMayuscula %>Interface>;
          <% } %>
        crear$
          .subscribe(
            (nuevoRegistro) => {
              nuevoRegistro.habilitado = true;
              this._sRuta<%= nombreMayuscula %>Service.arregloDatos.unshift(nuevoRegistro);
              this._sRuta<%= nombreMayuscula %>Service.arregloDatosFiltrado.unshift(nuevoRegistro);
              this._sRuta<%= nombreMayuscula %>Service.matDialog.closeAll();
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({

                <% if(internacionalizar) { %>
                titulo: this.translocoService.translate('generales.toasters.toastExitoCrear.title'),
                detalle: this.translocoService.translate('generales.toasters.toastExitoCrear.body', {nombre: nuevoRegistro.nombre}),
                <% } else{ %>
                titulo: 'Éxito',
                detalle: 'Creo nuevo registro',
                <% } %>

                severidad: 'success'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRuta<%= nombreMayuscula %>Service.busquedaDto,
                error
              });
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({
                <% if(internacionalizar) { %>
                titulo: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.title'),
                detalle: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.body'),
                <% } else{ %>
                titulo: 'Error',
                detalle: 'Error del servidor',
                <% } %>

                severidad: 'error'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }

  editar(
    registro: <%= nombreMayuscula %>Interface,
  ): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRuta<%= nombreMayuscula %>Service.obtenerCampos<Actualizar<%= nombreMayuscula %>>(
        Actualizar<%= nombreMayuscula %>,
        this.formularioCrearEditar,
        true
      );
      const arregloPropiedades: SetearObjeto[] = [];
      camposCrear.objetoCrear = this._sRuta<%= nombreMayuscula %>Service.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );
      if (registro.<%= !esFirebase ? id : 'uid' %>) {
        this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
        const actualizar$ = this._sRuta<%= nombreMayuscula %>Service
          ._<%= nombreCamel %>Service
          <% if(!esFirebase){ %>
              .actualizar(
                  camposCrear.objetoCrear,
                  registro.<%= id %>
              )
              .pipe(
                  this._sRuta<%= nombreMayuscula %>Service.buscarDeNuevo('<%= id %>', registro.<%= id %>)
              ) as any as Observable<<%= nombreMayuscula %>Interface>
          <% } %>
          <% if(esFirebase){ %>
              .actualizar(
                  registro,
                  camposCrear.objetoCrear,
                  this._sRuta<%= nombreMayuscula %>Service.arregloIdColeccionesSuperiores
              ) as Observable<<%= nombreMayuscula %>Interface>;
          <% }%>

        actualizar$
          .subscribe(
            (registroEditado) => {
              registroEditado.habilitado = registro.habilitado;
              const indice = this._sRuta<%= nombreMayuscula %>Service.arregloDatos
                .findIndex(
                  (a: <%= nombreMayuscula %>Interface) => a.<%= id %> === registro.<%= id %>
                );
              this._sRuta<%= nombreMayuscula %>Service.arregloDatos[indice] = registroEditado;
              const indiceArregloFiltrado = this._sRuta<%= nombreMayuscula %>Service.arregloDatosFiltrado
                .findIndex(
                  (a: <%= nombreMayuscula %>Interface) => a.<%= id %> === registro.<%= id %>
                );
              this._sRuta<%= nombreMayuscula %>Service.arregloDatosFiltrado[indiceArregloFiltrado] = registroEditado;
              this._sRuta<%= nombreMayuscula %>Service.matDialog.closeAll();
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({

                <% if(internacionalizar) { %>
                titulo: this.translocoService.translate('generales.toasters.toastExitoEditar.title'),
                detalle: this.translocoService.translate('generales.toasters.toastExitoEditar.body', {nombre: registroEditado.nombre}),
                <% } else{ %>
                titulo: 'Éxito',
                detalle: 'Edito registro',
                <% } %>

                severidad: 'success'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRuta<%= nombreMayuscula %>Service.busquedaDto,
                error
              });
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({

                <% if(internacionalizar) { %>
                titulo: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.title'),
                detalle: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.body'),
                <% } else{ %>
                titulo: 'Error',
                detalle: 'Error del servidor',
                <% } %>

                severidad: 'error'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }

  // irRutaArchivos(tipo: 'imagen' | 'archivo', registro: <%= nombreMayuscula %>Interface) {
  //   const ruta = [LLENAR_RUTA, registro.<%= id %>, tipo, LLENAR_NOMBRE_IDENTIFICADOR, `Gestionar ${tipo} de ..... ${registro.nombreCampo}`];
  //   this._router.navigate(ruta);
  // }

  // abrirFormularioCrearArchivo(tipo: string, registro: <%= nombreMayuscula %>Interface) {
  //   const formulario = tipo === TipoArchivo.Imagen ? ARTICULO_ARCHIVO_FORMULARIO : ARTICULO_ARCHIVO_FORMULARIO;
  //     <% if(internacionalizar) { %>
  //     const rutaComunInternacionalizacion = 'formularios.crearEditar.formularioCrearEditar.';
  //     <% } else{ %>
  //
  //     <% } %>
  //     this._sRuta<%= nombreMayuscula %>Service.abrirModalArchivos(
  //       this,
  //       formulario,
  //         <% if(internacionalizar) { %>
  //       rutaComunInternacionalizacion + (tipo === TipoArchivo.Imagen ? 'tituloCrearImagen' : 'tituloCrearArchivo'),
  //       rutaComunInternacionalizacion + (tipo === TipoArchivo.Imagen ? 'descripcionCrearImagen' : 'descripcionCrearArchivo'),
  //         <% } else{ %>
  //         tipo === TipoArchivo.Imagen ? 'Crear imagen' : 'Crear archivo',
  //         tipo === TipoArchivo.Imagen ? 'Selecciona una imagen' : 'Selecciona un archivo'
  //         <% } %>
  //       tipo,
  //       registro
  //   );
  //
  // }

  // formularioArchivoCambio(eventoCambioCampo: EventoCambioFormulario, registro: <%= nombreMayuscula %>Interface, tipo: TipoArchivo) {
  //   // campo cambio
  // }
  //
  // formularioArchivoValido(estaValido: TodosCamposValidados, registro: <%= nombreMayuscula %>Interface, tipo: TipoArchivo) {
  //   this.guardarFormularioValido(estaValido, registro, tipo);
  // }
  //
  // guardarFormularioValido(estaValido: TodosCamposValidados, registro: <%= nombreMayuscula %>Interface, tipo: TipoArchivo) {
  //   if (estaValido.valido) {
  //     this._sRuta<%= nombreMayuscula %>Service.formularioArchivo = estaValido;
  //     this.botonAceptarModalDisabled = false;
  //   } else {
  //     this.botonAceptarModalDisabled = true;
  //   }
  // }

  // crearArchivo(tipo: TipoArchivo | string, registro: <%= nombreMayuscula %>Interface) {
  //     this._sRuta<%= nombreMayuscula %>Service
  //         .crearArchivo(tipo, registro, '<%= nombreGuiones %>')
  //         .subscribe(
  //             (nuevoRegistro) => {
  //               if (tipo === TipoArchivo.Imagen) {
  //                 this._sRuta<%= nombreMayuscula %>Service.archivoPrincipalActual = nuevoRegistro;
  //                 registro.sis_IM = nuevoRegistro;
  //               }
  //               if (tipo === TipoArchivo.Archivo) {
  //                 this._sRuta<%= nombreMayuscula %>Service.archivoPrincipalActual = nuevoRegistro;
  //                 registro.sis_AR = nuevoRegistro;
  //               }
  //               this._sRuta<%= nombreMayuscula %>Service.matDialog.closeAll();
  //               this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({
  //                   <% if(internacionalizar) { %>
  //                     titulo: this.translocoService.translate('generales.toasters.toastExitoEditar.title'),
  //                     detalle: this.translocoService.translate('generales.toasters.toastExitoEditar.body', {nombre: '<%= nombreMayuscula %>'}),
  //                     severidad: 'success'
  //                 <% } else{ %>
  //                     titulo: 'Éxito',
  //                     detalle: 'Actualizo el archivo',
  //                     severidad: 'success'
  //                 <% } %>
  //
  //               });
  //               this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
  //             },
  //             (error) => {
  //               console.error({
  //                 mensaje: 'Error cargando registros',
  //                 data: this._sRuta<%= nombreMayuscula %>Service.busquedaDto,
  //                 error
  //               });
  //               this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({
  //                   <% if(internacionalizar) { %>
  //                     titulo: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.title'),
  //                     detalle: this.translocoService.translate('generales.toasters.toastErrorConexionServidorVacio.body'),
  //                     severidad: 'error'
  //                 <% } else{ %>
  //                     titulo: 'Error',
  //                     detalle: 'Error del Sistema',
  //                     severidad: 'error'
  //                 <% } %>
  //               });
  //               this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
  //             }
  //         );
  // }





}
