
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {
    ConfiguracionDisabledInterfaz,
    encerarFormBuilder,
    generarCampos,
    generarEmiteEmpezoTipear,
    generarMensajesFormGroup,
    establecerCamposDisabled,
    NO_EXISTEN_REGISTROS
} from '@manticore-labs/ng-api';
import {ToasterService} from 'angular2-toaster';
import {Operario} from './operario';
import {OperarioFormulario} from './operario-formulario';
import {debounceTime} from 'rxjs/operators';
import {CargandoService} from 'man-lab-ng';
import {TranslocoService} from '@ngneat/transloco';
import {ContactoEmpresa} from './contactoEmpresa';


@Component({
    selector: 'ml-operario-formulario',
    templateUrl: './operario-formulario.component.html'
})

export class OperarioFormularioComponent implements OnInit {

    @Output() operarioValido: EventEmitter<Operario | boolean> = new EventEmitter();

    @Output() empezoATipear: EventEmitter<boolean> = new EventEmitter();

    @Input() configuracionDisabled: ConfiguracionFormluarioOperario;

    operario: OperarioFormulario;

    NO_EXISTEN_REGISTROS = NO_EXISTEN_REGISTROS;

    mensajeToaster = '';

    objetoVariablesGlobales: ObjetoVariablesGlobalesOperario = {

        contactoEmpresas: [],
    };

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _cargandoService: CargandoService,
        private readonly _translocoService: TranslocoService,
        private _toasterService: ToasterService,
        private _contactoEmpresaRestService: ContactoEmpresaRestService,
         
        ) {

    }

    ngOnInit() {

        this.operario = new OperarioFormulario(
             this.configuracionDisabled.ContactoEmpresa.valor,
             this.configuracionDisabled.Nombres.valor,
        );

        // Empieza la construccion del formulario - No tocar estas lineas

        establecerCamposDisabled(this.configuracionDisabled, this.operario);
        this.operario.formGroup = this._formBuilder.group(encerarFormBuilder(this.operario));
        generarMensajesFormGroup(this.configuracionDisabled, this.operario);
        generarEmiteEmpezoTipear(this.operario, this.empezoATipear);

        // Termina la construccion del formulario - No tocar estas lineas

        this.operario
            .formGroup
            .valueChanges
            .pipe(
                debounceTime(1000)
            )
            .subscribe(
                camposValidados => {

                    console.log(this.operario.formGroup);

                    this.mensajeToaster = '';

                    if (this.operario.formGroup.valid && this.validacionesCampos()) {

                        this.operarioValido.emit(generarCampos(this.operario));
                        this
                            ._toasterService
                            .pop(
                                'info', 
                                this._translocoService.translate('formularios.comunes.valido'), 
                                this._translocoService.translate('submoduloArticulos.moduloGrupo.grupoFormulario.toasterGeneral')
                            );

                    } else {

                        if (this.mensajeToaster !== '') {
                            this._toasterService.pop('warning', this._translocoService.translate('formularios.comunes.cuidado'), this.mensajeToaster);
                        }
                        this.operarioValido.emit(false);
                    }
                }
            );
    }

    validacionesCampos() {
        return this.validarEjemplo()&& this.validarContactoEmpresa() ;
    }

    validarEjemplo() {
        return true; // Implementacion de validacion ejemplo
    }


    validarContactoEmpresa() {
        const valorCampo = this.operario.formGroup.get('contactoEmpresa').value;
        if (valorCampo !== null || valorCampo !== undefined) {
            const contactoEmpresaValorActual = valorCampo.id;
            let contactoEmpresaEncontrado = this.objetoVariablesGlobales.contactoEmpresas.find((registro) => registro.id === contactoEmpresaValorActual);
            if (contactoEmpresaEncontrado || typeof contactoEmpresaValorActual === 'number' || typeof valorCampo === 'object') {
              return true;
            } else {
              this.mensajeToaster = this
                    ._translocoService
                    .translate('submoduloArticulos.moduloGrupo.grupoFormulario.contactoEmpresa.toaster');
              return false;
            }
        }
      }
    
      buscarContactoEmpresas(evento) {
        this._cargandoService.habilitarCargando();
        let contactoEmpresas$;
        if (evento.query === '') {
            contactoEmpresas$ = this._contactoEmpresaRestService
                .findAll();
        } else {
            const consulta = { // lenar la consulta
                camposABuscar: [
                    { campo: 'ejemplo', valor: `%25${evento.query}%25` }
                ]
            }; 
            contactoEmpresas$ = this._contactoEmpresaRestService
                .findWhereOr('criterioBusqueda=' + JSON.stringify(consulta));
        }
        contactoEmpresas$
          .subscribe(
            (contactoEmpresas: ContactoEmpresa[]) => {
              this.objetoVariablesGlobales.contactoEmpresas = contactoEmpresas[0];
              this._cargandoService.deshabilitarCargando();
            },
            error => {
              this._cargandoService.deshabilitarCargando();
              console.error(error);
              this._toasterService.pop(
                    'error', 
                    this._translocoService
                        .translate('errores.errorTitulo'), 
                    this._translocoService
                        .translate('errores.errorServidor'), 
              );
              // Manejar errores
            }
          );
      }




}

// tslint:disable-next-line:no-empty-interface
interface ObjetoVariablesGlobalesOperario {
    contactoEmpresas: ContactoEmpresa[],

}

export interface ConfiguracionFormluarioOperario {
  Id?: ConfiguracionDisabledInterfaz;
  ContactoEmpresa?: ConfiguracionDisabledInterfaz;
  Nombres?: ConfiguracionDisabledInterfaz;
}

export const CONFIGURACION_OPERARIO = (): ConfiguracionFormluarioOperario => {
    return {
        Id: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },
        ContactoEmpresa: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },

        Nombres: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },

    };
};
