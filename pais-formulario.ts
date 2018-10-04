import { FormGroup } from '@angular/forms';
import { ConfiguracionFormBuilder, ObjetoMensajeValidacionInterfaz, encerarConfiguracionFormBuilder, establecerMensajesDeValidacionComunes } from 'man-lab-ng-bootstrap';

export class PaisFormulario {
    formGroup: FormGroup;
    mensajesValidacionEstadoDeArchivo: MensajesValidacionPais;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

    constructor(
        estadoDeArchivo: any,
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        this.encerarConfiguracionFormBuilderEstadoDeArchivo();
        // contenidoEjecucionConstructor - NO BORRAR ESTA LINEA
    }


    
    private encerarConfiguracionFormBuilderEstadoDeArchivo() {

        // empiezaArgumentosEstadoDeArchivo - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": false,
            "email": false,
            "nombre": "estadoDeArchivo",
            "nombreAPresentarse": "Estado De Archivo",
            "ejemplo": "EJ: Estado De Archivo",
            "tooltip": "Ingrese Estado De Archivo",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Estado De Archivo",
            "tipoControl": {
                "tipo": "autocomplete",
                "autocompleteBusqueda": "Usuario,apellido"
            },
            "mascara": "false",
            "funcionMascara": "false",
            "pattern": "false"
        };
        // terminaArgumentosEstadoDeArchivo - NO BORRAR ESTA LINEA

        argumentos.mascara = false;
        argumentos.funcionMascara = false;
        argumentos.pattern = false;

        this.mensajesValidacionEstadoDeArchivo = establecerMensajesDeValidacionComunes(
            argumentos.nombre, // Nombre del campo
            argumentos.nombreAPresentarse, // Nombre a presentarse
            argumentos.ejemplo, // Ejemplo
            argumentos.tooltip, // Tooltip
            argumentos.mascara, // Mascara
            argumentos.funcionMascara, // Funcion para eliminar la mascara
            argumentos.minLength, // minLength
            argumentos.maxLength, // maxLength
            argumentos.min, // min
            argumentos.max, // max
            argumentos.pattern, // pattern
            argumentos.patternMensaje); // patternMensaje

        this.mensajesValidacionEstadoDeArchivo.configuracionFormBuilder = {
            required: {
                activado: argumentos.required
            },
            email: {
                activado: argumentos.email
            },
            min: {
                activado: argumentos.min ? true : false
            },
            max: {
                activado: argumentos.max ? true : false
            },
            minlength: {
                activado: argumentos.minLength ? true : false
            },
            maxlength: {
                activado: argumentos.maxLength ? true : false
            },
            pattern: {
                activado: argumentos.pattern ? true : false
            }
        };

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionEstadoDeArchivo.configuracionFormBuilder);
    }
                
    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacionPais extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}