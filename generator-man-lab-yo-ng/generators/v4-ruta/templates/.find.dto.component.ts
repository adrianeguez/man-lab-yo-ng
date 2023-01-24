import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {<%= nombreMayuscula %>FindDto} from "../../dto/<%= nombreGuiones %>.find.dto";
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";

@Component({
    selector: 'manti-<%= nombreGuiones %>-find-dto',
    templateUrl: './<%= nombreGuiones %>.find.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.find.dto.component.scss'],
})
export class <%= nombreMayuscula %>FindDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>FindDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>FindDto>;
    @Input() formlyOptions: FormlyFormOptions = {};
    // @ViewChild('itemNombreCampoLista') public itemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('selectedItemNombreCampoLista') public selectedItemNombreCampoLista!: TemplateRef<any>;
    @ViewChild('itemSisHabilitado') public itemSisHabilitado!: TemplateRef<any>;
    @ViewChild('selectedItemSisHabilitado') public selectedItemSisHabilitado!: TemplateRef<any>;
    nombreModulo = nombreModulo_LLENAR;
    fields: ArregloFormlyTraducido = (
        componente: AngularFormInterface
    ) => {
        return [
            ...FormularioBusquedaComunDto(
                componente,
                this.nombreModulo +'.findDto.busqueda.placeholder',
                this.nombreModulo +'.findDto.busqueda.ayuda',
                this.itemSisHabilitado,
                this.selectedItemSisHabilitado,
                this.localSettings
            ),
        ]
    };



    constructor(
        private readonly translateService: TranslateService,
        private readonly config: PrimeNGConfig
    ) {
        super(translateService, config);
    }

    ngAfterViewInit() {
        const campos = this.fields(this.ruta);
        const grupoFormularioUno: FormularioMantiFormly<<%= nombreMayuscula %>FindDto> = {
            fields: campos.filter(a => a.id === SisMantiEnum.Busqueda || a.id === SisHabilitadoKeysEnum.Habilitado),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        };
        this.arregloCampos.push({
            formularios: grupoFormularioUno,
            titulo: 'comunes.opcionesComunes',
            descripcion: '',
        });
        const grupoFormularioDos: FormularioMantiFormly<<%= nombreMayuscula %>FindDto> = {
            fields: campos.filter(a => a.id === SisMantiEnum.SisCreado || a.id === SisMantiEnum.SisModificado),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        }
        this.arregloCampos.push({
            formularios: grupoFormularioDos,
            titulo: 'comunes.fecha',
            descripcion: '',
        });
        this.formularioManti = {
            fields: this.fields(this.ruta),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        };
    };

}
