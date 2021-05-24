import {Component, OnInit} from '@angular/core';
import {SRutaPokemonService} from './s-ruta-pokemon/s-ruta-pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SRutaPokemonParametros} from './interfaces/s-ruta-pokemon.parametros';
import {PokemonBusquedaDto} from '../../dto/pokemon-busqueda.dto';
import {PokemonInterface} from '../../interfaces/pokemon.interface';
import {CrearPokemon} from './clases/crear-pokemon';
import {ActualizarPokemon} from './clases/actualizar-pokemon';
import {POKEMON_FORMULARIO_BUSQUEDA} from './busqueda-filtros/busqueda/pokemon-formulario-busqueda';
import {MenuItem} from 'primeng/api';
import {POKEMON_MIGAS_PAN} from './migas-pan/pokemon-migas-pan';
import {
  ArregloFiltroBusquedaFirestore,
  EventoCambioAutocomplete,
  EventoCambioFormulario, ObjetoBusquedaADto, ObjetoInternacionalizacionFormulario,
  SetearObjeto,
  TodosCamposValidados
} from '@manticore-labs/ng-2021';

@Component({
  selector: 'app-ruta-pokemon',
  templateUrl: './ruta-pokemon.component.html',
  styleUrls: ['./ruta-pokemon.component.scss']
})
export class RutaPokemonComponent implements OnInit {


  opciones = [
    

    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     const parametros: SRutaArchivoSecundarioParametros = {
    //       nombreIdentificador: 'pokemon',
    //       tipo: TipoArchivo.Archivo,
    //       idReferencial: id,
    //       tituloVista: 'Pokemon',
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
    //       nombreIdentificador: 'pokemon',
    //       tipo: TipoArchivo.Imagen,
    //       idReferencial: id,
    //       tituloVista: 'Pokemon',
    //     };
    //     return [
    //       ...ARCHIVO_SECUNDARIO_MIGAS_PAN(this, parametros).routerLink,
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'opcionesIrRuta.gestionarImagenes',
    //   rutaImagen: '/../comun/imagen.svg'
    // },

    


    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     return [
    //     ...POKEMON_MIGAS_PAN(this).routerLink, // RUTA ACTUAL
    //     id,  // ids necesarios
    //     'termina-ruta' // opcional path final
    //     ]; // ruta en arreglo
    //   },
    //   nombre: 'Otra acción de ...',
    //   rutaImagen: '/pokemon/imagen-principal.svg'
    // }
  ];

  camposFormularioBusqueda = POKEMON_FORMULARIO_BUSQUEDA;
  valorBusqueda = '';
  formularioBusqueda?: TodosCamposValidados;
  botonAceptarModalDisabled = true;

  formularioCrearEditar?: TodosCamposValidados;
  sistemaLogisticoSeleccionado?: PokemonInterface;

  stepperActualBusqueda = 0;

  nombreServicio = '_sRutaPokemonService';

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

  rutaImagenPrincipal = this.rutaImagenAssets + '/pokemon/imagen-principal.svg'

  

  


  constructor(
    public readonly _sRutaPokemonService: SRutaPokemonService,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router,
  

  
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
    //   fnMostrarImagen: (entrenador: PokemonInterface) => {
    //     if (entrenador.sis_IM) {
    //       return this._sRutaPokemonService._domSanitizer.bypassSecurityTrustResourceUrl(`data:${pokemon.sis_IM.mimetype};base64, ${pokemon.sis_IM.buffer}`);
    //     } else {
    //       return '';
    //     }
    //   }
    // },
    {
      field: 'sisHabilitado',
    
    header: 'Habilitado',
    
  posicion: 'text-left',
      tamanio: '20%'
},
  {
    field: 'id',
    
    header: 'Acciones',
    
    posicion: 'text-right',
        tamanio: '20%'
  }
];

  ngOnInit(): void {
    this._obtenerParametros();
  }

  private _obtenerParametros(): void {
    this._sRutaPokemonService
      .obtenerYGuardarParametrosRuta(this._activatedRoute)
      .subscribe(
        (parametros: SRutaPokemonParametros) => {
          const busqueda = this._sRutaPokemonService
            .setearParametrosDeBusqueda(parametros, PokemonBusquedaDto);
            
            // if (parametros.nombreCampoRelacion && busqueda) {
            //   busqueda.nombreCampoRelacion = +parametros.nombreCampoRelacion;
            // }
            
            
          this._sRutaPokemonService
            .busquedaDto = busqueda;
          this._sRutaPokemonService
              .construirMigasPan(
                  this,
                  [
                    // MODULO_MIGAS_PAN,
                    POKEMON_MIGAS_PAN,
                  ],
              );
          this.buscarConFiltros();
        }
      );
  }

  buscarConFiltros(): void {
    
    if (this._sRutaPokemonService.busquedaDto) {
      this._sRutaPokemonService.busquedaDto.skip = 0;
      this._sRutaPokemonService.first = 0;
    }
    this.buscarSuscrito();
    
    
  }

  buscarSuscrito(){
    this._sRutaPokemonService._cargandoService.habilitarCargando();
    this._sRutaPokemonService
        .buscar()
        .subscribe(
            (data) => {
              this._sRutaPokemonService.registrosPagina = data[0].length;
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRutaPokemonService.busquedaDto,
                error
              });
              this._sRutaPokemonService._notificacionService.anadir({

                
                titulo: 'Error',
                detalle: 'Error del servidor',
                

                severidad: 'error'
              });
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
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
      this._sRutaPokemonService.setearCamposBusquedaValidos(
          formularioBusquedaValido,
          PokemonBusquedaDto
      );
      // Transforma objetos a valores, si no hay objetos en la busqueda
      // como un autocomplete o select por ejemplo, entonces dejar vacío.
      const arregloCamposBusquedaConObjeto: ObjetoBusquedaADto[] = [
        {
          nombreCampoEnBusqueda: 'sisHabilitado',
          nombreCampoEnDto: 'sisHabilitado'
        },
        // {
        //   nombreCampoEnBusqueda: 'campoSelectOAutocomplete',
        //   nombreCampoEnDto: 'nombreCampoSelectOAutocomplete'
        // },
      ];
      this._sRutaPokemonService.transformarObjetosBusquedaABusquedaDto(
        arregloCamposBusquedaConObjeto
      );
    }
  }

  cambioCampoBusqueda(eventoCambioCampoBusqueca: EventoCambioFormulario): void {
    const campoBusquedaActualizado = eventoCambioCampoBusqueca.campoFormulario;
    if (campoBusquedaActualizado) {
      this._sRutaPokemonService
        .setearCamposBusquedaAUndefined(
            campoBusquedaActualizado,
          PokemonBusquedaDto
        );
    }

  }

  formularioBusquedacambioCampoAutocomplete(evento: EventoCambioAutocomplete){
    // this.seleccionarBusquedaAutocompletePorEvento(evento);
  }

  formularioCrearEditarCambioAutocomplete(evento: EventoCambioAutocomplete,
                                          registro?: PokemonInterface): void {
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
                              registro?: PokemonInterface): void {
    this._sRutaPokemonService.setearFormularioEnModal(estaValido);
    if (estaValido.valido) {
      this.formularioCrearEditar = estaValido;
      this.botonAceptarModalDisabled = false;
    } else {
      this.botonAceptarModalDisabled = true;
    }
  }

  formularioCrearEditarCambioCampo(eventoCambioCampo: EventoCambioFormulario,
                                   registro?: PokemonInterface): void {
    if (eventoCambioCampo.campoFormulario) {
        // Esta parte del codigo solo se debe de utilizar
        // si existe cambios de estructura del formulario
        // EJ: si selecciona el valor X de un campo entonces muestro tales campos
        // const formularioValido = {
        //   valido: false,
        //   camposFormulario: [eventoCambioCampo.campoFormulario],
        // };
        // this._sRutaPokemonService.setearFormularioEnModal(formularioValido);
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
//     this._sRutaPokemonService.establecerValidezDeFormulario<RutaPokemonComponent>(
//         this,
//         camposAEstablecerValidezArreglo,
//         valorCampoValidez,
//         nombrePropiedadValidez,
//         undefined,
//         registro,
//     );
//   }


  abrirModal(
      registro: PokemonInterface
  ){
    // Si se tienen campos dependientes se deben de
    // activarlos antes de editarlos
    // if(camposRequeridos.campoDependeUno){
    //   camposRequeridos.nombreCampoDependienteUno = true;
    // }
    // if(camposRequeridos.campoDependeDos){
    //   camposRequeridos.nombreCampoDependienteDos = true;
    // }
    this._sRutaPokemonService.abrirModal(this, registro);

    // En el caso de cammpos AUTOGERENADOS se habilita esta parte del codigo

    // const respuesta = this._sRutaPokemonService._pokemonService.generarFormulario(registro);
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
    // const respuestaGrupoCampo = this._sRutaPokemonService
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
  //     registro?: PokemonInterface) {
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

  // formularioValidoAutogenerado(estaValido: TodosCamposValidados, registro?: PokemonInterface) {
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
    registro?: PokemonInterface,
  ): void {
    if (registro) {
      this.editar(registro);
    } else {
      this.crear();
    }
  }

  crear(): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRutaPokemonService.obtenerCampos<CrearPokemon>(
        CrearPokemon,
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
      camposCrear.objetoCrear = this._sRutaPokemonService.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );


      // Setear campos extra
      // Ej:
      // camposCrear.objetoCrear.habilitado = 1;
      // Ej: Relación
      // if (this._sRutaPokemonService.busquedaDto) {
      //   camposCrear.objetoCrear.nombreCampoRelacion = this._sRutaPokemonService.busquedaDto.nombreCampoRelacion as number;
      // }
      


      if (this._sRutaPokemonService.busquedaDto) {
        this._sRutaPokemonService._cargandoService.habilitarCargando();
        const crear$ = this._sRutaPokemonService
          ._pokemonService
          
          .crear(
              camposCrear.objetoCrear
          )
          
          
          
          .pipe(
              this._sRutaPokemonService.buscarDeNuevo('id')
          ) as Observable<PokemonInterface>;
          
        crear$
          .subscribe(
            (nuevoRegistro) => {
              nuevoRegistro.habilitado = true;
              this._sRutaPokemonService.arregloDatos.unshift(nuevoRegistro);
              this._sRutaPokemonService.arregloDatosFiltrado.unshift(nuevoRegistro);
              this._sRutaPokemonService.matDialog.closeAll();
              this._sRutaPokemonService._notificacionService.anadir({

                
                titulo: 'Éxito',
                detalle: 'Creo nuevo registro',
                

                severidad: 'success'
              });
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRutaPokemonService.busquedaDto,
                error
              });
              this._sRutaPokemonService._notificacionService.anadir({
                
                titulo: 'Error',
                detalle: 'Error del servidor',
                

                severidad: 'error'
              });
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }

  editar(
    registro: PokemonInterface,
  ): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRutaPokemonService.obtenerCampos<ActualizarPokemon>(
        ActualizarPokemon,
        this.formularioCrearEditar,
        true
      );
      const arregloPropiedades: SetearObjeto[] = [];
      camposCrear.objetoCrear = this._sRutaPokemonService.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );
      if (registro.id) {
        this._sRutaPokemonService._cargandoService.habilitarCargando();
        const actualizar$ = this._sRutaPokemonService
          ._pokemonService
          
              .actualizar(
                  camposCrear.objetoCrear,
                  registro.id
              )
              .pipe(
                  this._sRutaPokemonService.buscarDeNuevo('id', registro.id)
              ) as any as Observable<PokemonInterface>
          
          

        actualizar$
          .subscribe(
            (registroEditado) => {
              registroEditado.habilitado = registro.habilitado;
              const indice = this._sRutaPokemonService.arregloDatos
                .findIndex(
                  (a: PokemonInterface) => a.id === registro.id
                );
              this._sRutaPokemonService.arregloDatos[indice] = registroEditado;
              const indiceArregloFiltrado = this._sRutaPokemonService.arregloDatosFiltrado
                .findIndex(
                  (a: PokemonInterface) => a.id === registro.id
                );
              this._sRutaPokemonService.arregloDatosFiltrado[indiceArregloFiltrado] = registroEditado;
              this._sRutaPokemonService.matDialog.closeAll();
              this._sRutaPokemonService._notificacionService.anadir({

                
                titulo: 'Éxito',
                detalle: 'Edito registro',
                

                severidad: 'success'
              });
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRutaPokemonService.busquedaDto,
                error
              });
              this._sRutaPokemonService._notificacionService.anadir({

                
                titulo: 'Error',
                detalle: 'Error del servidor',
                

                severidad: 'error'
              });
              this._sRutaPokemonService._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }

  // irRutaArchivos(tipo: 'imagen' | 'archivo', registro: PokemonInterface) {
  //   const ruta = [LLENAR_RUTA, registro.id, tipo, LLENAR_NOMBRE_IDENTIFICADOR, `Gestionar ${tipo} de ..... ${registro.nombreCampo}`];
  //   this._router.navigate(ruta);
  // }

  // abrirFormularioCrearArchivo(tipo: string, registro: PokemonInterface) {
  //   const formulario = ARTICULO_ARCHIVO_FORMULARIO;
  //     
  //
  //     
  //     this._sRutaPokemonService.abrirModalArchivos(
  //       this,
  //       formulario,
  //         
  //         tipo === TipoArchivo.Imagen ? 'Crear imagen' : 'Crear archivo',
  //         tipo === TipoArchivo.Imagen ? 'Selecciona una imagen' : 'Selecciona un archivo'
  //         
  //       tipo,
  //       registro
  //   );
  //
  // }

  // formularioArchivoCambio(eventoCambioCampo: EventoCambioFormulario, registro: PokemonInterface, tipo: TipoArchivo) {
  //   // campo cambio
  // }
  //
  // formularioArchivoValido(estaValido: TodosCamposValidados, registro: PokemonInterface, tipo: TipoArchivo) {
  //   this.guardarFormularioValido(estaValido, registro, tipo);
  // }
  //
  // guardarFormularioValido(estaValido: TodosCamposValidados, registro: PokemonInterface, tipo: TipoArchivo) {
  //   if (estaValido.valido) {
  //     this._sRutaPokemonService.formularioArchivo = estaValido;
  //     this.botonAceptarModalDisabled = false;
  //   } else {
  //     this.botonAceptarModalDisabled = true;
  //   }
  // }

  // crearArchivo(tipo: TipoArchivo | string, registro: PokemonInterface) {
  //     this._sRutaPokemonService
  //         .crearArchivo(tipo, registro, 'pokemon')
  //         .subscribe(
  //             (nuevoRegistro) => {
  //               if (tipo === TipoArchivo.Imagen) {
  //                 this._sRutaPokemonService.archivoPrincipalActual = nuevoRegistro;
  //                 registro.sis_IM = nuevoRegistro;
  //               }
  //               if (tipo === TipoArchivo.Archivo) {
  //                 this._sRutaPokemonService.archivoPrincipalActual = nuevoRegistro;
  //                 registro.sis_AR = nuevoRegistro;
  //               }
  //               this._sRutaPokemonService.matDialog.closeAll();
  //               this._sRutaPokemonService._notificacionService.anadir({
  //                   
  //                     titulo: 'Éxito',
  //                     detalle: 'Actualizo el archivo',
  //                     severidad: 'success'
  //                 
  //
  //               });
  //               this._sRutaPokemonService._cargandoService.deshabilitarCargando();
  //             },
  //             (error) => {
  //               console.error({
  //                 mensaje: 'Error cargando registros',
  //                 data: this._sRutaPokemonService.busquedaDto,
  //                 error
  //               });
  //               this._sRutaPokemonService._notificacionService.anadir({
  //                   
  //                     titulo: 'Error',
  //                     detalle: 'Error del Sistema',
  //                     severidad: 'error'
  //                 
  //               });
  //               this._sRutaPokemonService._cargandoService.deshabilitarCargando();
  //             }
  //         );
  // }


  mostrarImagen(pokemon: PokemonInterface){
    if (pokemon.sis_IM) {
      return this._sRutaPokemonService._domSanitizer.bypassSecurityTrustResourceUrl(`data:${pokemon.sis_IM.mimetype};base64, ${pokemon.sis_IM.buffer}`);
    } else {
      return '';
    }
  }


}
