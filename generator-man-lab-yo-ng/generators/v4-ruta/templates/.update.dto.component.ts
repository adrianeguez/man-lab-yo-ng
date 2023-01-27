import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {<%= nombreMayuscula %>CreateUpdateComun} from "../constantes/<%= nombreGuiones %>.create-update-comun";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";
import {
    <%= nombreMayuscula %>UpdateFormDto
} from "../../dto/<%= nombreGuiones %>.update.dto";
import {
    Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-crud-ruta.type";
import {<%= nombreMayuscula %>Autocomplete} from "../constantes/<%= nombreGuiones %>-autocomplete";
import {
    Ruta<%= nombreMayuscula %>TranslationConstante
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-translation.constante";

@Component({
    selector: 'manti-<%= nombreGuiones %>-update-dto',
    templateUrl: './<%= nombreGuiones %>.update.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.update.dto.component.scss'],
})
export class <%= nombreMayuscula %>UpdateDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>UpdateFormDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>UpdateFormDto>;
    @Input() formlyOptions: FormlyFormOptions = {};
    ruta<%= nombreMayuscula %>TranslationConstante = Ruta<%= nombreMayuscula %>TranslationConstante;
    // @ViewChild('itemNombreCampoLista') public itemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('selectedItemNombreCampoLista') public selectedItemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('autocompleteMostrarNombreRelacion') public autocompleteMostrarNombreRelacion!: TemplateRef<any>;
    // @ViewChild('autocompleteListarNombreRelacion') public autocompleteListarNombreRelacion!: TemplateRef<any>;
    _tiposTemplate<%= nombreMayuscula %>: {
        templateContextoAutocompleteManticoreComponent: Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>,
    };
    nombreModulo = nombreModulo_LLENAR;
    fields: ArregloCamposMantiDto = (
        componente: AngularFormInterface
    ) => {
        return [
            ...<%= nombreMayuscula %>CreateUpdateComun(
                componente,
                {
                    // itemCampoEjemplo: this.itemNombreCampoLista,
                    // selectedItemCampoEjemplo: this.selectedItemNombreCampoLista,
                },
            ),
            // <%= nombreMayuscula %>Autocomplete(this).campoRelacion
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
        this.formularioManti = {
            fields: this.campos,
            form: this.formManti.form,
            model: this.formManti.model,
            options: this.formlyOptions,
        };
    }
}
