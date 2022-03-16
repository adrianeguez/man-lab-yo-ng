import {Component, OnInit} from '@angular/core';
import {<%= nombreMayuscula %>ResponseDto} from '../../servicios/dto/<%= nombreGuiones %>.response-dto';
import {<%= nombreMayuscula %>FindDto} from '../../servicios/dto/<%= nombreGuiones %>.find-dto';
import {MatDialog} from '@angular/material/dialog';
import {Http<%= nombreMayuscula %>Service} from '../../servicios/http-<%= nombreGuiones %>-service';
import {ConfirmationService} from 'primeng/api';
import {FormGroup} from '@angular/forms';
import {<%= nombreMayuscula %>CreateDto} from '../../servicios/dto/<%= nombreGuiones %>.create-dto';
import {<%= nombreMayuscula %>UpdateDto} from '../../servicios/dto/<%= nombreGuiones %>.update-dto';
import {Form<%= nombreMayuscula %>Enum} from '../../form/form-<%= nombreGuiones %>.enum';
import {FORM_<%= nombreSoloMayusculas %>} from '../../form/form-<%= nombreGuiones %>';

@Component({
  selector: 'app-<%= nombreGuiones %>-tabla',
  templateUrl: './<%= nombreGuiones %>-tabla.component.html',
  styleUrls: ['./<%= nombreGuiones %>-tabla.component.scss']
})
export class <%= nombreMayuscula %>TablaComponent extends AbstractTable<<%= nombreMayuscula %>ResponseDto, <%= nombreMayuscula %>FindDto>
  implements OnInit, TableAbstractClass<<%= nombreMayuscula %>ResponseDto>, AutocompleteFormInterface {
  searchBarFormFields: FormField[] = [
    // {
    //   help: 'Puede buscar por nombre',
    //   formControlName: 'busqueda',
    //   initialValue: "",
    //   validators: [],
    //   type: fieldType.text,
    //   formGroup: new FormGroup({}),
    //   valid: false,
    //   label: 'Busqueda',
    //   placeholder: 'Ej: ...',
    //   column: '12',
    //   actualValue: '',
    // },
    // {
    //   label: 'Habilitado',
    //   formControlName: 'sisHabilitado',
    //   type: fieldType.select,
    //   help: 'Seleccione si esta habilitado o no',
    //   select:{
    //     filterBy:'sisHabilitado',
    //     dataKey:'sisHabilitado',
    //     filterPlaceholder:'0 = Inactivo, 1 = Activo',
    //     optionLabel: 'nombre',
    //     options:[
    //       {
    //         sisHabilitado:ActivoInactivo.Activo,
    //         nombre: 'Activo',
    //       },
    //       {
    //         sisHabilitado:ActivoInactivo.Inactivo,
    //         nombre: 'Inactivo',
    //       }
    //     ]
    //   },
    //   initialValue: "",
    //   validators: [],
    //   formGroup: new FormGroup({}),
    //   valid: false,
    //   placeholder: 'Ej: Activo / Inactivo',
    //   column: '6',
    //   actualValue: '',
    // },
  ];

  constructor(
    public blockuiService: BlockuiService,
    public logsMlabsService: LogsMlabsService,
    public dialog: MatDialog,
    public http<%= nombreMayuscula %>Service: Http<%= nombreMayuscula %>Service,
    public confirmationService: ConfirmationService,
  ) {
    super(
      http<%= nombreMayuscula %>Service,
      {
        nombreRegistro: '<%= nombreEspacioMayuscula %>',
        messageService: logsMlabsService,
        blockuiService: blockuiService,
        confirmationService: confirmationService,
      }
    )
  }

  ngOnInit(): void {
    this.stablishSkipAndTake(0, TAKE);
  }

  clearFindDto(): void {
    this.findDto.id = undefined;
    this.findDto.busqueda = undefined;
    this.findDto.sisHabilitado = undefined;
  }

  createOrEditModal(closeModal: ModalComponent): void {
    const values = this.getFormData(this.createEditFormArray, this.createEditFormGroup);
    if (this.create) {
      this.blockuiService.habilitarBlockUI();
      this.http<%= nombreMayuscula %>Service
        .createOne(values as <%= nombreMayuscula %>CreateDto)
        .subscribe({
          next: () => {
            this.blockuiService.deshabilitarBlockUI();
            this.parameters.messageService.toaster(
              MENSAGE_TOAST.creacionExitosa(
                this.parameters.nombreRegistro ? this.parameters.nombreRegistro : 'Registro'
              )
            );
            closeModal.closeModal();
            this.searchData();
          },
          error: (error) => {
            this.blockuiService.deshabilitarBlockUI();
            this.parameters.messageService.toaster(MENSAGE_TOAST.error());
            console.error({error: error, message: "Error creando <%= nombreEspacioMayuscula %>", data: values});
          },
        });
    } else {
      this.blockuiService.habilitarBlockUI();
      this.http<%= nombreMayuscula %>Service
        .updateById(values as <%= nombreMayuscula %>UpdateDto, this.recordUpdated.id as number)
        .subscribe({
          next: () => {
            this.blockuiService.deshabilitarBlockUI();
            this.parameters.messageService.toaster(
              MENSAGE_TOAST.creacionExitosa(
                this.parameters.nombreRegistro ? this.parameters.nombreRegistro : 'Registro'
              )
            );
            closeModal.closeModal();
            this.searchData();
          },
          error: (error) => {
            this.blockuiService.deshabilitarBlockUI();
            this.parameters.messageService.toaster(MENSAGE_TOAST.error());
            console.error({error: error, message: "Error actualizando <%= nombreEspacioMayuscula %>", data: values});
          },
        });
    }
  }

  fieldModalChanged(event: FormField, enableButton: ModalComponent): void {
    if (event.formGroup.valid) {
      this.createEditFormGroup = event.formGroup;
      enableButton.enableButton(true);
    } else {
      this.createEditFormGroup = new FormGroup({});
      enableButton.enableButton(false);
    }
  }

  openDialog(formFields: FormField[], arrayAccordeon: AccordeonForms[] = []): void {
    const createUpdateModalParameters: CreateUpdateModalParameters = {
      title: `${this.create ? 'Crear ' : 'Actualizar'} ${this.parameters.nombreRegistro}`,
      description: "Por favor llene la informacion pertinente.",
      accordeons: arrayAccordeon,
      formsFields: formFields,
      button: `${this.create ? 'Crear ' : 'Actualizar'} `,
      route: this,
    };
    const dialogRef = this.dialog.open(CreateUpdateModalComponent, {
      data: createUpdateModalParameters,
    });
  }

  searchFieldChanged(event: FormField): void {
    if (event.valid) {
      // setear formgroup
      this.findForm = event.formGroup;
      if (event.formControlName === 'busqueda') {
        this.findDto.busqueda = event.actualValue
      }
      if (event.formControlName === 'sisHabilitado') {
        this.findDto.sisHabilitado = event.actualValue?.sisHabilitado
      }
      // Habilitar boton
      this.searchButtonDisabled = false;
    } else {
      // limpiar dto
      this.clearFindDto();
      // Deshabilitar boton
      this.searchButtonDisabled = false;
    }
  }

  searchAutoComplete(event: SearchAutoCompleteInterface): void {
    // switch (event.field.formControlName) {
    //   case Form<%= nombreMayuscula %>Enum.generoLibro:
    //     this.buscarAutocomplete(event);
    // }
  }

  // buscarAutocomplete(evento: SearchAutoCompleteInterface) {
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


  createOrEdit(record?: <%= nombreMayuscula %>ResponseDto) {
    const formArray = [
      ...FORM_<%= nombreSoloMayusculas %>(),
    ];
    this.createEditFormArray = [...formArray];
    if (record) {
      this.recordUpdated = {...record};
      this.fillForm(this.recordUpdated, this.createEditFormArray);
      this.create = false;
    } else {
      this.create = true;
      this.recordUpdated = undefined;
    }
    this.openDialog(this.createEditFormArray);
  }

}
