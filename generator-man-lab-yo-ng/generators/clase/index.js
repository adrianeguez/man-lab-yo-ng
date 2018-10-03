const Generator = require('yeoman-generator');
const fs = require('fs');
const inquirer = require('inquirer');
const TypescriptParser = require('typescript-parser').TypescriptParser;
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
};
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
    }
    async initializing() {
    }
    async prompting() {
    }
    configuring() {
    }
    default() {
    }
    method1() {
    }
    method2() {
    }
    async writing() {
        // Variables Clase
        const nombreClase = this.options[ARGUMENTOS.NOMBRE_CLASE.nombre];
        const nombreClaseDash = camelToDash(nombreClase);
        // Variables de archivo
        const archivo = {
            nombre: `/${nombreClaseDash}-formulario.ts`,
            directorio: this.destinationRoot(),
            pathArchivo: function () { return this.directorio + this.nombre; },
        };
        // Parseador
        const parser = {
            clase: new TypescriptParser(),
            texto: fs.readFileSync(archivo.pathArchivo(), 'utf-8'),
        };
        const archivoParseado = await parser.clase.parseSource(parser.texto);
        // Obteniendo parametros
        const constructor = archivoParseado.declarations[0].ctor;
        const propiedadesACrearse = [];
        constructor
            .parameters
            .forEach((propiedad) => {
            propiedadesACrearse.push({ nombre: propiedad.name, tipo: propiedad.type });
        });
        // Crear clase
        const espaciadoConstructor = '        ';
        let textoClase = '';
        const nuevasPropiedades = propiedadesACrearse.forEach((propiedad) => {
            textoClase = textoClase + `public ${propiedad.nombre}?: ${propiedad.tipo},\n` + espaciadoConstructor;
        });
        const nuevaClase = `
export class ${nombreClase}{
    constructor(
        ${textoClase}
    ){
    }
}`;
        // escribir archivo
        fs.writeFileSync(archivo.directorio + `/${nombreClaseDash}.ts`, nuevaClase, 'utf-8');
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
        indices.push(match.index);
    }
    let contador = 0;
    indices.forEach((indice) => {
        if (indice === 0) {
        }
        else {
            const posicionInicial = indice + contador;
            const posicionFinal = posicionInicial + 1;
            let contenidoAReemplazar = string.slice(posicionInicial, posicionFinal);
            contenidoAReemplazar = ' ' + contenidoAReemplazar;
            let contenidoInicial = string.slice(0, posicionFinal - 1);
            contenidoInicial = contenidoInicial + contenidoAReemplazar;
            const contenidoFinal = string.slice(posicionFinal, string.length);
            string = contenidoInicial + contenidoFinal;
            contador++;
        }
    });
    return string;
}
