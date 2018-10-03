
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ConfiguracionDisabledInterfaz, encerarFormBuilder, generarCampos, generarEmiteEmpezoTipear, generarMensajesFormGroup, establecerCamposDisabled} from 'man-lab-ng';
import {ToasterService} from 'angular2-toaster';
import {Pais} from './pais';
import {PaisFormulario} from './pais-formulario';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-pais-formulario',
    templateUrl: './pais-formulario.component.html'
})

export class PaisFormularioComponent implements OnInit {

    @Output() paisValido: EventEmitter<Pais | boolean> = new EventEmitter();

    @Output() empezoATipear: EventEmitter<boolean> = new EventEmitter();

    @Input() configuracionDisabled: ConfiguracionFormluarioPais;

    pais: PaisFormulario;

    mensajeToaster = '';

    objetoVariablesGlobales: ObjetoVariablesGlobalesPais = {
        // llenar con objetos variables globales
    };

    constructor(private _formBuilder: FormBuilder,
        private _toasterService: ToasterService,) {

    }

    ngOnInit() {

        this.pais = new PaisFormulario(
             this.configuracionDisabled.Nombre.valor,
             this.configuracionDisabled.Apellido.valor,
             this.configuracionDisabled.Estado.valor,
        );

        // Empieza la construccion del formulario - No tocar estas lineas

        establecerCamposDisabled(this.configuracionDisabled, this.pais);
        this.pais.formGroup = this._formBuilder.group(encerarFormBuilder(this.pais));
        generarMensajesFormGroup(this.configuracionDisabled, this.pais);
        generarEmiteEmpezoTipear(this.pais, this.empezoATipear);

        // Termina la construccion del formulario - No tocar estas lineas

        this.pais
            .formGroup
            .valueChanges
            .pipe(
                debounceTime(1000)
            )
            .subscribe(
                camposValidados => {

                    console.info(this.pais.formGroup);

                    this.mensajeToaster = '';
                    
                    if (this.pais.formGroup.valid && this.validacionesCampos()) {

                        this.paisValido.emit(generarCampos(this.pais));
                        this._toasterService.pop('info', 'Valido', 'Pais válida ');

                    } else {

                        if (this.mensajeToaster !== '') {
                            this._toasterService.pop('warning', 'Cuidado', this.mensajeToaster);
                        }
                        this.paisValido.emit(false);
                    }
                }
            );
    }

    validacionesCampos() {
        return this.validarEjemplo(); // Aqui use para otras validaciones
    }

    validarEjemplo() {
        return true; // Implementacion de validacion ejemplo
    }
}

interface ObjetoVariablesGlobalesFunda {
    // llenar con objetos de validacion globales
}

export interface ConfiguracionFormluarioPais {
  Id?: ConfiguracionDisabledInterfaz;
  Nombre?: ConfiguracionDisabledInterfaz;
  Apellido?: ConfiguracionDisabledInterfaz;
  Estado?: ConfiguracionDisabledInterfaz;
}
        
export const CONFIGURACION_PAIS = (): ConfiguracionFormluarioPais => {
    return {
        Id: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },
        Nombre: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },

        Apellido: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },

        Estado: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },

    };
};