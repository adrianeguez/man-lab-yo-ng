import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {<%= nombreMayuscula %>Select} from "../../../servicios/<%= nombreGuiones %>/forms/constantes/<%= nombreGuiones %>-select";
import {<%= nombreMayuscula %>Dto} from "../../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.dto";
import {
    Ruta<%= nombreMayuscula %>TranslationConstante
} from "../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-translation.constante";

@Component({
    selector: 'manti-<%= nombreGuiones %>-tabla-movil',
    templateUrl: './<%= nombreGuiones %>-tabla-movil.component.html',
    styleUrls: ['./<%= nombreGuiones %>-tabla-movil.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= nombreMayuscula %>TablaMovilComponent {
    @Input()
    renderizarShort: boolean = false;
    @Input()
    registro!: <%= nombreMayuscula %>Dto;
    @Input()
    componente!: CrudRutaComponent;

    @Input()
    mostrarAcciones = false;
    nombreModulo = nombreModulo<%= nombreMayusculaModulo %>;
    translationConstantes = TranslationConstantes;
    ruta<%= nombreMayuscula %>TranslationConstante = Ruta<%= nombreMayuscula %>TranslationConstante;

    obtenerNombreCampoLista(nombreCampoListaCodigoPrimario: string): string {
        // const campoListaEncontrado = <%= nombreMayuscula %>Select.nombreCampoLista.find((g) => g.codigoPrimario === nombreCampoListaCodigoPrimario);
        // if (campoListaEncontrado) {
        //     return campoListaEncontrado.pathTraduccion
        // }
        return nombreCampoListaCodigoPrimario;
    }
}