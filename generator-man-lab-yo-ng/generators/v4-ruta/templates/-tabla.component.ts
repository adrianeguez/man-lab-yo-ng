import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {<%= nombreMayuscula %>Entity} from "../../../../../generated/api-solo-back";
import {CrudRutaComponent} from "../../../../../componentes/rutas/contenedor-ruta/crud-ruta/crud-ruta.component";
import {SisHabilitadoEnumObject} from "../../../../../enums/sis-habilitado.enum";
import {<%= nombreMayuscula %>Select} from "../../../servicios/<%= nombreGuiones %>/forms/constantes/<%= nombreGuiones %>-select";
import {nombreModuloNest} from "../../../nombre-modulo-nest";

@Component({
    selector: 'manti-<%= nombreGuiones %>-tabla',
    templateUrl: './<%= nombreGuiones %>-tabla.component.html',
    styleUrls: ['./<%= nombreGuiones %>-tabla.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= nombreMayuscula %>TablaComponent {
    @Input()
    registrosActuales: [<%= nombreMayuscula %>Entity[], number] = [[], 0];
    @Input()
    componente!: CrudRutaComponent;
    sisHabilitadoEnum = SisHabilitadoEnumObject;
    nombreModulo = nombreModuloNest;

    // ejemplo get
    // obtenerGeneroLibro(generoLibro: string): string {
    //     const generoLibroEncontrado = <%= nombreMayuscula %>Select.generoLibro.find((g) => g.code === generoLibro);
    //     if (generoLibroEncontrado) {
    //         return generoLibroEncontrado.name
    //     }
    //     return generoLibro;
    // }

}
