var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE_ESPANOL: {
        nombre: 'nombreEspanol',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la entidad en español EJ: EmpresaYEcuatoriana'
        }
    },
    NOMBRE_INGLES: {
        nombre: 'nombreIngles',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la entidad en ingles EJ: EmpresaYEcuatoriana'
        }
    },
}
const TEMPLATES = {
    ES: 'es.json',
    EN: 'en.json',
}
const OPCIONES = {
}
const aCamel = (cadena) => {
    return cadena.charAt(0).toLowerCase() + cadena.slice(1);
}

const camelADash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
const aTodoMayuscula = (cadena) => {
    let arreglo = [];
    cadena.split("")
        .forEach(
            (letra, indice) => {
                if (indice > 0) {
                    if (letra === letra.toUpperCase()) {
                        arreglo.push('_');
                        arreglo.push(letra.toUpperCase());
                    } else {
                        arreglo.push(letra.toUpperCase());
                    }
                } else {
                    arreglo.push(letra.toUpperCase());
                }
            }
        );
    return arreglo.join("");
}

const aNombreEspacioMayuscula = (cadena) => {
    let arreglo = [];
    cadena.split("")
        .forEach(
            (letra, indice) => {
                if (indice > 0) {
                    if (letra === letra.toUpperCase()) {
                        arreglo.push(' ');
                        arreglo.push(letra);
                    } else {
                        arreglo.push(letra);
                    }
                } else {
                    arreglo.push(letra);
                }
            }
        );
    return arreglo.join("");
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE_ESPANOL.nombre, ARGUMENTOS.NOMBRE_ESPANOL.configuracion);
        this.argument(ARGUMENTOS.NOMBRE_INGLES.nombre, ARGUMENTOS.NOMBRE_INGLES.configuracion);

        // opciones
        // this.option(OPCIONES.ES_FIREBASE.nombre, OPCIONES.ES_FIREBASE.configuracion);
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


    writing() {

        const nombreEspanol = this.options[ARGUMENTOS.NOMBRE_ESPANOL.nombre];
        const nombreMayusculaEspanol = aNombreEspacioMayuscula(nombreEspanol);

        const nombreIngles = this.options[ARGUMENTOS.NOMBRE_INGLES.nombre];
        const nombreMayusculaIngles = aNombreEspacioMayuscula(nombreIngles);


        // opciones
        // const esFirebase = this.options[OPCIONES.ES_FIREBASE.nombre];

        const variables = {
            nombreMayusculaEspanol,
            nombreMayusculaIngles,
        };

        const templateEN = this.templatePath(TEMPLATES.EN);
        const destinoEN = this.destinationPath(`./en.json`);

        this.fs.copyTpl(
            templateEN,
            destinoEN,
            variables
        );

        const templateES = this.templatePath(TEMPLATES.ES);
        const destinoES = this.destinationPath(`./es.json`);

        this.fs.copyTpl(
            templateES,
            destinoES,
            variables
        );
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        const nombre = this.options[ARGUMENTOS.NOMBRE_ESPANOL.nombre];
        const nombreMayusculaEspanol = aNombreEspacioMayuscula(nombre);
        this.log(`Archivos de internacionalizacion ${nombreMayusculaEspanol} creado :)`)
    }

};


