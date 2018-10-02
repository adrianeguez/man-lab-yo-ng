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
        desc: 'Tipo de campo Ej: Date/boolean/string/number'
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
        desc: 'Si el campo es requerido o no. Por defecto es false. Ej: --required',
        default: false
    },
    ES_EMAIL: {
        type: Boolean,
        desc: 'Si el campo es email o no. Por defecto es false. Ej: --email',
        default: false
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
            email: this.options.email
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
        this.mensajesValidacion${nombreCampo} = establecerMensajesDeValidacionComunes(
            '${nombreCampoCamel}', // Nombre del campo
            '${nombreSeparadoPorEspacios}', // Nombre a presentarse
            'EJ: ${opciones.ejemplo ? opciones.ejemplo : nombreSeparadoPorEspacios}', // Ejemplo
            '${opciones.tooltip ? opciones.tooltip : 'Ingrese ' + nombreSeparadoPorEspacios}', // Tooltip
            ${opciones.mascara ? opciones.mascara : 'undefined'}, // Mascara
            ${opciones.mascaraFuncion ? opciones.mascaraFuncion : 'undefined'}, // Funcion para eliminar la mascara
            ${opciones.minLength ? opciones.minLength : 'undefined'}, // minLength
            ${opciones.maxLength ? opciones.maxLength : 'undefined'}, // maxLength
            ${opciones.min ? opciones.min : 'undefined'}, // min
            ${opciones.max ? opciones.max : 'undefined'}, // max
            ${opciones.pattern ? opciones.pattern : 'undefined'}, // pattern
            ${opciones.patternMensaje ? "'" + opciones.patternMensaje + "'" : 'undefined'}); // patternMensaje
        this.mensajesValidacion${nombreCampo}.configuracionFormBuilder = {
            required: {
                activado: ${opciones.required ? 'true' : 'false'}
            },
            email: {
                activado: ${opciones.email ? 'true' : 'false'}
            },
            min: {
                activado: ${opciones.min ? 'true' : 'false'}
            },
            max: {
                activado: ${opciones.max ? 'true' : 'false'}
            },
            minlength: {
                activado: ${opciones.minLength ? 'true' : 'false'}
            },
            maxlength: {
                activado: ${opciones.maxLength ? 'true' : 'false'}
            },
            pattern: {
                activado: ${opciones.pattern ? 'true' : 'false'}
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