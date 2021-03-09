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
    ID: {
        nombre: 'id',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del Identificador de la tabla. Por defecto es "id". EJ: idEmpresaEcuatoriana'
        }
    },
    HABILITADO: {
        nombre: 'habilitado',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del campo habilitado. por defecto es "habilitado". EJ: empresaHabilitado'
        }
    }
}
const TEMPLATES = {
    ACTUALIZAR: 'actualizar-.ts',
    CREAR: 'crear-.ts',
    GRUPOS_FORMULARIO_BUSQUEDA: 'grupos-formulario-busqueda.ts',
    GRUPOS_FORMULARIO_CREAR_EDITAR: 'grupos-formulario-crear-editar.ts',
    RUTA_HTML: 'ruta-.component.html',
    RUTA_SCSS: 'ruta-.component.scss',
    RUTA_TS: 'ruta-.component.ts',
    S_RUTA_MODULE: 's-ruta-.module.ts',
    S_RUTA_SERVICE: 's-ruta-.service.ts',
    S_RUTA_PARAMETROS: 's-ruta-parametros.ts',
    CAMPO_BUSQUEDA: 'campo-busqueda.ts',
    CAMPO_HABILITADO: 'campo-habilitado.ts',
    FORMULARIO_BUSQUEDA: 'formulario-busqueda.ts',
    INTERFACE: '.interface.ts',
    MODULE: '.module.ts',
    SERVICE: '.service.ts',
    BUSQUEDA_DTO: '-busqueda.dto.ts',
    CAMPO_NOMBRE: 'campo--nombre.ts',
    FORMULARIO_CREAR_EDITAR: 'formulario-.ts',
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
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
        this.argument(ARGUMENTOS.ID.nombre, ARGUMENTOS.ID.configuracion);
        this.argument(ARGUMENTOS.HABILITADO.nombre, ARGUMENTOS.HABILITADO.configuracion);
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

        const nombreMayuscula = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreCamel = aCamel(nombreMayuscula);
        const nombreGuiones = camelADash(nombreCamel);
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula);
        let id = this.options[ARGUMENTOS.ID.nombre];
        let nombreHabilitado = this.options[ARGUMENTOS.HABILITADO.nombre];
        if (!id) {
            id = 'id';
        }
        if (!nombreHabilitado) {
            nombreHabilitado = 'sisHabilitado';
        }

        const variables = {
            nombreMayuscula,
            nombreCamel,
            nombreGuiones,
            nombreSoloMayusculas,
            nombreEspacioMayuscula,
            id,
            nombreHabilitado
        };

        const templateActualizar = this.templatePath(TEMPLATES.ACTUALIZAR);
        const destinoActualizar = this.destinationPath(`./clases/actualizar-${nombreGuiones}.ts`);

        this.fs.copyTpl(
            templateActualizar,
            destinoActualizar,
            variables
        );

        const templateCrear = this.templatePath(TEMPLATES.CREAR);
        const destinoCrear = this.destinationPath(`./clases/crear-${nombreGuiones}.ts`);

        this.fs.copyTpl(
            templateCrear,
            destinoCrear,
            variables
        );

        const templateGFB = this.templatePath(TEMPLATES.GRUPOS_FORMULARIO_BUSQUEDA);
        const destinoGFB = this.destinationPath(`./s-ruta-${nombreGuiones}/grupos-formulario-busqueda.ts`);

        this.fs.copyTpl(
            templateGFB,
            destinoGFB,
            variables
        );

        const templateGFCE = this.templatePath(TEMPLATES.GRUPOS_FORMULARIO_CREAR_EDITAR);
        const destinoGFCE = this.destinationPath(`./s-ruta-${nombreGuiones}/grupos-formulario-crear-editar.ts`);

        this.fs.copyTpl(
            templateGFCE,
            destinoGFCE,
            variables
        );

        const templateRH = this.templatePath(TEMPLATES.RUTA_HTML);
        const destinoRH = this.destinationPath(`ruta-${nombreGuiones}.component.html`);

        this.fs.copyTpl(
            templateRH,
            destinoRH,
            variables
        );

        const templateRS = this.templatePath(TEMPLATES.RUTA_SCSS);
        const destinoRS = this.destinationPath(`ruta-${nombreGuiones}.component.scss`);

        this.fs.copyTpl(
            templateRS,
            destinoRS,
            variables
        );

        const templateRT = this.templatePath(TEMPLATES.RUTA_TS);
        const destinoRT = this.destinationPath(`ruta-${nombreGuiones}.component.ts`);

        this.fs.copyTpl(
            templateRT,
            destinoRT,
            variables
        );

        const templateSRM = this.templatePath(TEMPLATES.S_RUTA_MODULE);
        const destinoSRM = this.destinationPath(`./s-ruta-${nombreGuiones}/s-ruta-${nombreGuiones}.module.ts`);

        this.fs.copyTpl(
            templateSRM,
            destinoSRM,
            variables
        );

        const templateSRS = this.templatePath(TEMPLATES.S_RUTA_SERVICE);
        const destinoSRS = this.destinationPath(`./s-ruta-${nombreGuiones}/s-ruta-${nombreGuiones}.service.ts`);

        this.fs.copyTpl(
            templateSRS,
            destinoSRS,
            variables
        );

        const templateSRP = this.templatePath(TEMPLATES.S_RUTA_PARAMETROS);
        const destinoSRP = this.destinationPath(`./interfaces/s-ruta-${nombreGuiones}.parametros.ts`);

        this.fs.copyTpl(
            templateSRP,
            destinoSRP,
            variables
        );

        const templateCB = this.templatePath(TEMPLATES.CAMPO_BUSQUEDA);
        const destinoCB = this.destinationPath(`./busqueda-filtros/busqueda/${nombreGuiones}-campo-texto-busqueda.ts`);

        this.fs.copyTpl(
            templateCB,
            destinoCB,
            variables
        );

        const templateCH = this.templatePath(TEMPLATES.CAMPO_HABILITADO);
        const destinoCH = this.destinationPath(`./busqueda-filtros/busqueda/${nombreGuiones}-campo-select-habilitado.ts`);

        this.fs.copyTpl(
            templateCH,
            destinoCH,
            variables
        );

        const templateFB = this.templatePath(TEMPLATES.FORMULARIO_BUSQUEDA);
        const destinoFB = this.destinationPath(`./busqueda-filtros/busqueda/${nombreGuiones}-formulario-busqueda.ts`);

        this.fs.copyTpl(
            templateFB,
            destinoFB,
            variables
        );

        const templateI = this.templatePath(TEMPLATES.INTERFACE);
        const destinoI = this.destinationPath(`../../interfaces/${nombreGuiones}.interface.ts`);

        this.fs.copyTpl(
            templateI,
            destinoI,
            variables
        );

        const templateM = this.templatePath(TEMPLATES.MODULE);
        const destinoM = this.destinationPath(`../../servicios/${nombreGuiones}/${nombreGuiones}.module.ts`);

        this.fs.copyTpl(
            templateM,
            destinoM,
            variables
        );

        const templateS = this.templatePath(TEMPLATES.SERVICE);
        const destinoS = this.destinationPath(`../../servicios/${nombreGuiones}/${nombreGuiones}.service.ts`);

        this.fs.copyTpl(
            templateS,
            destinoS,
            variables
        );

        const templateBD = this.templatePath(TEMPLATES.BUSQUEDA_DTO);
        const destinoBD = this.destinationPath(`../../dto/${nombreGuiones}-busqueda.dto.ts`);

        this.fs.copyTpl(
            templateBD,
            destinoBD,
            variables
        );

        // const templateCN = this.templatePath(TEMPLATES.CAMPO_NOMBRE);
        // const destinoCN = this.destinationPath(`../../formularios/${nombreGuiones}/${nombreGuiones}-campo-texto-nombre.ts`);
        //
        // this.fs.copyTpl(
        //     templateCN,
        //     destinoCN,
        //     variables
        // );

        const templateFCE = this.templatePath(TEMPLATES.FORMULARIO_CREAR_EDITAR);
        const destinoFCE = this.destinationPath(`../../formularios/${nombreGuiones}/${nombreGuiones}-formulario.ts`);

        this.fs.copyTpl(
            templateFCE,
            destinoFCE,
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


