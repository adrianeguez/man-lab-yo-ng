var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE_RUTA: {
        nombre: 'nombreRuta',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la ruta EJ: EmpresaYEcuatoriana'
        }
    },
}

const OPCIONES = {
    // NOMBRE_PREFIJO: {
    //     nombre: 'nombrePrefijo',
    //     configuracion: {
    //         type: String,
    //         default: undefined,
    //         desc: 'Nombre del prefijo del campo. Al final este se pondra detras del nombre  EJ: NombreRuta NombreCampo texto --nombrePrefijo=atr'
    //     }
    // },
}
const TEMPLATES = {
    README: '.md',
    ARREGLO_PRUEBAS_CONSTANTE: 'arreglo-pruebas.constante.ts',
    GESTION_ETIQUETAS: 'gestion-.etiquetas.ts',
    INDICE_SPEC: 'indice.spec.ts',
    IR_RUTA_GESTION_FUNCION: 'ir-ruta-gestion-.funcion.ts',
    PRUEBA_NAVEGACION_CONSTANTE: 'prueba-navegacion-.constante.ts',
    PRUEBA_NAVEGACION_ETIQUETAS: 'prueba-navegacion-.etiquetas.ts',
    PRUEBA_NAVEGACION_FUNCION: 'prueba-navegacion-.funcion.ts',
    PRUEBA_NAVEGACION_INTERFACE: 'prueba-navegacion-.interface.ts',
    PRUEBA_NAVEGACION_SPEC: 'prueba-navegacion-.spec.ts',
    PRUEBA_SEGURIDAD_PERMISO_CONSTANTE: 'prueba-seguridad-permiso-.constante.ts',
    PRUEBA_SEGURIDAD_PERMISO_ETIQUETAS: 'prueba-seguridad-permiso-.etiquetas.ts',
    PRUEBA_SEGURIDAD_PERMISO_FUNCION: 'prueba-seguridad-permiso-.funcion.ts',
    PRUEBA_SEGURIDAD_PERMISO_INTERFACE: 'prueba-seguridad-permiso-.interface.ts',
    PRUEBA_SEGURIDAD_PERMISO_SPEC: 'prueba-seguridad-permiso-.spec.ts',
    RUTA_CONSTANTE: 'ruta-.constante.ts'
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
        // argumentos
        this.argument(ARGUMENTOS.NOMBRE_RUTA.nombre, ARGUMENTOS.NOMBRE_RUTA.configuracion);

        // opciones
        // this.option(OPCIONES.NOMBRE_PREFIJO.nombre, OPCIONES.NOMBRE_PREFIJO.configuracion);

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

        const nombreMayuscula = this.options[ARGUMENTOS.NOMBRE_RUTA.nombre];
        const nombreCamel = aCamel(nombreMayuscula);
        const nombreGuiones = camelADash(nombreCamel);
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula);

        // opciones
        // const nombrePrefijo = this.options[OPCIONES.NOMBRE_PREFIJO.nombre];

        const variables = {
            nombreMayuscula,
            nombreCamel,
            nombreGuiones,
            nombreSoloMayusculas,
            nombreEspacioMayuscula,
        };

        const templateRM = this.templatePath(TEMPLATES.README);
        const destinoRM = this.destinationPath(`./ruta-${nombreGuiones}/${nombreGuiones}.md`);

        this.fs.copyTpl(
            templateRM,
            destinoRM,
            variables
        );

        const templateAPC = this.templatePath(TEMPLATES.ARREGLO_PRUEBAS_CONSTANTE);
        const destinoAPC = this.destinationPath(`./ruta-${nombreGuiones}/constantes/ruta-${nombreGuiones}.constante.ts`);

        this.fs.copyTpl(
            templateAPC,
            destinoAPC,
            variables
        );

        const templateGE = this.templatePath(TEMPLATES.GESTION_ETIQUETAS);
        const destinoGE = this.destinationPath(`./ruta-${nombreGuiones}/etiquetas/gestion-${nombreGuiones}.etiquetas.ts`);

        this.fs.copyTpl(
            templateGE,
            destinoGE,
            variables
        );

        const templateIS = this.templatePath(TEMPLATES.INDICE_SPEC);
        const destinoIS = this.destinationPath(`./ruta-${nombreGuiones}/pruebas/indice.spec.ts`);

        this.fs.copyTpl(
            templateIS,
            destinoIS,
            variables
        );

        const templateIRGF = this.templatePath(TEMPLATES.IR_RUTA_GESTION_FUNCION);
        const destinoIRGF = this.destinationPath(`./ruta-${nombreGuiones}/definicion-rutas/ir-ruta-gestion-${nombreGuiones}.funcion.ts`);

        this.fs.copyTpl(
            templateIRGF,
            destinoIRGF,
            variables
        );

        const templatePNC = this.templatePath(TEMPLATES.PRUEBA_NAVEGACION_CONSTANTE);
        const destinoPNC = this.destinationPath(`./ruta-${nombreGuiones}/pruebas/prueba-navegacion-${nombreGuiones}/prueba-navegacion-${nombreGuiones}.constante.ts`);

        this.fs.copyTpl(
            templatePNC,
            destinoPNC,
            variables
        );

        const templatePNE = this.templatePath(TEMPLATES.PRUEBA_NAVEGACION_ETIQUETAS);
        const destinoPNE = this.destinationPath(`./ruta-${nombreGuiones}/pruebas/prueba-navegacion-${nombreGuiones}/prueba-navegacion-${nombreGuiones}.etiquetas.ts`);

        this.fs.copyTpl(
            templatePNE,
            destinoPNE,
            variables
        );

        const templatePNF = this.templatePath(TEMPLATES.PRUEBA_NAVEGACION_FUNCION);
        const destinoPNF = this.destinationPath(`./ruta-${nombreGuiones}/pruebas/prueba-navegacion-${nombreGuiones}/prueba-navegacion-${nombreGuiones}.funcion.ts`);

        this.fs.copyTpl(
            templatePNF,
            destinoPNF,
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
        const nombre = this.options[ARGUMENTOS.NOMBRE_CAMPO.nombre];
        this.log(`Campo ${nombre} creado :)`)
    }

};


