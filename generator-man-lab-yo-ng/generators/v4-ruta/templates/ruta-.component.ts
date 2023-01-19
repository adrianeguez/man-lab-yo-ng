import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SortFieldInterface} from "../../../../interfaces/sort-field.interface";
import {<%= nombreMayuscula %>Sort} from "../../servicios/<%= nombreGuiones %>/sort/<%= nombreGuiones %>.sort";
import {CrudRutaEvento} from "../../../../componentes/rutas/contenedor-ruta/interfaces/crud-ruta.evento";
import {EventosComunesEnum} from "../../../../enums/eventos-comunes.enum";
import {CrudRutaEnum} from "../../../../componentes/rutas/contenedor-ruta/enums/crud-ruta.enum";
import {<%= nombreMayuscula %>BusquedaDto} from "../../../../generated/api-solo-back";
import {<%= nombreMayuscula %>HttpService} from "../../servicios/<%= nombreGuiones %>/http/<%= nombreGuiones %>.http.service";
import {EventoComunHandlerService} from "../../../../servicios/eventos/evento-comun-handler.service";
import {CrudRutaComponent} from "../../../../componentes/rutas/contenedor-ruta/crud-ruta/crud-ruta.component";
import {<%= nombreMayuscula %>FindDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.find.dto";
import {MatDialog} from "@angular/material/dialog";
import {FormGroup} from '@angular/forms';
import {
  <%= nombreMayuscula %>UpdateHabilitadoDto
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update-habilitado.dto";
import {Subscription} from "rxjs";
import {COLORES} from "../../../../constantes/ui/colores";
import {SKIP_TAKE} from "../../../../constantes/ui/skip-take";
import {DialogoManticoreComponent} from "../../../../componentes/dialogo-manticore/dialogo-manticore.component";
import {
  ParametrosDialogoManticore
} from "../../../../componentes/dialogo-manticore/interfaces/parametros-dialogo-manticore";
import {
  RespuestaDialogoConfirmacion
} from "../../../../componentes/dialogo-manticore/interfaces/respuesta-dialogo-confirmacion";
import {
  DialogoConfirmacionTexto
} from "../../../../componentes/dialogo-manticore/enums/dialogo-confirmacion-texto";
import {TranslationConstantes} from "../../../../constantes/translation/translation.constantes";
import {
  FullDialogAngularMaterialConfiguration
} from "../../../../constantes/ui/full-dialog-angular-material-configuration";
import {FieldType, FieldTypeConfig} from "@ngx-formly/core";
import {
  FormMantiFormly,
} from "../../../../interfaces/angular-form.interface";
import {TranslateService} from "@ngx-translate/core";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {CargandoService} from "../../../../servicios/cargando/cargando.service";
import {
  AutocompleteManticoreComponent
} from "../../../../componentes/autocomplete-manticore/autocomplete-manticore.component";
import {
  AutocompleteManticoreParametros
} from "../../../../componentes/autocomplete-manticore/interfaces/autocomplete-manticore-parametros";
import {<%= nombreMayuscula %>Dto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.dto";
import {<%= nombreMayuscula %>CreateDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.create.dto";
import {SisHabilitadoEnum} from "../../../../enums/sis-habilitado.enum";
import {obtenerValoresModel} from "../../../../constantes/formularios/obtener-valores-model";
import {
  <%= nombreMayuscula %>UpdateDto,
  <%= nombreMayuscula %>UpdateFormDto
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update.dto";
import {<%= nombreMayuscula %>Select} from "../../servicios/<%= nombreGuiones %>/forms/constantes/<%= nombreGuiones %>-select";
import {SortOrderEnum} from "../../../../enums/sort-order.enum";
import {nombreModuloNest} from "../../nombre-modulo-nest";

@Component({
  selector: 'manti-ruta-<%= nombreGuiones %>',
  templateUrl: './ruta-<%= nombreGuiones %>.component.html',
  styleUrls: ['./ruta-<%= nombreGuiones %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ruta<%= nombreMayuscula %>Component implements OnInit {
  identificadorRuta<%= nombreMayuscula %> = '<%= nombreGuiones %>';
  colorDot = COLORES.principal;
  colorBorde = COLORES.principal;
  translationConstantes = TranslationConstantes;
  @ViewChild('ComponenteDialogoVisualizacion<%= nombreMayuscula %>') public componenteDialogoVisualizacion<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('ComponenteDialogoVisualizacionAcciones<%= nombreMayuscula %>') public componenteDialogoAcciones<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('Mostrar<%= nombreMayuscula %>') public mostrar<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('Autocomplete<%= nombreMayuscula %>') public autocomplete<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('MantiCrearEditarFormulario<%= nombreMayuscula %>') public mantiCrearEditarFormulario<%= nombreMayuscula %>: TemplateRef<any>;
  sortFields<%= nombreMayuscula %>: SortFieldInterface[] = [...<%= nombreMayuscula %>Sort];
  registrosActuales<%= nombreMayuscula %>: [<%= nombreMayuscula %>Dto[], number] = [[], 0];
  findDto<%= nombreMayuscula %>: <%= nombreMayuscula %>BusquedaDto = this.settearFindDTO<%= nombreMayuscula %>();
  registroActual<%= nombreMayuscula %>?: <%= nombreMayuscula %>Dto;
  componenteCrudRuta<%= nombreMayuscula %>!: CrudRutaComponent;
  form<%= nombreMayuscula %>CreateDto: FormMantiFormly<<%= nombreMayuscula %>CreateDto> = {
    form: new FormGroup({}),
    model: this.resetear<%= nombreMayuscula %>CreateDtoModel(),
  };
  form<%= nombreMayuscula %>UpdateDto?: FormMantiFormly<<%= nombreMayuscula %>UpdateFormDto>;
  form<%= nombreMayuscula %>FindDto: FormMantiFormly<<%= nombreMayuscula %>FindDto> = {
    form: new FormGroup({}),
    model: this.resetear<%= nombreMayuscula %>FindDtoModel(),
  };
  datosAutocomplete: any[] = [];
  nombreModulo = nombreModuloNest;

  constructor(
      public readonly <%= nombreCamel %>HttpService: <%= nombreMayuscula %>HttpService,
      public readonly eventoComunHandlerService: EventoComunHandlerService,
      public readonly matDialog: MatDialog,
      public readonly translateService: TranslateService, // No eliminar
      private readonly bottomSheet: MatBottomSheet,
      private readonly cargandoService: CargandoService,
  ) {
    translateService;
  }

  ngOnInit(): void {
  }

  manejarEventos(evento: CrudRutaEvento): void {
    if (evento.identificador === this.identificadorRuta<%= nombreMayuscula %>) {
      this.manejarEvento<%= nombreMayuscula %>(evento);
    }
  }

  manejarEvento<%= nombreMayuscula %>(evento: CrudRutaEvento) {
    const crudRutaComponente: CrudRutaComponent<
        <%= nombreMayuscula %>Dto,
        <%= nombreMayuscula %>FindDto,
        <%= nombreMayuscula %>UpdateHabilitadoDto,
        <%= nombreMayuscula %>CreateDto,
        <%= nombreMayuscula %>UpdateDto,
        Ruta<%= nombreMayuscula %>Component
    > = evento.contextoThis;
    if (evento.eventoGeneral === EventosComunesEnum.HTTP) {
      if (evento.eventoEspecifico === CrudRutaEnum.DatosCargados) {
        this.registrosActuales<%= nombreMayuscula %> = evento.objeto;
      }
    }
    if (evento.eventoGeneral === EventosComunesEnum.CRUD) {
      if (evento.eventoEspecifico === CrudRutaEnum.AbrirFiltros) {
        this.componenteCrudRuta<%= nombreMayuscula %> = evento.contextoThis;
      }
      if (evento.eventoEspecifico === CrudRutaEnum.AbrirCrearEditar) {
        this.abrirCrearEditarDialogo<%= nombreMayuscula %>(crudRutaComponente);
      }
      if (evento.eventoEspecifico === CrudRutaEnum.CrearEditarConfirmado) {
        this.crearEditar<%= nombreMayuscula %>(crudRutaComponente, evento.objeto as boolean);
      }
      if (evento.eventoEspecifico === CrudRutaEnum.LimpiarRegistroCrearEditar) {
        this.registroActual<%= nombreMayuscula %> = undefined;
        this.form<%= nombreMayuscula %>UpdateDto = undefined;
        this.form<%= nombreMayuscula %>CreateDto.model = this.resetear<%= nombreMayuscula %>CreateDtoModel();
        this.form<%= nombreMayuscula %>CreateDto.form.reset();
      }
    }
    const respuestaHandlerResponse = this.eventoComunHandlerService.handleResponse(evento, 'modulo-nest.<%= nombreCamel %>.nombreRuta');
    if (!respuestaHandlerResponse.completado) {
      // handle custom responses
    }
  }

  manejarEventosError(evento: CrudRutaEvento): void {
    const respuestaHandlerError = this.eventoComunHandlerService.handleError(evento);
    if (!respuestaHandlerError.completado) {
      // handle custom errors
    }
  }
  editarRegistroAbrirDialogo<%= nombreMayuscula %>(crudRutaComponente: CrudRutaComponent<<%= nombreMayuscula %>Dto, <%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>UpdateHabilitadoDto>): void {
    this.componenteCrudRuta<%= nombreMayuscula %> = crudRutaComponente;
    this.registroActual<%= nombreMayuscula %> = crudRutaComponente.registroActual;
    this.form<%= nombreMayuscula %>UpdateDto = {
      form: new FormGroup({}),
      model: this.resetearUpdateDtoModel<%= nombreMayuscula %>(),
    };
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    this.abrirCrearEditarDialogo<%= nombreMayuscula %>(crudRutaComponente, true);
  }


  abrirCrearEditarDialogo<%= nombreMayuscula %>(
      crudRutaComponente: CrudRutaComponent<
          <%= nombreMayuscula %>Dto,
          <%= nombreMayuscula %>FindDto,
          <%= nombreMayuscula %>UpdateHabilitadoDto,
          <%= nombreMayuscula %>CreateDto,
          <%= nombreMayuscula %>UpdateDto,
          Ruta<%= nombreMayuscula %>Component
      >,
      editar = false
  ) {
    crudRutaComponente.crearEditarAbrirModal(
        crudRutaComponente,
        {
          textoBotonAceptar: DialogoConfirmacionTexto.comunesAceptar,
          textoBotonCancelar: DialogoConfirmacionTexto.comunesCancelar,
          textoParrafo: editar ? DialogoConfirmacionTexto.comunesConfirmacionEditar : DialogoConfirmacionTexto.comunesConfirmacionCrear,
          titulo: editar ? DialogoConfirmacionTexto.comunesConfirmacionEditar : DialogoConfirmacionTexto.comunesConfirmacionCrear,
          componenteDialogo: this.mantiCrearEditarFormulario<%= nombreMayuscula %>,
          contextoComponente: this,
          form: (editar && this.form<%= nombreMayuscula %>UpdateDto) ? this.form<%= nombreMayuscula %>UpdateDto.form : this.form<%= nombreMayuscula %>CreateDto.form
        }
    );
  }

  crearEditar<%= nombreMayuscula %>(
      crudRutaComponente: CrudRutaComponent<
          <%= nombreMayuscula %>Dto,
          <%= nombreMayuscula %>FindDto,
          <%= nombreMayuscula %>UpdateHabilitadoDto,
          <%= nombreMayuscula %>CreateDto,
          <%= nombreMayuscula %>UpdateDto,
          Ruta<%= nombreMayuscula %>Component
      >,
      editar = false
  ) {
    let dto: <%= nombreMayuscula %>CreateDto | <%= nombreMayuscula %>UpdateDto
    if (editar && this.form<%= nombreMayuscula %>UpdateDto) {
      dto = obtenerValoresModel<<%= nombreMayuscula %>UpdateDto>(this.form<%= nombreMayuscula %>UpdateDto.model, false);
    } else {
      dto = obtenerValoresModel<<%= nombreMayuscula %>CreateDto>(this.form<%= nombreMayuscula %>CreateDto.model);
    }
    crudRutaComponente.crearEditarComponenteRuta(dto, editar);
  }



  eliminarRegistro<%= nombreMayuscula %>(
      crudRutaComponente: CrudRutaComponent<
          <%= nombreMayuscula %>Dto,
          <%= nombreMayuscula %>FindDto,
          <%= nombreMayuscula %>UpdateHabilitadoDto
      >
  ): void {
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    const dialogo$ = this.matDialog.open<
        DialogoManticoreComponent,
        ParametrosDialogoManticore,
        RespuestaDialogoConfirmacion
    >(DialogoManticoreComponent, {
      data: {
        textoBotonAceptar: DialogoConfirmacionTexto.comunesAceptar,
        textoBotonCancelar: DialogoConfirmacionTexto.comunesCancelar,
        textoParrafo: DialogoConfirmacionTexto.comunesConfirmacionTexto,
        titulo: DialogoConfirmacionTexto.comunesConfirmacion,
        // componenteDialogo: this.componenteDialogo,
        contextoComponente: this
      },
    });
    const subsDialogo$: Subscription = dialogo$.afterClosed()
        .subscribe({
              next: (respuesta) => {
                if (respuesta?.confirmado) {
                  if (crudRutaComponente.registroActual) {
                    const valorHabilitado: <%= nombreMayuscula %>UpdateHabilitadoDto = {
                      sisHabilitado: crudRutaComponente.registroActual.sisHabilitado === 1 ? 0 : 1,
                    }
                    crudRutaComponente.modificarHabilitado(
                        crudRutaComponente.registroActual.id.toString(),
                        valorHabilitado
                    );
                  }
                }
              },
              complete: () => subsDialogo$.unsubscribe()
            }
        );
  }

  settearFindDTO<%= nombreMayuscula %>() {
    this.findDto<%= nombreMayuscula %> = {
      skip: SKIP_TAKE.skip,
      take: SKIP_TAKE.take,
    };
    const sort = <%= nombreMayuscula %>Sort.find(a=>a.sortField === 'sisCreado');
    if(sort){
      this.findDto<%= nombreMayuscula %>.sortOrder = SortOrderEnum.Desc;
      this.findDto<%= nombreMayuscula %>.sortField = sort.sortField;
    }
    return this.findDto<%= nombreMayuscula %>;
  }

  visualizarRegistro<%= nombreMayuscula %>(
      crudRutaComponente: CrudRutaComponent<<%= nombreMayuscula %>Dto, <%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>UpdateHabilitadoDto>
  ): void {
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    this.registroActual<%= nombreMayuscula %> = crudRutaComponente.registroActual;
    this.matDialog.open<
        DialogoManticoreComponent,
        ParametrosDialogoManticore,
        RespuestaDialogoConfirmacion
    >(DialogoManticoreComponent, {
      data: {
        titulo: DialogoConfirmacionTexto.comunesVisualizar,
        textoBotonAceptar: DialogoConfirmacionTexto.comunesAceptar,
        textoBotonCancelar: DialogoConfirmacionTexto.comunesCancelar,
        componenteDialogoAcciones: this.componenteDialogoAcciones<%= nombreMayuscula %>,
        componenteDialogo: this.componenteDialogoVisualizacion<%= nombreMayuscula %>,
        contextoComponente: this
      },
      ...FullDialogAngularMaterialConfiguration
    });
  }

  setearRegistro<%= nombreMayuscula %>(
      componente: DialogoManticoreComponent<Ruta<%= nombreMayuscula %>Component>
  ): <%= nombreMayuscula %>Dto | void {
    if (componente.data.contextoComponente) {
      if (componente.data.contextoComponente.registroActual<%= nombreMayuscula %>) {
        this.registroActual<%= nombreMayuscula %> = {...componente.data.contextoComponente.registroActual<%= nombreMayuscula %>};
        return componente.data.contextoComponente.registroActual<%= nombreMayuscula %>;
      }
    }
  }

  cerrarDialogo<%= nombreMayuscula %>(
      componente: DialogoManticoreComponent<Ruta<%= nombreMayuscula %>Component>
  ): void {
    componente.confirmar(false);
  }

  buscar<%= nombreMayuscula %>EnComponenteRuta(componente: CrudRutaComponent<<%= nombreMayuscula %>Dto, <%= nombreMayuscula %>FindDto>) {
    const findDto: <%= nombreMayuscula %>FindDto = {
      ...componente.findDto,
      skip: '0',
      ...this.resetear<%= nombreMayuscula %>FindDtoModel(),
      ...obtenerValoresModel<<%= nombreMayuscula %>FindDto>(this.form<%= nombreMayuscula %>FindDto.model),
    };
    componente.abrirFiltros(false);
    componente.buscarRegistros(findDto);
  }

  resetear<%= nombreMayuscula %>FindDto() {
    this.settearFindDTO<%= nombreMayuscula %>();
    this.form<%= nombreMayuscula %>FindDto.form.reset();
  }

  resetear<%= nombreMayuscula %>FindDtoModel() {
    return {
      sisHabilitado: null,
      busqueda: null,
      sisCreado: null,
      sisModificado: null,
    };
  }

  resetear<%= nombreMayuscula %>CreateDtoModel() {
    return {
      nombre: '',
      sisHabilitado: SisHabilitadoEnum.Habilitado,
      isbn: '',
      generoLibro: '',
      descripcion: null
    }
  }

  resetearUpdateDtoModel<%= nombreMayuscula %>(): <%= nombreMayuscula %>UpdateFormDto {
    if (this.registroActual<%= nombreMayuscula %>) {
      const generoLibro = <%= nombreMayuscula %>Select.generoLibro.find((g) => g.code === this.registroActual<%= nombreMayuscula %>?.generoLibro)
      return {
        nombre: this.registroActual<%= nombreMayuscula %>.nombre,
        isbn: this.registroActual<%= nombreMayuscula %>.isbn,
        generoLibro: generoLibro ? generoLibro : <%= nombreMayuscula %>Select.generoLibro[0],
        descripcion: this.registroActual<%= nombreMayuscula %>.descripcion
      }
    }
    return {
      nombre: '',
      isbn: '',
      generoLibro: {
        code: '',
        name: ''
      },
      descripcion: null
    }
  }

  buscarAutocomplete<%= nombreMayuscula %>(busqueda?: string, abrir = false) {
    this.cargandoService.habilitarCargando();
    const busqueda$ = this.<%= nombreCamel %>HttpService.buscar({busqueda})
    const busquedaSubs$: Subscription = busqueda$
        .subscribe({
          next: (data) => {
            this.cargandoService.deshabilitarCargando();
            this.datosAutocomplete = data[0];
            if (abrir) {
              this.abrirAutocomplete<%= nombreMayuscula %>();
            }
          },
          error: () => {
            this.cargandoService.deshabilitarCargando();
            this.eventoComunHandlerService.emitirError(this.eventoComunHandlerService.errorPorTipo[CrudRutaEnum.ErrorBuscar], 'errores.servidor')
          },
          complete: () => busquedaSubs$.unsubscribe()
        })
  }

  abrirAutocomplete<%= nombreMayuscula %>() {
    const bottomSheet$ = this.bottomSheet.open<AutocompleteManticoreComponent, AutocompleteManticoreParametros<Ruta<%= nombreMayuscula %>Component>, <%= nombreMayuscula %>Dto>(
        AutocompleteManticoreComponent,
        {
          data: {
            autocompleteTemplate: this.autocomplete<%= nombreMayuscula %>,
            componente: this,
          }
        })
        .afterDismissed();
    const subsBottomSheet$: Subscription = bottomSheet$
        .subscribe({
          next: (registro: <%= nombreMayuscula %>Dto | undefined) => {

            const busqueda = this.form<%= nombreMayuscula %>FindDto.form.get("busqueda");
            if (busqueda && registro) {
              busqueda.setValue(registro)
            }
          },
          complete: () => subsBottomSheet$.unsubscribe()
        });
  }

  seleccionarAutocomplete(
      autocompleteManticore: AutocompleteManticoreComponent<Ruta<%= nombreMayuscula %>Component>,
      registro: any
  ): void {
    autocompleteManticore.bottomSheetRef.dismiss(registro);
  }

  obtenerField<%= nombreMayuscula %>(field: FieldType<FieldTypeConfig>): { type: 'object' | 'number'; field?: <%= nombreMayuscula %>Dto; id?: number; } {
    if (typeof field.formControl.value === 'object') {
      return {
        field: field.formControl.value,
        type: 'object'
      };
    } else {
      return {
        id: field.formControl.value,
        type: 'number'
      }
    }
  }
}
