import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {<%= nombreMayuscula %>Sort} from "../../servicios/<%= nombreGuiones %>/sort/<%= nombreGuiones %>.sort";
import {
  <%= nombreMayuscula %>HttpService
} from "../../servicios/<%= nombreGuiones %>/http/<%= nombreGuiones %>.http.service";
import {<%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>FindFormDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.find.dto";
import {MatDialog} from "@angular/material/dialog";
import {FormGroup} from '@angular/forms';
import {
  <%= nombreMayuscula %>UpdateHabilitadoDto
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update-habilitado.dto";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {<%= nombreMayuscula %>Dto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.dto";
import {
  <%= nombreMayuscula %>CreateDto,
  <%= nombreMayuscula %>CreateFormDto
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.create.dto";
import {
  <%= nombreMayuscula %>UpdateDto, <%= nombreMayuscula %>UpdateFormDto,
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update.dto";
import {
  Ruta<%= nombreMayuscula %>Autocomplete<%= nombreMayuscula %>,
  Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>,
  Ruta<%= nombreMayuscula %>CrudRutaType,
  Ruta<%= nombreMayuscula %>DialogoSinForm,
  Ruta<%= nombreMayuscula %>DialogoSinFormParametros
} from "./ruta-<%= nombreGuiones %>-crud-ruta.type";
import {Ruta<%= nombreMayuscula %>TranslationConstante} from "./ruta-<%= nombreGuiones %>-translation.constante";

@Component({
  selector: 'manti-ruta-<%= nombreGuiones %>',
  templateUrl: './ruta-<%= nombreGuiones %>.component.html',
  styleUrls: ['./ruta-<%= nombreGuiones %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ruta<%= nombreMayuscula %>Component implements OnInit {
  templateContextoRuta<%= nombreMayuscula %>Component = this; // no eliminar
  nombreModulo = nombreModulo<%= nombreMayusculaModulo %>;
  identificadorRuta<%= nombreMayuscula %> = '<%= nombreGuiones %>';
  colorDot = COLORES.<%= nombreCamel %>;
  colorBorde = COLORES.<%= nombreCamel %>;
  translationConstantes = TranslationConstantes;
  ruta<%= nombreMayuscula %>TranslationConstante = Ruta<%= nombreMayuscula %>TranslationConstante;
  @ViewChild('ComponenteDialogoVisualizacion<%= nombreMayuscula %>') public componenteDialogoVisualizacion<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('ComponenteDialogoVisualizacionAcciones<%= nombreMayuscula %>') public componenteDialogoAcciones<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('Mostrar<%= nombreMayuscula %>') public mostrar<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('autocompleteListaValoresTipo') public autocomplete<%= nombreMayuscula %>: TemplateRef<any>;
  @ViewChild('MantiCrearEditarFormulario<%= nombreMayuscula %>') public mantiCrearEditarFormulario<%= nombreMayuscula %>: TemplateRef<any>;
  sortFields<%= nombreMayuscula %>: SortFieldInterface[] = [...<%= nombreMayuscula %>Sort];
  registrosActuales<%= nombreMayuscula %>: [<%= nombreMayuscula %>Dto[], number] = [[], 0];
  findDto<%= nombreMayuscula %>: <%= nombreMayuscula %>FindFormDto = this.settearFindDTO<%= nombreMayuscula %>();
  registroActual<%= nombreMayuscula %>?: <%= nombreMayuscula %>Dto;
  componenteCrudRuta<%= nombreMayuscula %>!: Ruta<%= nombreMayuscula %>CrudRutaType;
  form<%= nombreMayuscula %>CreateDto: FormMantiFormly<<%= nombreMayuscula %>CreateFormDto> = {
    form: new FormGroup({}),
    model: this.resetear<%= nombreMayuscula %>CreateDtoModel(),
  };
  form<%= nombreMayuscula %>UpdateDto?: FormMantiFormly<<%= nombreMayuscula %>UpdateFormDto>;
  form<%= nombreMayuscula %>FindDto: FormMantiFormly<<%= nombreMayuscula %>FindFormDto> = {
    form: new FormGroup({}),
    model: this.resetear<%= nombreMayuscula %>FindDtoModel(),
  };
  _tiposTemplate<%= nombreMayuscula %>: {
    templateContextoCrudRutaComponent: Ruta<%= nombreMayuscula %>CrudRutaType,
    templateContextoDialogoManticoreComponent: Ruta<%= nombreMayuscula %>DialogoSinForm,
    templateContextoAutocompleteManticoreComponent: Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>,
  };

  constructor(
      public readonly <%= nombreCamel %>HttpService: <%= nombreMayuscula %>HttpService,
      public readonly eventoComunHandlerService: EventoComunHandlerService,
      public readonly matDialog: MatDialog,
      public readonly translateService: TranslateService, // No eliminar
      private readonly bottomSheet: MatBottomSheet,
      public readonly cargandoService: CargandoService,
  ) {
    translateService;
  }

  ngOnInit(): void {
  }

  manejarEventos(
      evento: CrudRutaEvento
  ): void {
    if (evento.identificador === this.identificadorRuta<%= nombreMayuscula %>) {
      this.manejarEvento<%= nombreMayuscula %>(evento);
    }
  }

  manejarEvento<%= nombreMayuscula %>(
      evento: CrudRutaEvento
  ): void {
    const crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType = evento.contextoThis;
    this.componenteCrudRuta<%= nombreMayuscula %> = crudRutaComponente;
    if (evento.eventoGeneral === EventosComunesEnum.HTTP) {
      if (evento.eventoEspecifico === CrudRutaEnum.DatosCargados) {
        this.registrosActuales<%= nombreMayuscula %> = evento.objeto;
      }
    }
    if (evento.eventoGeneral === EventosComunesEnum.CRUD) {
      if (evento.eventoEspecifico === CrudRutaEnum.AbrirFiltros) {
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
    const respuestaHandlerResponse = this.eventoComunHandlerService.handleResponse(evento, this.nombreModulo + '.<%= nombreCamel %>.nombreRuta');
    if (!respuestaHandlerResponse.completado) {
      // handle custom responses
    }
  }

  manejarEventosError(
      evento: CrudRutaEvento
  ): void {
    const respuestaHandlerError = this.eventoComunHandlerService.handleError(evento);
    if (!respuestaHandlerError.completado) {
      // handle custom errors
    }
  }

  prepararAbrirCrearEditarDialogo<%= nombreMayuscula %>(
      crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType
  ): void {
    this.componenteCrudRuta<%= nombreMayuscula %> = crudRutaComponente;
    this.registroActual<%= nombreMayuscula %> = crudRutaComponente.registroActual;
    this.form<%= nombreMayuscula %>UpdateDto = {
      form: new FormGroup({}),
      model: this.resetear<%= nombreMayuscula %>UpdateDtoModel(),
    };
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    this.abrirCrearEditarDialogo<%= nombreMayuscula %>(crudRutaComponente, true);
  }


  abrirCrearEditarDialogo<%= nombreMayuscula %>(
      crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType,
      editar = false
  ): void {
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
        crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType,
        editar = false
  ): void {
      let dto: <%= nombreMayuscula %>CreateDto | <%= nombreMayuscula %>UpdateDto = {};
    if (editar && this.form<%= nombreMayuscula %>UpdateDto) {
      dto = this.editarSettearDTO<%= nombreMayuscula %>(
          this.form<%= nombreMayuscula %>UpdateDto.model,
          crudRutaComponente,
      );
    } else {
      dto = this.crearSettearDTO<%= nombreMayuscula %>(
          this.form<%= nombreMayuscula %>CreateDto.model,
          crudRutaComponente,
      );
    }
    crudRutaComponente.crearEditarComponenteRuta(dto, editar);
  }

    crearSettearDTO<%= nombreMayuscula %>(
        model: <%= nombreMayuscula %>CreateFormDto,
        crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType,
  ): <%= nombreMayuscula %>CrearDto {
      let dto: <%= nombreMayuscula %>CreateDto = {} as any;
      // model = crudRutaComponente.seleccionarIdONumberEnObjeto(
      //     model,
      //     <%= nombreMayuscula %>Enum.campoRelacion,
      //     'id'
      // );
      // LLENAR CUALQUIER OTRO CAMPO QUE SE NECESITE
      dto = obtenerValoresModel<<%= nombreMayuscula %>CreateDto>(model, false);
      return dto;
    }

    editarSettearDTO<%= nombreMayuscula %>(
        model: <%= nombreMayuscula %>UpdateFormDto,
        crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType,
  ): <%= nombreMayuscula %>UpdateDto {
      let dto: <%= nombreMayuscula %>UpdateDto = {} as any;
      // model = crudRutaComponente.seleccionarIdONumberEnObjeto(
      //     model,
      //     <%= nombreMayuscula %>Enum.campoRelacion,
      //     'id'
      // );
      // LLENAR CUALQUIER OTRO CAMPO QUE SE NECESITE
      dto = obtenerValoresModel<<%= nombreMayuscula %>UpdateDto>(model, false);
      return dto;
    }



  buscarSettearDTO<%= nombreMayuscula %>(
        model: <%= nombreMayuscula %>FindFormDto,
        crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType,
  ): <%= nombreMayuscula %>FindDto {
      let dto: <%= nombreMayuscula %>FindDto = {} as any;
      // model = crudRutaComponente.seleccionarIdONumberEnObjeto(
      //     model,
      //     <%= nombreMayuscula %>Enum.campoRelacion,
      //     'id'
      // );
      // LLENAR CUALQUIER OTRO CAMPO QUE SE NECESITE
      dto = obtenerValoresModel<<%= nombreMayuscula %>FindDto>(model, false);
      return dto;
    }


  eliminarRegistro<%= nombreMayuscula %>(
      crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType
  ): void {
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    const dialogo$ = this.matDialog.open<
        Ruta<%= nombreMayuscula %>DialogoSinForm,
        Ruta<%= nombreMayuscula %>DialogoSinFormParametros,
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
                      sisHabilitado: crudRutaComponente.registroActual.sisHabilitado === SisHabilitadoEnum.Habilitado ?
                          SisHabilitadoEnum.DesHabilitado :
                          SisHabilitadoEnum.Habilitado,
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

  settearFindDTO<%= nombreMayuscula %>(): <%= nombreMayuscula %>FindFormDto {
    this.findDto<%= nombreMayuscula %> = {
      skip: SKIP_TAKE.skip,
      take: SKIP_TAKE.take,
    };
    const sort = <%= nombreMayuscula %>Sort.find(a => a.sortField === SisMantiEnum.SisCreado);
    if (sort) {
      this.findDto<%= nombreMayuscula %>.sortOrder = SortOrderEnum.Desc;
      this.findDto<%= nombreMayuscula %>.sortField = sort.sortField;
    }
    return this.findDto<%= nombreMayuscula %>;
  }

  visualizarRegistro<%= nombreMayuscula %>(
      crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType
  ): void {
    crudRutaComponente.abrirOpciones(false, crudRutaComponente.registroActual);
    this.registroActual<%= nombreMayuscula %> = crudRutaComponente.registroActual;
    this.matDialog.open<
        Ruta<%= nombreMayuscula %>DialogoSinForm,
        Ruta<%= nombreMayuscula %>DialogoSinFormParametros,
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

  cerrarDialogo<%= nombreMayuscula %>(
      componente: Ruta<%= nombreMayuscula %>DialogoSinForm
  ): void {
    componente.confirmar(false);
  }

  buscar<%= nombreMayuscula %>EnComponenteRuta(
      crudRutaComponente: Ruta<%= nombreMayuscula %>CrudRutaType
): void {
    const dto = this.buscarSettearDTO<%= nombreMayuscula %>(
        this.form<%= nombreMayuscula %>FindDto.model,
        crudRutaComponente
    );
    const findDto: <%= nombreMayuscula %>FindDto = {
    ...crudRutaComponente.findDto,
    skip: '0',
    ...this.resetear<%= nombreMayuscula %>FindDtoModel(),
    ...dto
  };
  crudRutaComponente.abrirFiltros(false);
  crudRutaComponente.buscarRegistros(findDto);
}

  resetear<%= nombreMayuscula %>FindDto(): void {
    this.settearFindDTO<%= nombreMayuscula %>();
    this.form<%= nombreMayuscula %>FindDto.form.reset();
  }

  resetear<%= nombreMayuscula %>FindDtoModel(): <%= nombreMayuscula %>FindFormDto {
    return {
      sisHabilitado: null,
      busqueda: null,
      sisCreado: null,
      sisModificado: null,
      // campoNombre: null,
      // campoNombreLista: null,
      // campoRelacion: null,
    };
  }

  resetear<%= nombreMayuscula %>CreateDtoModel(): <%= nombreMayuscula %>CreateFormDto {
    return {
      sisHabilitado: SisHabilitadoEnum.Habilitado,
      // nombreCampo: '',
      // nombreCampoLista: '',
      // campoRelacion: null,
    }
  }

  resetear<%= nombreMayuscula %>UpdateDtoModel(): <%= nombreMayuscula %>UpdateFormDto {
    if (this.registroActual<%= nombreMayuscula %>) {
      //   const nombreCampoLista = <%= nombreMayuscula %>Select.nombreCampoLista.find((g) => g.codigoPrimario === this.registroActual<%= nombreMayuscula %>?.nombreCampoLista)
      return {
        //     nombreCampo: this.registroActual<%= nombreMayuscula %>.nombreCampo,
        //     nombreCampoLista: nombreCampoLista ? nombreCampoLista : <%= nombreMayuscula %>Select.nombreCampoLista[0],
        //     campoRelacion: this.registroActual<%= nombreMayuscula %>.campoRelacion,
      }
    }
    return {
      // nombreCampo: '',
      // nombreCampoLista: {
      //   codigoPrimario: '',
      //   pathTraduccion: ''
      // },
      // campoRelacion: null,
    }
  }

  seleccionarAutocomplete(
      autocompleteManticore: Ruta<%= nombreMayuscula %>Autocomplete<%= nombreMayuscula %>,
      registro: any
  ): void {
    autocompleteManticore.bottomSheetRef.dismiss(registro);
  }
}