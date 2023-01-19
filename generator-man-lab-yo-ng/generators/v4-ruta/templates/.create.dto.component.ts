import {Component, Input, TemplateRef, ViewChild, AfterViewInit} from '@angular/core';
import {
    AngularFormInterface,
    ArregloFormlyTraducido, FormMantiFormly,
    FormularioMantiFormly
} from "../../../../../../interfaces/angular-form.interface";
import {<%= nombreMayuscula %>CreateDto} from "../../dto/<%= nombreGuiones %>.create.dto";
import {GrupoFormularioManti, TipoCampoSelect} from "../../../../../../constantes/formularios/tipos-campos";
import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import {LocaleSettingsManti} from "../../../../../../constantes/formularios/locale-settings-manti";
import {<%= nombreMayuscula %>CreateUpdateComunDto} from "../constantes/<%= nombreGuiones %>.create-update-comun.dto";

@Component({
    selector: 'manti-<%= nombreGuiones %>-create-dto',
    templateUrl: './<%= nombreGuiones %>.create.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.create.dto.component.scss'],
})
export class <%= nombreMayuscula %>CreateDtoComponent implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>CreateDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>CreateDto>;

    // Ejemplo select
    // @ViewChild('itemGeneroLibro') public itemGeneroLibro!: TemplateRef<any>;
    // @ViewChild('selectedItemGeneroLibro') public selectedItemGeneroLibro!: TemplateRef<any>;

    localSettings?: any;

    _tipoSelectSelectedItemGeneroLibro: TipoCampoSelect;

    fields: ArregloFormlyTraducido = (
        componente: AngularFormInterface
    ) => {
        return [
            ...<%= nombreMayuscula %>CreateUpdateComunDto(
                componente,
                {
                    itemGeneroLibro: this.itemGeneroLibro,
                    selectedItemGeneroLibro: this.selectedItemGeneroLibro,
                },
            )
        ]
    };


    arregloCampos: GrupoFormularioManti[] = [];

    constructor(
        private readonly translateService: TranslateService,
        private readonly config: PrimeNGConfig
    ) {
        this.setearLocalSettings(this.translateService.currentLang as 'es' | 'en');
        this.translateService
            .onLangChange
            .subscribe(
                (lenguaje) => {
                    this.setearLocalSettings(lenguaje.lang as 'es' | 'en');
                }
            )
    }

    setearLocalSettings(lenguaje: 'es' | 'en') {
        this.localSettings = LocaleSettingsManti[lenguaje];
        if(this.localSettings){
            this.config.setTranslation({
                ...this.localSettings as any
            });
        }
    }

    ngAfterViewInit() {
        const campos = this.fields(this.ruta);
        this.formularioManti = {
            fields: this.fields(this.ruta),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        };
    }

}
