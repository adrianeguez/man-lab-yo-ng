import {FormGroup} from '@angular/forms';
/* tslint:disable:quotemark*/
import {
    ConfiguracionFormBuilder,
    ObjetoMensajeValidacionInterfaz,
    encerarConfiguracionFormBuilder,
    establecerMensajesDeValidacionComunes
} from '@manticore-labs/ng-api';

export class OperarioFormulario {
    formGroup: FormGroup;
    mensajesValidacionContactoEmpresa: MensajesValidacionOperario;
    mensajesValidacionNombres: MensajesValidacionOperario;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

    // prettier-ignore
    constructor(
        public contactoEmpresa: string,
        public nombres: string,
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        this.encerarConfiguracionFormBuilderContactoEmpresa();

this.encerarConfiguracionFormBuilderNombres();

// contenidoEjecucionConstructor - NO BORRAR ESTA LINEA
    }


       private encerarConfiguracionFormBuilderContactoEmpresa() {

        // empiezaArgumentosContactoEmpresa - NO BORRAR ESTA LINEA
        const argumentos: any = {
            "required": true,
            "email": false,
            "nombre": "nombre",
            "nombreAPresentarse": "nombre",
            "ejemplo": "ejemplo",
            "tooltip": "ayuda",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "patternMensaje" ,
            "tipoControl": {
                "tipoCampoHtml": "text",
                "tipo": "autocomplete",
                "autocompleteBusqueda": "ContactoEmpresa,datosUsuario.identificacionPais"
            },
            "mascara": "false",
            "mascaraCurrency": "false",
            "mascaraFuncion": "false",
            "pattern": "false"
        };
        // terminaArgumentosContactoEmpresa - NO BORRAR ESTA LINEA

        argumentos.mascara = false;
        argumentos.mascaraFuncion = false;
        argumentos.pattern = false;

        this.mensajesValidacionContactoEmpresa = establecerMensajesDeValidacionComunes(
            argumentos.nombre, // Nombre del campo
            argumentos.nombreAPresentarse, // Nombre a presentarse
            argumentos.ejemplo, // Ejemplo
            argumentos.tooltip, // Tooltip
            argumentos.mascara, // Mascara
            argumentos.mascaraFuncion, // Funcion para eliminar la mascara
            argumentos.minLength, // minLength
            argumentos.maxLength, // maxLength
            argumentos.min, // min
            argumentos.max, // max
            argumentos.pattern, // pattern
            argumentos.patternMensaje); // patternMensaje

        this.mensajesValidacionContactoEmpresa.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionContactoEmpresa.configuracionFormBuilder);
    }

       private encerarConfiguracionFormBuilderNombres() {

        // empiezaArgumentosNombres - NO BORRAR ESTA LINEA
        const argumentos: any = {
            "required": true,
            "email": false,
            "nombre": "nombre",
            "nombreAPresentarse": "nombre",
            "ejemplo": "ejemplo",
            "tooltip": "ayuda",
            "minLength": 4,
            "maxLength": 50,
            "min": false,
            "max": false,
            "patternMensaje": "patternMensaje" ,
            "tipoControl": {
                "tipoCampoHtml": "text",
                "tipo": "input-text"
            },
            "mascara": "SOLO_LETRAS",
            "mascaraCurrency": "false",
            "mascaraFuncion": "culeo",
            "pattern": "false"
        };
        // terminaArgumentosNombres - NO BORRAR ESTA LINEA

        argumentos.mascara = null;
        argumentos.mascaraFuncion = null;
        argumentos.pattern = false;

        this.mensajesValidacionNombres = establecerMensajesDeValidacionComunes(
            argumentos.nombre, // Nombre del campo
            argumentos.nombreAPresentarse, // Nombre a presentarse
            argumentos.ejemplo, // Ejemplo
            argumentos.tooltip, // Tooltip
            argumentos.mascara, // Mascara
            argumentos.mascaraFuncion, // Funcion para eliminar la mascara
            argumentos.minLength, // minLength
            argumentos.maxLength, // maxLength
            argumentos.min, // min
            argumentos.max, // max
            argumentos.pattern, // pattern
            argumentos.patternMensaje); // patternMensaje

        this.mensajesValidacionNombres.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionNombres.configuracionFormBuilder);
    }

    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacionOperario extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}
