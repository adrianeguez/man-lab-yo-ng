import { FormGroup } from '@angular/forms';
import { ConfiguracionFormBuilder, ObjetoMensajeValidacionInterfaz, encerarConfiguracionFormBuilder, establecerMensajesDeValidacionComunes } from 'man-lab-ng-bootstrap';

export class PaisFormulario {
    formGroup: FormGroup;
    mensajesValidacionNombre: MensajesValidacionPais;
    mensajesValidacionApellido: MensajesValidacionPais;
    mensajesValidacionEstado: MensajesValidacionPais;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

    constructor(
        nombre: any,
        apellido: any,
        estado: any,
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        this.encerarConfiguracionFormBuilderNombre();
        this.encerarConfiguracionFormBuilderApellido();
        this.encerarConfiguracionFormBuilderEstado();
        // contenidoEjecucionConstructor - NO BORRAR ESTA LINEA
    }




    
    private encerarConfiguracionFormBuilderNombre() {

        // empiezaArgumentosNombre - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": false,
            "email": false,
            "nombre": "nombre",
            "nombreAPresentarse": "Nombre",
            "ejemplo": "EJ: Nombre",
            "tooltip": "Ingrese Nombre",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Nombre"
        };
        // terminaArgumentosNombre - NO BORRAR ESTA LINEA

        argumentos.mascara = false;
        argumentos.funcionMascara = false;
        argumentos.pattern = false;

        this.mensajesValidacionNombre = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacionNombre.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionNombre.configuracionFormBuilder);
    }
                
    
    private encerarConfiguracionFormBuilderApellido() {

        // empiezaArgumentosApellido - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": false,
            "email": false,
            "nombre": "apellido",
            "nombreAPresentarse": "Apellido",
            "ejemplo": "EJ: Apellido",
            "tooltip": "Ingrese Apellido",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Apellido"
        };
        // terminaArgumentosApellido - NO BORRAR ESTA LINEA

        argumentos.mascara = false;
        argumentos.funcionMascara = false;
        argumentos.pattern = false;

        this.mensajesValidacionApellido = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacionApellido.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionApellido.configuracionFormBuilder);
    }
                
    
    private encerarConfiguracionFormBuilderEstado() {

        // empiezaArgumentosEstado - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": false,
            "email": false,
            "nombre": "estado",
            "nombreAPresentarse": "Estado",
            "ejemplo": "EJ: Estado",
            "tooltip": "Ingrese Estado",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Estado"
        };
        // terminaArgumentosEstado - NO BORRAR ESTA LINEA

        argumentos.mascara = false;
        argumentos.funcionMascara = false;
        argumentos.pattern = false;

        this.mensajesValidacionEstado = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacionEstado.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionEstado.configuracionFormBuilder);
    }
                
    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacionPais extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}