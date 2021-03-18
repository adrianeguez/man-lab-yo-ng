import {Component, OnInit} from '@angular/core';
import {SRuta<%= nombreMayuscula %>Service} from './s-ruta-<%= nombreGuiones %>/s-ruta-<%= nombreGuiones %>.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SRuta<%= nombreMayuscula %>Parametros} from './interfaces/s-ruta-<%= nombreGuiones %>.parametros';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {Crear<%= nombreMayuscula %>} from './clases/crear-<%= nombreGuiones %>';
import {Actualizar<%= nombreMayuscula %>} from './clases/actualizar-<%= nombreGuiones %>';
import {<%= nombreSoloMayusculas%>_FORMULARIO_BUSQUEDA} from './busqueda-filtros/busqueda/<%= nombreGuiones %>-formulario-busqueda';

@Component({
  selector: 'app-ruta-<%= nombreGuiones %>',
  templateUrl: './ruta-<%= nombreGuiones %>.component.html',
  styleUrls: ['./ruta-<%= nombreGuiones %>.component.scss']
})
export class Ruta<%= nombreMayuscula %>Component implements OnInit {

  columnasPrimeTable = [
    // {
    //   field: 'nombreCampo',
    //   header: 'Nombre a mostrarse',
    //   posicion: 'text-center',
    //   tamanio: '60%', // tamaño en porcentaje de la columna
    //     fnMostrar: (valor:TipoValor)=>{
    //       switch (valor) {
    //         case TipoValor.ValorUno:
    //           return 'Valor de uno';
    //         case TipoValor.ValorDos:
    //           return 'Valor de dos';
    //         default:
    //           return valor;
    //       }
    //     }
    // },
    {
      field: '<%= nombreHabilitado %>',
      header: 'Habilitado',
      posicion: 'text-left',
      tamanio: '20%'
    },
    {
      field: '<%= id %>',
      header: 'Acciones',
      posicion: 'text-right',
      tamanio: '20%'
    }
  ];

  opciones = [
    // {
    //   ruta: (id: string) => { // parametros de la ruta
    //     return ['/empieza', id, 'termina-ruta']; // ruta en arreglo
    //   },
    //   nombre: 'Otra acción de ...'
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

  constructor(
    public readonly _sRuta<%= nombreMayuscula %>Service: SRuta<%= nombreMayuscula %>Service,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router
  ) {
  }

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
            // if (parametros.nombreCampoRelacion && busqueda) {
            //   busqueda.nombreCampoRelacion = +parametros.nombreCampoRelacion;
            // }
          this._sRuta<%= nombreMayuscula %>Service
            .busquedaDto = busqueda;
          this.buscarConFiltros();
        }
      );
  }

  buscarConFiltros(): void {
    this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
    if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
      this._sRuta<%= nombreMayuscula %>Service.busquedaDto.skip = 0;
      this._sRuta<%= nombreMayuscula %>Service.first = 0;
    }
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
            titulo: 'Error',
            detalle: 'Error del servidor',
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
  }


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

      if (this._sRuta<%= nombreMayuscula %>Service.busquedaDto) {
        this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
        const crear$ = this._sRuta<%= nombreMayuscula %>Service
          ._<%= nombreCamel %>Service
          .crear(
            camposCrear.objetoCrear
          )
          .pipe(
            this._sRuta<%= nombreMayuscula %>Service.buscarDeNuevo('<%= id %>')
          ) as Observable<<%= nombreMayuscula %>Interface>;
        crear$
          .subscribe(
            (nuevoRegistro) => {
              nuevoRegistro.habilitado = true;
              this._sRuta<%= nombreMayuscula %>Service.arregloDatos.unshift(nuevoRegistro);
              this._sRuta<%= nombreMayuscula %>Service.arregloDatosFiltrado.unshift(nuevoRegistro);
              this._sRuta<%= nombreMayuscula %>Service.matDialog.closeAll();
              this._sRuta<%= nombreMayuscula %>Service._notificacionService.anadir({
                titulo: 'Éxito',
                detalle: 'Creo nuevo registro',
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
                titulo: 'Error',
                detalle: 'Error del servidor',
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
      if (registro.<%= id %>) {
        this._sRuta<%= nombreMayuscula %>Service._cargandoService.habilitarCargando();
        const actualizar$ = this._sRuta<%= nombreMayuscula %>Service
          ._<%= nombreCamel %>Service
          .actualizar(
            camposCrear.objetoCrear,
            registro.<%= id %>
          )
          .pipe(
            this._sRuta<%= nombreMayuscula %>Service.buscarDeNuevo('<%= id %>', registro.<%= id %>)
          ) as any as Observable<<%= nombreMayuscula %>Interface>

        actualizar$.
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
                titulo: 'Éxito',
                detalle: 'Edito registro',
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
                titulo: 'Error',
                detalle: 'Error del servidor',
                severidad: 'error'
              });
              this._sRuta<%= nombreMayuscula %>Service._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }
}
