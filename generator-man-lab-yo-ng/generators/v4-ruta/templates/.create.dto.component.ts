import {<%= nombreMayuscula %>CreateDto} from "../../dto/<%= nombreGuiones %>.create.dto";
import {<%= nombreMayuscula %>CreateUpdateComunDto} from "../constantes/<%= nombreGuiones %>.create-update-comun.dto";
import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {<%= nombreMayuscula %>CreateUpdateComunDto} from "../constantes/<%= nombreGuiones %>.create-update-comun.dto";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";
import {<%= nombreMayuscula %>CreateDto} from "../../dto/<%= nombreGuiones %>.create.dto";

@Component({
    selector: 'manti-<%= nombreGuiones %>-create-dto',
    templateUrl: './<%= nombreGuiones %>.create.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.create.dto.component.scss'],
})
export class <%= nombreMayuscula %>CreateDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>CreateDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>CreateDto>;
    @Input() formlyOptions: FormlyFormOptions = {};
    // @ViewChild('itemNombreCampoLista') public itemNombreCampoLista!: TemplateRef<any>;
    // @ViewChild('selectedItemNombreCampoLista') public selectedItemNombreCampoLista!: TemplateRef<any>;
    fields = (
        componente: AngularFormInterface
    ) => {
        return [
            ...<%= nombreMayuscula %>CreateUpdateComunDto(
                componente,
                {
                    // itemCampoEjemplo: this.itemNombreCampoLista,
                    // selectedItemCampoEjemplo: this.selectedItemNombreCampoLista,
                },
            )
        ]
    };

    constructor(
        public readonly translateService: TranslateService,
        public readonly config: PrimeNGConfig
    ) {
        super(translateService, config);
    }

    ngAfterViewInit() {
        console.log(this);
        this.formularioManti = {
            fields: this.fields(this.ruta),
            form: this.formManti.form,
            model: this.formManti.model,
            options: this.formlyOptions,
        };
    }
}
