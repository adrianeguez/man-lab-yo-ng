import {Component, OnInit} from '@angular/core';
import {SRutaServicioLogisticoService} from './s-ruta-servicio-logistico/s-ruta-servicio-logistico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SRutaServicioLogisticoParametros} from './interfaces/s-ruta-servicio-logistico.parametros';
import {ServicioLogisticoBusquedaDto} from '../../dto/servicio-logistico-busqueda.dto';
import {ServicioLogisticoInterface} from '../../interfaces/servicio-logistico.interface';
import {CrearServicioLogistico} from './clases/crear-servicio-logistico';
import {ActualizarServicioLogistico} from './clases/actualizar-servicio-logistico';
import {SERVICIO_LOGISTICO_FORMULARIO_BUSQUEDA} from './busqueda-filtros/busqueda/servicio-logistico-formulario-busqueda';

@Component({
  selector: 'app-ruta-servicio-logistico',
  templateUrl: './ruta-servicio-logistico.component.html',
  styleUrls: ['./ruta-servicio-logistico.component.scss']
})
export class RutaServicioLogisticoComponent implements OnInit {

  columnasPrimeTable = [
    // {
    //   field: 'nombreCampo',
    //   header: 'Nombre a mostrarse',
    //   posicion: 'text-center',
    //   tamanio: '60%' // tamaño en porcentaje de la columna
    // },
    {
      field: 'sisHabilitado',
      header: 'Habilitado',
      posicion: 'text-left',
      tamanio: '20%'
    },
    {
      field: 'idSLogisticos',
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

  camposFormularioBusqueda = SERVICIO_LOGISTICO_FORMULARIO_BUSQUEDA;
  valorBusqueda = '';
  formularioBusqueda?: TodosCamposValidados;
  botonAceptarModalDisabled = true;

  formularioCrearEditar?: TodosCamposValidados;
  sistemaLogisticoSeleccionado?: ServicioLogisticoInterface;

  stepperActualBusqueda = 0;

  nombreServicio = '_sRutaServicioLogisticoService';

  constructor(
    public readonly _sRutaServicioLogisticoService: SRutaServicioLogisticoService,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    this._obtenerParametros();
  }

  private _obtenerParametros(): void {
    this._sRutaServicioLogisticoService
      .obtenerYGuardarParametrosRuta(this._activatedRoute)
      .subscribe(
        (parametros: SRutaServicioLogisticoParametros) => {
          const busqueda = this._sRutaServicioLogisticoService
            .setearParametrosDeBusqueda(parametros, ServicioLogisticoBusquedaDto);
          this._sRutaServicioLogisticoService
            .busquedaDto = busqueda;
          this.buscarConFiltros();
        }
      );
  }

  buscarConFiltros(): void {
    this._sRutaServicioLogisticoService._cargandoService.habilitarCargando();
    if (this._sRutaServicioLogisticoService.busquedaDto) {
      this._sRutaServicioLogisticoService.busquedaDto.skip = 0;
      this._sRutaServicioLogisticoService.first = 0;
    }
    this._sRutaServicioLogisticoService
      .buscar()
      .subscribe(
        (data) => {
          this._sRutaServicioLogisticoService.registrosPagina = data[0].length;
          this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
        },
        (error) => {
          console.error({
            mensaje: 'Error cargando registros',
            data: this._sRutaServicioLogisticoService.busquedaDto,
            error
          });
          this._sRutaServicioLogisticoService._notificacionService.anadir({
            titulo: 'Error',
            detalle: 'Error del servidor',
            severidad: 'error'
          });
          this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
        }
      );
  }

  formularioValidoBusqueda(formularioBusquedaValido: TodosCamposValidados): void {
    this.formularioBusqueda = formularioBusquedaValido;
    if (formularioBusquedaValido.valido) {
      this._sRutaServicioLogisticoService.setearCamposBusquedaValidos(
          formularioBusquedaValido,
          ServicioLogisticoBusquedaDto
      );
      // Transforma objetos a valores, si no hay objetos en la busqueda
      // como un autocomplete o select por ejemplo, entonces dejar vacío.
      const arregloCamposBusquedaConObjeto: ObjetoBusquedaADto[] = [
        // {
        //   nombreCampoEnBusqueda: 'sisHabilitado',
        //   nombreCampoEnDto: 'sisHabilitado'
        // }
      ];
      this._sRutaServicioLogisticoService.transformarObjetosBusquedaABusquedaDto(
        arregloCamposBusquedaConObjeto
      );
    }
  }

  cambioCampoBusqueda(eventoCambioCampoBusqueca: EventoCambioFormulario): void {
    const campoBusquedaActualizado = eventoCambioCampoBusqueca.campoFormulario;
    if (campoBusquedaActualizado) {
      this._sRutaServicioLogisticoService
        .setearCamposBusquedaAUndefined(
          campoVigencia,
          ServicioLogisticoBusquedaDto
        );
    }

  }

  formularioCrearEditarCambioAutocomplete(evento: EventoCambioAutocomplete,
                                          registro?: ServicioLogisticoInterface): void {
    if (evento.campoFormulario) {
      // switch (evento.campoFormulario.nombreCampo) {
      //   case 'nombreCampo': // nombres de cada uno de los campos autocomplete
      //     // this.buscarAutocompleteNombreCampo(evento); ejecutar una búsqueda con los servicios pertinentes
      //     break;
      // }
    }
  }

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
                              registro?: ServicioLogisticoInterface): void {
    this._sRutaServicioLogisticoService.setearFormularioEnModal(estaValido);
    if (estaValido.valido) {
      this.formularioCrearEditar = estaValido;
      this.botonAceptarModalDisabled = false;
    } else {
      this.botonAceptarModalDisabled = true;
    }
  }

  formularioCrearEditarCambioCampo(eventoCambioCampo: EventoCambioFormulario,
                                   registro?: ServicioLogisticoInterface): void {
    if (eventoCambioCampo.campoFormulario) {
        // Esta parte del codigo solo se debe de utilizar
        // si existe cambios de estructura del formulario
        // EJ: si selecciona el valor X de un campo entonces muestro tales campos
        // const formularioValido = {
        //   valido: false,
        //   camposFormulario: [eventoCambioCampo.campoFormulario],
        // };
        // this._sRutaServicioLogisticoService.setearFormularioEnModal(formularioValido);
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
//       {
//         nombrePropiedad: 'nombreOtro',
//         nombresCamposRequeridosQueAfecta: ['campoTres', 'campoCuatro']
//       },
//     ];
//
//     this._sRutaServicioLogisticoService.establecerValidezDeFormulario<RutaArticuloComponent>(
//         this,
//         camposAEstablecerValidezArreglo,
//         valorCampoValidez,
//         nombrePropiedadValidez,
//     );
//   }

  crearEditar(
    registro?: ServicioLogisticoInterface,
  ): void {
    if (registro) {
      this.editar(registro);
    } else {
      this.crear();
    }
  }

  crear(): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRutaServicioLogisticoService.obtenerCampos<CrearServicioLogistico>(
        CrearServicioLogistico, this.formularioCrearEditar
      );
      // Transforma objetos a valores, si no hay objetos en el formulario
      // como un autocomplete por ejemplo, se debe dejar vacío.
      const arregloPropiedades: SetearObjeto[] = [];
      camposCrear.objetoCrear = this._sRutaServicioLogisticoService.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );

      // Setear campos extra
      // Ej:
      // camposCrear.objetoCrear.habilitado = 1;

      if (this._sRutaServicioLogisticoService.busquedaDto) {
        this._sRutaServicioLogisticoService._cargandoService.habilitarCargando();
        this._sRutaServicioLogisticoService
          ._servicioLogisticoService
          .crear(
            camposCrear.objetoCrear
          )
          .pipe(
            this._sRutaServicioLogisticoService.buscarDeNuevo('idSLogisticos')
          )
          .subscribe(
            (nuevoRegistro) => {
              nuevoRegistro.habilitado = true;
              this._sRutaServicioLogisticoService.arregloDatos.unshift(nuevoRegistro);
              this._sRutaServicioLogisticoService.arregloDatosFiltrado.unshift(nuevoRegistro);
              this._sRutaServicioLogisticoService.matDialog.closeAll();
              this._sRutaServicioLogisticoService._notificacionService.anadir({
                titulo: 'Éxito',
                detalle: 'Creo nuevo registro',
                severidad: 'success'
              });
              this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRutaServicioLogisticoService.busquedaDto,
                error
              });
              this._sRutaServicioLogisticoService._notificacionService.anadir({
                titulo: 'Error',
                detalle: 'Error del servidor',
                severidad: 'error'
              });
              this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }

  editar(
    registro: ServicioLogisticoInterface,
  ): void {
    if (this.formularioCrearEditar) {
      const camposCrear = this._sRutaServicioLogisticoService.obtenerCampos<ActualizarServicioLogistico>(
        ActualizarServicioLogistico, this.formularioCrearEditar
      );
      const arregloPropiedades: SetearObjeto[] = [];
      camposCrear.objetoCrear = this._sRutaServicioLogisticoService.setearValoresDeObjetos(
        camposCrear.objetoCrear,
        arregloPropiedades
      );
      if (registro.idSLogisticos) {
        this._sRutaServicioLogisticoService._cargandoService.habilitarCargando();
        this._sRutaServicioLogisticoService
          ._servicioLogisticoService
          .actualizar(
            camposCrear.objetoCrear,
            registro.idSLogisticos
          )
          .pipe(
            this._sRutaServicioLogisticoService.buscarDeNuevo('idSLogisticos', registro.idSLogisticos)
          )
          .subscribe(
            (registroEditado) => {
              registroEditado.habilitado = registro.habilitado;
              const indice = this._sRutaServicioLogisticoService.arregloDatos
                .findIndex(
                  (a: ServicioLogisticoInterface) => a.idSLogisticos === registro.idSLogisticos
                );
              this._sRutaServicioLogisticoService.arregloDatos[indice] = registroEditado;
              const indiceArregloFiltrado = this._sRutaServicioLogisticoService.arregloDatosFiltrado
                .findIndex(
                  (a: ServicioLogisticoInterface) => a.idSLogisticos === registro.idSLogisticos
                );
              this._sRutaServicioLogisticoService.arregloDatosFiltrado[indiceArregloFiltrado] = registroEditado;
              this._sRutaServicioLogisticoService.matDialog.closeAll();
              this._sRutaServicioLogisticoService._notificacionService.anadir({
                titulo: 'Éxito',
                detalle: 'Edito registro',
                severidad: 'success'
              });
              this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
            },
            (error) => {
              console.error({
                mensaje: 'Error cargando registros',
                data: this._sRutaServicioLogisticoService.busquedaDto,
                error
              });
              this._sRutaServicioLogisticoService._notificacionService.anadir({
                titulo: 'Error',
                detalle: 'Error del servidor',
                severidad: 'error'
              });
              this._sRutaServicioLogisticoService._cargandoService.deshabilitarCargando();
            }
          );
      }
    }
  }
}
