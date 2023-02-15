import {FormGroup} from '@angular/forms';
/* tslint:disable:quotemark*/
import {
    ConfiguracionFormBuilder,
    ObjetoMensajeValidacionInterfaz,
    encerarConfiguracionFormBuilder,
    establecerMensajesDeValidacionComunes
} from '@manticore-labs/ng-api';

export class <%= nombre %>Formulario {
    formGroup: FormGroup = new FormGroup({});
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder | any = {};

    // prettier-ignore
    constructor(
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        // contenidoEjecucionConstructor - NO BORRAR ESTA LINEA
    }


    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacion<%= nombre %> extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}
