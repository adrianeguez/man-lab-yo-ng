import { FormGroup } from '@angular/forms';
import { ConfiguracionFormBuilder, ObjetoMensajeValidacionInterfaz, encerarConfiguracionFormBuilder, establecerMensajesDeValidacionComunes } from 'man-lab-ng-bootstrap';

export class PaisFormulario {
    formGroup: FormGroup;
    mensajesValidacionEstadoDeArchivo: MensajesValidacionPais;
    mensajesValidacionSueldo: MensajesValidacionPais;
    mensajesValidacionEmpiezaNumeracion: MensajesValidacionPais;
    // contenidoPropiedad - NO BORRAR ESTA LINEA
    configuracionFormBuilder: ConfiguracionFormBuilder;

    constructor(
        estadoDeArchivo: any,
        sueldo: number,
        empiezaNumeracion: string,
        // contenidoConstructor - NO BORRAR ESTA LINEA
    ) {
        this.encerarConfiguracionFormBuilderEstadoDeArchivo();
        this.encerarConfiguracionFormBuilderSueldo();
        this.encerarConfiguracionFormBuilderEmpiezaNumeracion();
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
                
    
    private encerarConfiguracionFormBuilderSueldo() {

        // empiezaArgumentosSueldo - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": false,
            "email": false,
            "nombre": "sueldo",
            "nombreAPresentarse": "Ingresos mensuales regulares aproximados",
            "ejemplo": "EJ: 45,34",
            "tooltip": "Ingrese ingreso mensual",
            "minLength": false,
            "maxLength": false,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Sueldo",
            "tipoControl": {
                "tipo": "input-text"
            },
            "mascara": "PRECIO_MASK",
            "mascaraCurrency": "true",
            "mascaraFuncion": "quitarMaskPrecio",
            "pattern": "false"
        };
        // terminaArgumentosSueldo - NO BORRAR ESTA LINEA

        argumentos.mascara = PRECIO_MASK;
        argumentos.mascaraFuncion = quitarMaskPrecio;
        argumentos.pattern = false;

        this.mensajesValidacionSueldo = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacionSueldo.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionSueldo.configuracionFormBuilder);
    }
                
    
    private encerarConfiguracionFormBuilderEmpiezaNumeracion() {

        // empiezaArgumentosEmpiezaNumeracion - NO BORRAR ESTA LINEA
        let argumentos:any = {
            "required": true,
            "email": false,
            "nombre": "empiezaNumeracion",
            "nombreAPresentarse": "Empieza numeración",
            "ejemplo": "EJ: 1",
            "tooltip": "Ingrese el número con el que empieza la numeración'",
            "minLength": false,
            "maxLength": 6,
            "min": false,
            "max": false,
            "patternMensaje": "Error en Empieza Numeracion",
            "tipoControl": {
                "tipo": "input-text"
            },
            "mascara": "NUMERACION_MASK",
            "mascaraCurrency": "false",
            "mascaraFuncion": "false",
            "pattern": "false"
        };
        // terminaArgumentosEmpiezaNumeracion - NO BORRAR ESTA LINEA

        argumentos.mascara = NUMERACION_MASK;
        argumentos.mascaraFuncion = false;
        argumentos.pattern = false;

        this.mensajesValidacionEmpiezaNumeracion = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacionEmpiezaNumeracion.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionEmpiezaNumeracion.configuracionFormBuilder);
    }
                
    // contenidoFuncion - NO BORRAR ESTA LINEA
}

interface MensajesValidacionPais extends ObjetoMensajeValidacionInterfaz {
    configuracionFormBuilder?: ConfiguracionFormBuilder;
}