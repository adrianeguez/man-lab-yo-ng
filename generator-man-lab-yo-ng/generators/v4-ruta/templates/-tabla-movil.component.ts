import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {<%= nombreMayuscula %>Entity} from "../../../../../generated/api-solo-back";
import {CrudRutaComponent} from "../../../../../componentes/rutas/contenedor-ruta/crud-ruta/crud-ruta.component";
import {SisHabilitadoEnumObject} from "../../../../../enums/sis-habilitado.enum";
import {nombreModuloNest} from "../../../nombre-modulo-nest";

@Component({
    selector: 'manti-<%= nombreGuiones %>-tabla-movil',
    templateUrl: './<%= nombreGuiones %>-tabla-movil.component.html',
    styleUrls: ['./<%= nombreGuiones %>-tabla-movil.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= nombreMayuscula %>TablaMovilComponent {
    @Input()
    registro!: <%= nombreMayuscula %>Entity;
    @Input()
    componente!: CrudRutaComponent;

    @Input()
    mostrarAcciones = false;
    sisHabilitadoEnum = SisHabilitadoEnumObject;
    nombreModulo = nombreModuloNest;

    constructor() {
    }
}
