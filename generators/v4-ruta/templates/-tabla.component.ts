import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {<%= nombreMayuscula %>Select} from "../../../servicios/<%= nombreGuiones %>/forms/constantes/<%= nombreGuiones %>-select";
import {<%= nombreMayuscula %>Dto} from "../../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.dto";
import {
    Ruta<%= nombreMayuscula %>TranslationConstante
} from "../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>-translation.constante";

@Component({
    selector: 'manti-<%= nombreGuiones %>-tabla',
    templateUrl: './<%= nombreGuiones %>-tabla.component.html',
    styleUrls: ['./<%= nombreGuiones %>-tabla.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= nombreMayuscula %>TablaComponent {
    @Input()
    registrosActuales: [<%= nombreMayuscula %>Dto[], number] = [[], 0];
    @Input()
    componente!: Ruta<%= nombreMayuscula %>CrudRutaType;
    nombreModulo = nombreModulo_LLENAR;
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
