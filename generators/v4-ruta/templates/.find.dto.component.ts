import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {<%= nombreMayuscula %>FindFormDto} from "../../dto/<%= nombreGuiones %>.find.dto";
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";
import {<%= nombreMayuscula %>Enum} from "../../enum/<%= nombreGuiones %>-enum";
import {
    Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>,
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-crud-ruta.type";
import {<%= nombreMayuscula %>Autocomplete} from "../constantes/<%= nombreGuiones %>-autocomplete";
import {
    Ruta<%= nombreMayuscula %>TranslationConstante
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-translation.constante";

@Component({
    selector: 'manti-<%= nombreGuiones %>-find-dto',
    templateUrl: './<%= nombreGuiones %>.find.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.find.dto.component.scss'],
})
export class <%= nombreMayuscula %>FindDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>FindFormDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>FindFormDto>;
    @Input() formlyOptions: FormlyFormOptions = {};
    ruta<%= nombreMayuscula %>TranslationConstante = Ruta<%= nombreMayuscula %>TranslationConstante;
    // @ViewChild('itemNombreCampoLista') public itemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('selectedItemNombreCampoLista') public selectedItemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('autocompleteMostrarNombreRelacion') public autocompleteMostrarNombreRelacion!: TemplateRef<any>;
    // @ViewChild('autocompleteListarNombreRelacion') public autocompleteListarNombreRelacion!: TemplateRef<any>;

    @ViewChild('itemSisHabilitado') public itemSisHabilitado!: TemplateRef<any>;
    @ViewChild('selectedItemSisHabilitado') public selectedItemSisHabilitado!: TemplateRef<any>;
    _tiposTemplate<%= nombreMayuscula %>: {
        templateContextoAutocompleteManticoreComponent: Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>,
    };
    nombreModulo = nombreModulo<%= nombreMayusculaModulo %>;
    fields: ArregloCamposMantiDto = (
        componente: AngularFormInterface
    ) => {
        return [
            ...FormularioBusquedaComunDto(
                componente,
                this.nombreModulo + '.listaValoresDetalle.findDto.busqueda.placeholder',
                this.nombreModulo + '.listaValoresDetalle.findDto.busqueda.ayuda',
                this.itemSisHabilitado,
                this.selectedItemSisHabilitado,
                this.localSettings
            ),
            // <%= nombreMayuscula %>Autocomplete(this).listaValoresTipo,
        ]
    };

    constructor(
        public readonly translateService: TranslateService,
        public readonly config: PrimeNGConfig
    ) {
        super(translateService, config);
    }

    ngAfterViewInit() {
        this.campos = this.fields(this.ruta);
        const grupoFormularioUno: FormularioMantiFormly<<%= nombreMayuscula %>FindFormDto> = {
            fields: this.campos.filter(a => a.id === SisMantiEnum.Busqueda
            || a.id === SisHabilitadoKeysEnum.Habilitado
            // || a.id === <%= nombreMayuscula %>Enum.campoRelacion
            // || a.id === <%= nombreMayuscula %>Enum.nombreCampoLista
            ),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        };
        this.arregloCampos.push({
            formularios: grupoFormularioUno,
            titulo: 'comunes.opcionesComunes',
            descripcion: '',
        });
        const grupoFormularioDos: FormularioMantiFormly<<%= nombreMayuscula %>FindFormDto> = {
            fields: this.campos.filter(a => a.id === SisMantiEnum.SisCreado || a.id === SisMantiEnum.SisModificado),
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