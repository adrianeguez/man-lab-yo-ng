import { FormGroup } from '@angular/forms';
import { ConfiguracionFormBuilder, ObjetoMensajeValidacionInterfaz, encerarConfiguracionFormBuilder, establecerMensajesDeValidacionComunes } from 'man-lab-ng-bootstrap';

export class PaisFormulario {
    formGroup: FormGroup;
    mensajesValidacionNombre: MensajesValidacionPais;
    mensajesValidacionApellido: MensajesValidacionPais;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

    constructor(
        nombre: string,
        apellido: any,
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        this.encerarConfiguracionFormBuilderNombre();
        this.encerarConfiguracionFormBuilderApellido();
        // contenidoEjecucionConstructor - NO BORRAR ESTA LINEA
    }
    

    
    private encerarConfiguracionFormBuilderNombre() {
        this.mensajesValidacionNombre = establecerMensajesDeValidacionComunes(
            'nombre', // Nombre del campo
            'Nombre', // Nombre a presentarse
            'EJ: Nombre', // Ejemplo
            'Ingrese Nombre', // Tooltip
            undefined, // Mascara
            undefined, // Funcion para eliminar la mascara
            undefined, // minLength
            undefined, // maxLength
            undefined, // min
            undefined, // max
            undefined, // pattern
            undefined); // patternMensaje
        this.mensajesValidacionNombre.configuracionFormBuilder = {
            required: {
                activado: true
            },
            email: {
                activado: false
            },
            min: {
                activado: false
            },
            max: {
                activado: false
            },
            minlength: {
                activado: false
            },
            maxlength: {
                activado: false
            },
            pattern: {
                activado: false
            }
        };
        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionNombre.configuracionFormBuilder);
    }
                
    
    private encerarConfiguracionFormBuilderApellido() {
        this.mensajesValidacionApellido = establecerMensajesDeValidacionComunes(
            'apellido', // Nombre del campo
            'Apellido', // Nombre a presentarse
            'EJ: Apellido', // Ejemplo
            'Ingrese Apellido', // Tooltip
            undefined, // Mascara
            undefined, // Funcion para eliminar la mascara
            undefined, // minLength
            undefined, // maxLength
            undefined, // min
            undefined, // max
            undefined, // pattern
            undefined); // patternMensaje
        this.mensajesValidacionApellido.configuracionFormBuilder = {
            required: {
                activado: false
            },
            email: {
                activado: false
            },
            min: {
                activado: false
            },
            max: {
                activado: false
            },
            minlength: {
                activado: false
            },
            maxlength: {
                activado: false
            },
            pattern: {
                activado: false
            }
        };
        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionApellido.configuracionFormBuilder);
    }
                
    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacionPais extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}