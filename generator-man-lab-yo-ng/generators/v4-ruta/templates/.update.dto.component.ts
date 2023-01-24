import {Component, TemplateRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {<%= nombreMayuscula %>CreateUpdateComunDto} from "../constantes/<%= nombreGuiones %>.create-update-comun.dto";
import {FormlyFormOptions} from "@ngx-formly/core/lib/components/formly.field.config";
import {<%= nombreMayuscula %>UpdateDto} from "../../dto/<%= nombreGuiones %>.update.dto";

@Component({
    selector: 'manti-<%= nombreGuiones %>-update-dto',
    templateUrl: './<%= nombreGuiones %>.update.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.update.dto.component.scss'],
})
export class <%= nombreMayuscula %>UpdateDtoComponent extends FormAbstract implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>UpdateDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>UpdateDto>;
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
        private readonly translateService: TranslateService,
        private readonly config: PrimeNGConfig
    ) {
        super(translateService, config);
    }

    ngAfterViewInit() {
        this.formularioManti = {
            fields: this.fields(this.ruta),
            form: this.formManti.form,
            model: this.formManti.model,
            options: this.formlyOptions,
        };
    }
}
