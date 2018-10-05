const Generator = require('yeoman-generator');
const fs = require('fs');
const inquirer = require('inquirer');


const ARGUMENTOS = {
    NOMBRE_CLASE: {
        nombre: 'nombreClase',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la clase formulario EJ: EmpresaYEcuatoriana'
        }
    },
    NOMBRE_CAMPO: {
        nombre: 'nombreCampo',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del campo formulario EJ: telefonoTrabajo'
        }
    },
}

const OPCIONES = {
    TIPO: {
        type: String,
        desc: 'Tipo de campo Ej: Date / boolean / string / number'
    },
    NOMBRE_A_PRESENTARSE: {
        type: String,
        desc: 'Como mostrar el campo Ej: "Nombres y apellidos"'
    },
    TOOLTIP: {
        type: String,
        desc: 'Tooltip del campo Ej: "Llenar solo con letras"'
    },
    EJEMPLO: {
        type: String,
        desc: 'Tooltip del campo Ej: "Ej: Adrian Eguez"'
    },
    MASCARA: {
        type: String,
        desc: 'Nombre de la mascara para el campo Ej: SOLO_LETRAS'
    },
    MASCARA_FUNCION: {
        type: String,
        desc: 'Nombre de la funcion para eliminar la mascara del campo Ej: eliminarNumeros'
    },
    MASCARA_CURRENCY: {
        type: Boolean,
        desc: 'Si la mascara que se va a utilizar es de currency Ej: --mascaraCurrency (para true)'
    },
    MIN_LENGTH: {
        type: String,
        desc: 'Minlength del campo Ej: 3'
    },
    MAX_LENGTH: {
        type: String,
        desc: 'Maxlength del campo Ej: 10'
    },
    MIN: {
        type: String,
        desc: 'Min del campo Ej: 3'
    },
    MAX: {
        type: String,
        desc: 'Max del campo Ej: 10'
    },
    PATTERN: {
        type: String,
        desc: 'Patron del campo Ej: /[a-z]/g'
    },
    PATTERN_MENSAJE: {
        type: String,
        desc: 'Patron del campo Ej: "Solo se aceptan letras minusculas"'
    },
    ES_REQUIRED: {
        type: Boolean,
        desc: 'Si el campo es requerido o no. Por defecto es false. Ej: --required (para true)',
        default: false
    },
    ES_EMAIL: {
        type: Boolean,
        desc: 'Si el campo es email o no. Por defecto es false. Ej: --email (para true)',
        default: false
    },
    TIPO_CONTROL: {
        type: String,
        desc: 'Definir que tipo de control html va a ser usado para crear este formulario. Ej: --tipoControl input-text / select-many / autocomplete',
        default: 'input-text'
    },
    OPCIONES_SELECT_CONTROL: {
        type: String,
        desc: 'Definir opciones en el control de tipo select. Las opciones estan separadas por comas. Ej: --opcionesSelect "Perros,Gatos,Aves,Conejos"',
        default: 'Activo,Inactivo'
    },
    AUTOCOMPLETE_BUSQUEDA_NOMBRE: {
        type: String,
        desc: 'Definir el nombre de la entidad a consultarse en el autocomplete y el campo a mostrarse separado por una coma. Ej: --autocompleteBusqueda  "Usuario,apellido"'
    }
};

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE_CLASE.nombre, ARGUMENTOS.NOMBRE_CLASE.configuracion);
        this.argument(ARGUMENTOS.NOMBRE_CAMPO.nombre, ARGUMENTOS.NOMBRE_CAMPO.configuracion);
        this.option('tipo', OPCIONES.TIPO);
        this.option('nombreAPresentarse', OPCIONES.NOMBRE_A_PRESENTARSE);
        this.option('tooltip', OPCIONES.TOOLTIP);
        this.option('ejemplo', OPCIONES.EJEMPLO);
        this.option('mascara', OPCIONES.MASCARA);
        this.option('mascaraFuncion', OPCIONES.MASCARA_FUNCION);
        this.option('minLength', OPCIONES.MIN_LENGTH);
        this.option('maxLength', OPCIONES.MAX_LENGTH);
        this.option('min', OPCIONES.MIN);
        this.option('max', OPCIONES.MAX);
        this.option('pattern', OPCIONES.PATTERN);
        this.option('patternMensaje', OPCIONES.PATTERN_MENSAJE);
        this.option('required', OPCIONES.ES_REQUIRED);
        this.option('email', OPCIONES.ES_EMAIL);
        this.option('tipoControl', OPCIONES.TIPO_CONTROL);
        this.option('opcionesSelect', OPCIONES.OPCIONES_SELECT_CONTROL);
        this.option('autocompleteBusqueda', OPCIONES.AUTOCOMPLETE_BUSQUEDA_NOMBRE);
        this.option('mascaraCurrency', OPCIONES.MASCARA_CURRENCY);
    }

    initializing() {
        // this.log('initializing')
    }

    async prompting() {
        // this.log('prompting')
        /*
                const respuestas = await this.prompt([{
                    type: 'input',
                    name: 'nombreServicio',
                    message: 'Cual es el nombre de tu servicio?',
                }]);
        */
        // this.log('Nombre del servicio', this.option(ARGUMENTOS.NOMBRE.nombre));

    }
    configuring() {
        // this.log('configuring ')
    }

    default() {
        // this.log('default ')
    }

    method1() {
        // this.log('method 1 just ran');
    }

    method2() {
        // this.log('method 2 just ran');
    }


    async writing() {

        // Variables Clase
        const nombreClase = this.options[ARGUMENTOS.NOMBRE_CLASE.nombre];
        const nombreClaseDash = camelToDash(nombreClase);

        // Variables Campo
        const nombreCampoCamel = this.options[ARGUMENTOS.NOMBRE_CAMPO.nombre];
        const nombreCampo = capitalizeFirstLetter(nombreCampoCamel);
        const nombreCampoDash = camelToDash(nombreCampo);

        // Lectura de archivo a actualizar

        const opciones = {
            tipo: this.options.tipo,
            nombreAPresentarse: this.options.nombreAPresentarse,
            tooltip: this.options.tooltip,
            ejemplo: this.options.ejemplo,
            mascara: this.options.mascara,
            mascaraFuncion: this.options.mascaraFuncion,
            minLength: this.options.minLength,
            maxLength: this.options.maxLength,
            min: this.options.min,
            max: this.options.max,
            pattern: this.options.pattern,
            patternMensaje: this.options.patternMensaje,
            required: this.options.required,
            email: this.options.email,
            tipoControl: this.options.tipoControl,
            opcionesSelect: this.options.opcionesSelect,
            autocompleteBusqueda: this.options.autocompleteBusqueda,
            mascaraCurrency: this.options.mascaraCurrency
        }
        if (opciones.tipoControl === 'autocomplete' && !opciones.autocompleteBusqueda) {
            throw new Error('Debe de anadir la opcion --autocompleteBusqueda "Entidad,campo", para documentacion escribir yo nombre-gerenador:metodo --help');
        }
        const archivo = {
            nombre: `/${nombreClaseDash}-formulario.ts`,
            directorio: this.destinationRoot(),
            pathArchivo: function () { return this.directorio + this.nombre },

        };
        const contenido = {


            archivoAActualizar: fs.readFileSync(archivo.pathArchivo(), 'utf-8'),

            espacioDeIndentacionConstructor: '        ',
            reemplazableConstructor: '// contenidoConstructor - NO BORRAR ESTA LINEA',
            propiedadConstructor: function () {
                return nombreCampoCamel
                    + `: ${opciones.tipo ? opciones.tipo : 'any'},\n`
                    + this.espacioDeIndentacionConstructor + this.reemplazableConstructor;
            },

            espacioDeIndentacionPropiedad: '    ',
            reemplazablePropiedad: '// contenidoPropiedad - NO BORRAR ESTA LINEA',
            propiedadMensajeValidacion: function () {
                return `mensajesValidacion${nombreCampo}: MensajesValidacion${nombreClase};\n`
                    + this.espacioDeIndentacionPropiedad + this.reemplazablePropiedad;
            },


            espacioDeIndentacionEjecucionConstructor: '        ',
            reemplazableEjecucionConstructor: '// contenidoEjecucionConstructor - NO BORRAR ESTA LINEA',
            ejecucionConstructor: function () {
                return `this.encerarConfiguracionFormBuilder${nombreCampo}();\n`
                    + this.espacioDeIndentacionEjecucionConstructor + this.reemplazableEjecucionConstructor;
            },



            espacioDeIndentacionContenidoFuncion: '    ',
            reemplazableContenidoFuncion: '// contenidoFuncion - NO BORRAR ESTA LINEA',
            contenidoFuncion: function () {
                const nombreSeparadoPorEspacios = separateUpperCaseBySpace(nombreCampo);
                return `
    private encerarConfiguracionFormBuilder${nombreCampo}() {

        // empiezaArgumentos${nombreCampo} - NO BORRAR ESTA LINEA
        const argumentos: any = {
            "required": ${opciones.required ? 'true' : 'false'},
            "email": ${opciones.email ? 'true' : 'false'},
            "nombre": "${nombreCampoCamel}",
            "nombreAPresentarse": "${opciones.nombreAPresentarse ? opciones.nombreAPresentarse : nombreSeparadoPorEspacios}",
            "ejemplo": "EJ: ${opciones.ejemplo ? opciones.ejemplo : nombreSeparadoPorEspacios}",
            "tooltip": "${opciones.tooltip ? opciones.tooltip : 'Ingrese ' + nombreSeparadoPorEspacios}",
            "minLength": ${opciones.minLength ? opciones.minLength : 'false'},
            "maxLength": ${opciones.maxLength ? opciones.maxLength : 'false'},
            "min": ${opciones.min ? opciones.min : 'false'},
            "max": ${opciones.max ? opciones.max : 'false'},
            "patternMensaje": ${opciones.patternMensaje ? '"' + opciones.patternMensaje + '"' : '"Error en ' + nombreSeparadoPorEspacios + '"'},
            "tipoControl": {
                "tipo": "${opciones.tipoControl}"${opciones.tipoControl === 'select-many' ? `,\n                "opcionesSelect": "${opciones.opcionesSelect}"` : ''}${opciones.tipoControl === 'autocomplete' ? `,\n                "autocompleteBusqueda": "${opciones.autocompleteBusqueda}"` : ''}
            },
            "mascara": "${opciones.mascara ? opciones.mascara : 'false'}",
            "mascaraCurrency": "${opciones.mascaraCurrency ? 'true' : 'false'}",
            "mascaraFuncion": "${opciones.mascaraFuncion ? opciones.mascaraFuncion : 'false'}",
            "pattern": "${opciones.pattern ? opciones.pattern : 'false'}"
        };
        // terminaArgumentos${nombreCampo} - NO BORRAR ESTA LINEA

        argumentos.mascara = ${opciones.mascara ? opciones.mascara : 'false'};
        argumentos.mascaraFuncion = ${opciones.mascaraFuncion ? opciones.mascaraFuncion : 'false'};
        argumentos.pattern = ${opciones.pattern ? opciones.pattern : 'false'};

        this.mensajesValidacion${nombreCampo} = establecerMensajesDeValidacionComunes(
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

        this.mensajesValidacion${nombreCampo}.configuracionFormBuilder = {
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

        this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacion${nombreCampo}.configuracionFormBuilder);
    }
                \n`
                    + this.espacioDeIndentacionContenidoFuncion + this.reemplazableContenidoFuncion;
            }



        }

        // generando contenido de constructor
        let nuevoContenido = contenido.archivoAActualizar
            .replace(
                contenido.reemplazableConstructor,
                contenido.propiedadConstructor()
            );

        // generando contenido de propiedad
        nuevoContenido = nuevoContenido
            .replace(
                contenido.reemplazablePropiedad,
                contenido.propiedadMensajeValidacion()
            );

        // generando contenido de ejecucion en constructor
        nuevoContenido = nuevoContenido
            .replace(
                contenido.reemplazableEjecucionConstructor,
                contenido.ejecucionConstructor()
            );


        // generando contenido de funcion
        nuevoContenido = nuevoContenido
            .replace(
                contenido.reemplazableContenidoFuncion,
                contenido.contenidoFuncion()
            );

        this.log('Propiedad\n', contenido.propiedadConstructor())
        this.log('Funcion\n', contenido.contenidoFuncion())

        const respuesta = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'confirmacion',
                    message: '¿Están correctos los cambios?'
                }
            ])
        if (respuesta.confirmacion) {
            fs.writeFileSync(archivo.pathArchivo(), nuevoContenido, 'utf-8');
            this.log(`Archivo ${archivo.nombre} actualizado :)`);

        } else {

        }



        // inquirer
        //     .prompt([
        //         /* Pass your questions in here */
        //     ])
        /*
        
                const template = this.templatePath(TEMPLATES.ENTITY);
        
                const destino = this.destinationPath(`${nombreMinuscula}-formulario.ts`);
                const variables = {
                    nombre
                };
        */


        /*
        const nombreMinuscula = camelToDash(nombre);
        // const nombreEntityPrivado = capitalizeFirstLetter(nombreEntity);

        

        this.fs.copyTpl(
            template,
            destino,
            variables
        );

        */
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {

    }

};

function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function separateUpperCaseBySpace(string) {
    var re = /[A-Z]/g;
    const indices = [];
    while ((match = re.exec(string)) != null) {
        indices.push(match.index)
    }
    let contador = 0;
    indices.forEach(
        (indice) => {
            if (indice === 0) {

            } else {
                const posicionInicial = indice + contador;
                const posicionFinal = posicionInicial + 1;
                let contenidoAReemplazar = string.slice(posicionInicial, posicionFinal);
                contenidoAReemplazar = ' ' + contenidoAReemplazar;
                let contenidoInicial = string.slice(0, posicionFinal - 1);
                contenidoInicial = contenidoInicial + contenidoAReemplazar;
                const contenidoFinal = string.slice(posicionFinal, string.length)
                string = contenidoInicial + contenidoFinal;
                contador++;
            }
        }
    )
    return string;
}