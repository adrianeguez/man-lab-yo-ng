import {Component, Input, TemplateRef, ViewChild, AfterViewInit} from '@angular/core';
import {<%= nombreMayuscula %>FindDto} from "../../dto/<%= nombreGuiones %>.find.dto";
import {TranslateService} from "@ngx-translate/core";
import {LocaleSettings} from "primeng/calendar";
import {PrimeNGConfig} from "primeng/api";
import {nombreModuloNest} from "../../../../nombre-modulo-nest";

@Component({
    selector: 'manti-<%= nombreGuiones %>-find-dto',
    templateUrl: './<%= nombreGuiones %>.find.dto.component.html',
    styleUrls: ['./<%= nombreGuiones %>.find.dto.component.scss'],
})
export class <%= nombreMayuscula %>FindDtoComponent implements AfterViewInit {
    @Input() ruta!: AngularFormInterface;
    @Input() formManti!: FormMantiFormly<<%= nombreMayuscula %>FindDto>;
    @Input() formularioManti!: FormularioMantiFormly<<%= nombreMayuscula %>FindDto>;

    // Ejemplo select
    // @ViewChild('itemGeneroLibro') public itemGeneroLibro!: TemplateRef<any>;
    // @ViewChild('selectedItemGeneroLibro') public selectedItemGeneroLibro!: TemplateRef<any>;
    @ViewChild('itemSisHabilitado') public itemSisHabilitado!: TemplateRef<any>;
    @ViewChild('selectedItemSisHabilitado') public selectedItemSisHabilitado!: TemplateRef<any>;

    _tipoSelectSelectedItemGeneroLibro: TipoCampoSelect;
    sisHabilitado = SisHabilitadoKeysEnum.Habilitado;

    localSettings?: LocaleSettings;
    nombreModulo = nombreModuloNest;

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
        const grupoFormularioUno: FormularioMantiFormly<<%= nombreMayuscula %>FindDto> = {
            fields: campos.filter(a => a.id === SisMantiEnum.Busqueda || a.id === SisHabilitadoKeysEnum.Habilitado),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        };
        const grupoFormularioDos: FormularioMantiFormly<<%= nombreMayuscula %>FindDto> = {
            fields: campos.filter(a => a.id === SisMantiEnum.SisCreado || a.id === SisMantiEnum.SisModificado || a.id === 'a'),
            form: this.formManti.form,
            model: this.formManti.model,
            options: {},
        }
        this.arregloCampos.push({
            formularios: grupoFormularioUno,
            titulo: 'comunes.opcionesComunes',
            descripcion: '',
        });
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
