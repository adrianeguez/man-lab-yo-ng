var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    // nombreMayuscula
    // id
    // nombreCamel
    // nombreHabilitado
    // nombreGuines
    // nombreSoloMayusculas
    // nombreEspacioMayuscula
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la entidad EJ: EmpresaYEcuatoriana'
        }
    },
    NOMBRE_PAQUETE: {
        nombre: 'nombrePaquete',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del paquete java "package com.ec.prontiauto.controller". EJ: prontiauto'
        }
    },
}
const TEMPLATES = {
    CONTROLLER: 'Controller.ejs',
    REQUEST_DAO: 'RequestDao.ejs',
    RESPONSE_DAO: 'ResponseDao.ejs',
    MAPPER: 'Mapper.ejs',
    ENTIDAD: 'Entidad.ejs',
    IMPL: 'RepositoryImpl.ejs',
}
const OPCIONES = {
    // ES_FIREBASE: {
    //     nombre: 'esFirebase',
    //     configuracion: {
    //         type: String,
    //         default: undefined,
    //         desc: 'Si debe de crearse con los servicios de Firebase EJ: NombreRuta idRuta nombreHabilitado --esFirebase true'
    //     }
    // },
    // INTERNACIONALIZAR: {
    //     nombre: 'internacionalizar',
    //     configuracion: {
    //         type: String,
    //         default: undefined,
    //         desc: 'Modificar el template si es internacionalizable. EJ:  NombreRuta idRuta nombreHabilitado --internacionalizar=true'
    //     }
    // },
    // IONIC: {
    //     nombre: 'ionic',
    //     configuracion: {
    //         type: String,
    //         default: undefined,
    //         desc: 'Rutas para ionic (no es necesario mandar internacionalizar) EJ:  NombreRuta idRuta nombreHabilitado --ionic=true'
    //     }
    // },
}
const aCamel = (cadena) => {
    return cadena.charAt(0).toLowerCase() + cadena.slice(1);
}

const camelADash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


const camelALowerDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `_${letter.toLowerCase()}`);

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
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
        this.argument(ARGUMENTOS.NOMBRE_PAQUETE.nombre, ARGUMENTOS.NOMBRE_PAQUETE.configuracion);

        // opciones
        // this.option(OPCIONES.ES_FIREBASE.nombre, OPCIONES.ES_FIREBASE.configuracion);
        // this.option(OPCIONES.INTERNACIONALIZAR.nombre, OPCIONES.INTERNACIONALIZAR.configuracion);
        // this.option(OPCIONES.IONIC.nombre, OPCIONES.IONIC.configuracion);
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

        /**
         * 
         *
         *  LibroAutor
        const nombreMayuscula = this.options[ARGUMENTOS.NOMBRE.nombre];
        // LibroAutor
        const nombreCamel = aCamel(nombreMayuscula);
        // libroAutor
        const nombreGuiones = camelADash(nombreCamel);
        // libro-autor
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        // LIBRO_AUTOR
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula); 
        // LIBRO AUTOR
         * 
         * 
         */

        const nombreMayuscula = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreCamel = aCamel(nombreMayuscula);
        const nombreGuiones = camelADash(nombreCamel);
        const nombreGuionesBajos = camelALowerDash(nombreCamel);
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula);
        const nombrePaquete = this.options[ARGUMENTOS.NOMBRE_PAQUETE.nombre];

        // opciones
        // const esFirebase = this.options[OPCIONES.ES_FIREBASE.nombre];
        // const internacionalizar = this.options[OPCIONES.INTERNACIONALIZAR.nombre];
        // const ionic = this.options[OPCIONES.IONIC.nombre];

        const variables = {
            nombreMayuscula,
            nombreCamel,
            nombreGuiones,
            nombreSoloMayusculas,
            nombreEspacioMayuscula,
            nombrePaquete,
            nombreGuionesBajos,
        };
        const templateController = this.templatePath(TEMPLATES.CONTROLLER);
        const destinoController = this.destinationPath(`./controller/${nombreMayuscula}Controller.java`);

        this.fs.copyTpl(
            templateController,
            destinoController,
            variables
        );
        const templateRequestDao = this.templatePath(TEMPLATES.REQUEST_DAO);
        const destinoRequestDao = this.destinationPath(`./dao/${nombreMayuscula}RequestDao.java`);

        this.fs.copyTpl(
            templateRequestDao,
            destinoRequestDao,
            variables
        );

        const templateResponseDao = this.templatePath(TEMPLATES.RESPONSE_DAO);
        const destinoResponseDao = this.destinationPath(`./dao/${nombreMayuscula}ResponseDao.java`);

        this.fs.copyTpl(
            templateResponseDao,
            destinoResponseDao,
            variables
        );


        const templateMapper = this.templatePath(TEMPLATES.MAPPER);
        const destinoMapper = this.destinationPath(`./dao/${nombreMayuscula}Mapper.java`);

        this.fs.copyTpl(
            templateMapper,
            destinoMapper,
            variables
        );

        const templateEntidad = this.templatePath(TEMPLATES.ENTIDAD);
        const destinoEntidad = this.destinationPath(`./entidad/${nombreMayuscula}.java`);

        this.fs.copyTpl(
            templateEntidad,
            destinoEntidad,
            variables
        );
        const templateImpl = this.templatePath(TEMPLATES.IMPL);
        const destinoImpl = this.destinationPath(`./repository/repositoryImpl/${nombreMayuscula}RepositoryImpl.java`);

        this.fs.copyTpl(
            templateImpl,
            destinoImpl,
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
        const nombre = this.options[ARGUMENTOS.NOMBRE.nombre];
        this.log(`ruta ${nombre} creado :)`)
    }

};


