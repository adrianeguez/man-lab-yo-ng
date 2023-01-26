import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {<%= nombreMayuscula %>CreateUpdateComun} from "../constantes/<%= nombreGuiones %>.create-update-comun";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";
import {
    <%= nombreMayuscula %>CreateFormDto
} from "../../dto/<%= nombreGuiones %>.create.dto";
import {
    Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %>
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-crud-ruta.type";
import {<%= nombreMayuscula %>Autocomplete} from "../constantes/<%= nombreGuiones %>-autocomplete";

@Component({
    selector: 'manti-<%= nombreGuiones %>-create-dto',
    templateUrl: './<%= nombreGuiones %>.create.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.create.dto.component.scss'],
})
export class <%= nombreMayuscula %>CreateDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>CreateFormDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>CreateFormDto>;
    @Input() formlyOptions: FormlyFormOptions = {};
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
            // <%= nombreMayuscula %>Autocomplete(this).nombreCampoRelacion
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
