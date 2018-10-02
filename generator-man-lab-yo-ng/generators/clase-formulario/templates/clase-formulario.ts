import { FormGroup } from '@angular/forms';
import { ConfiguracionFormBuilder, ObjetoMensajeValidacionInterfaz, encerarConfiguracionFormBuilder, establecerMensajesDeValidacionComunes } from 'man-lab-ng-bootstrap';

export class <%= nombre %>Formulario {
    formGroup: FormGroup;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

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