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
            desc: 'Nombre del campo habilitado. por defecto es "sisHabilitado". EJ: empresaHabilitado'
        }
    }
}
const TEMPLATES = {
    // ACTUALIZAR: 'actualizar-.ts',
    // CREAR: 'crear-.ts',
    // GRUPOS_FORMULARIO_BUSQUEDA: 'grupos-formulario-busqueda.ts',
    // GRUPOS_FORMULARIO_CREAR_EDITAR: 'grupos-formulario-crear-editar.ts',
    // RUTA_HTML: 'ruta-.component.html',
    // RUTA_SCSS: 'ruta-.component.scss',
    // RUTA_TS: 'ruta-.component.ts',
    // S_RUTA_MODULE: 's-ruta-.module.ts',
    // S_RUTA_SERVICE: 's-ruta-.service.ts',
    // S_RUTA_PARAMETROS: 's-ruta-parametros.ts',
    // CAMPO_BUSQUEDA: 'campo-busqueda.ts',
    // CAMPO_HABILITADO: 'campo-habilitado.ts',
    // FORMULARIO_BUSQUEDA: 'formulario-busqueda.ts',
    // INTERFACE: '.interface.ts',
    // MODULE: '.module.ts',
    // SERVICE: '.service.ts',
    // BUSQUEDA_DTO: '-busqueda.dto.ts',
    // CAMPO_NOMBRE: 'campo--nombre.ts',
    // FORMULARIO_CREAR_EDITAR: 'formulario-.ts',
    // MIGAS_PAN: '-migas-pan.ts',
    // LOADER_TRANSLOCO: 'loader-.ts',
    // GUARD: '.guard.ts',
    // PAGE_MODULE: '-page.module.ts',
    // PAGE_ROUTING_MODULE: '-page-routing.module.ts',
    // MOSTRAR_LISTA_HTML: 'mostrar--lista.component.html',
    // MOSTRAR_LISTA_SCSS: 'mostrar--lista.component.scss',
    // MOSTRAR_LISTA_TS: 'mostrar--lista.component.ts',
    // MOSTRAR_LISTA_MODULE: 'mostrar--lista.module.ts',
    //
    // NOMBRE_MODULO: 'nombre-modulo.ts',
    // NOMBRE_MODULO_ASSETS: 'nombre-modulo-assets.ts',
    //
    // PERFIL_HTML: 'perfil-.component.html',
    // PERFIL_SCSS: 'perfil-.component.scss',
    // PERFIL_TS: 'perfil-.component.ts',
    // PERFIL_MODULE: 'perfil-.module.ts',
    TABS_ARRAY: '-tabs-array.ts',
    PERFIL_MODULE: '-perfil.module.ts',
    PERFIL_C_TS: '-perfil.component.ts',
    PERFIL_C_HTML: '-perfil.component.html',
    PERFIL_C_SCSS: '-perfil.component.scss',
    TABLA_TS: '-tabla.component.ts',
    TABLA_MODULE: '-tabla.module.ts',
    TABLA_HTML: '-tabla.component.html',
    TABLA_SCSS: '-tabla.component.scss',
    DECLARATION: '-declarations.ts',
    IMPORTS: '-imports.ts',
    PROVIDERS: '-providers.ts',
    FORM_ENUM: 'form-.enum.ts',
    FORM: 'form-.ts',
    RUTA_TS: 'ruta-.component.ts',
    RUTA_HTML: 'ruta-.component.html',
    RUTA_SCSS: 'ruta-.component.scss',
    CREATE_DTO: '-create-dto.ts',
    FIND_DTO: '-find-dto.ts',
    RESPONSE_DTO: '-response-dto.ts',
    UPDATE_DTO: '-update-dto.ts',
    MODULE: '.module.ts',
    HTTP_SERVICE: 'http--service.ts',
    HTTP_MODULE: 'http--module.ts',
    ROUTING: '-routing.module.ts',
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
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula);
        let id = this.options[ARGUMENTOS.ID.nombre];
        let nombreHabilitado = this.options[ARGUMENTOS.HABILITADO.nombre];

        // opciones
        // const esFirebase = this.options[OPCIONES.ES_FIREBASE.nombre];
        // const internacionalizar = this.options[OPCIONES.INTERNACIONALIZAR.nombre];
        // const ionic = this.options[OPCIONES.IONIC.nombre];

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
            nombreHabilitado,

        };
        const templateTabsArray = this.templatePath(TEMPLATES.TABS_ARRAY);
        const destinoTabsArray = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-perfil/constantes/${nombreGuiones}-tabs-array.ts`);

        this.fs.copyTpl(
            templateTabsArray,
            destinoTabsArray,
            variables
        );
        const templatePerfilModule = this.templatePath(TEMPLATES.PERFIL_MODULE);
        const destinoPerfilModule = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-perfil/${nombreGuiones}-perfil.module.ts`);
        this.fs.copyTpl(
            templatePerfilModule,
            destinoPerfilModule,
            variables
        );

        const templatePerfilComponent = this.templatePath(TEMPLATES.PERFIL_C_TS);
        const destinoPerfilComponent = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-perfil/${nombreGuiones}-perfil.component.ts`);
        this.fs.copyTpl(
            templatePerfilComponent,
            destinoPerfilComponent,
            variables
        );

        const templatePerfilComponentHTML = this.templatePath(TEMPLATES.PERFIL_C_HTML);
        const destinoPerfilComponentHTML = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-perfil/${nombreGuiones}-perfil.component.html`);
        this.fs.copyTpl(
            templatePerfilComponentHTML,
            destinoPerfilComponentHTML,
            variables
        );

        const templatePerfilComponentScss = this.templatePath(TEMPLATES.PERFIL_C_SCSS);
        const destinoPerfilComponentScss = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-perfil/${nombreGuiones}-perfil.component.scss`);
        this.fs.copyTpl(
            templatePerfilComponentScss,
            destinoPerfilComponentScss,
            variables
        );
        const templateTablaComponentTs = this.templatePath(TEMPLATES.TABLA_TS);
        const destinoTablaComponentTs = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.ts`);
        this.fs.copyTpl(
            templateTablaComponentTs,
            destinoTablaComponentTs,
            variables
        );
        const templateTablaComponentHTML = this.templatePath(TEMPLATES.TABLA_HTML);
        const destinoTablaComponentHTML = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.html`);
        this.fs.copyTpl(
            templateTablaComponentHTML,
            destinoTablaComponentHTML,
            variables
        );
        const templateTablaComponentSCSS = this.templatePath(TEMPLATES.TABLA_SCSS);
        const destinoTablaComponentSCSS = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.scss`);
        this.fs.copyTpl(
            templateTablaComponentSCSS,
            destinoTablaComponentSCSS,
            variables
        );

        const templateTablaModule = this.templatePath(TEMPLATES.TABLA_MODULE);
        const destinoTablaModule = this.destinationPath(`./${nombreGuiones}/componentes/${nombreGuiones}-tabla/${nombreGuiones}-tabla.module.ts`);
        this.fs.copyTpl(
            templateTablaModule,
            destinoTablaModule,
            variables
        );

        const templateDeclaration = this.templatePath(TEMPLATES.DECLARATION);
        const destinoDeclaration = this.destinationPath(`./${nombreGuiones}/constantes/${nombreGuiones}-declarations.ts`);
        this.fs.copyTpl(
            templateDeclaration,
            destinoDeclaration,
            variables
        );

        const templateImports = this.templatePath(TEMPLATES.IMPORTS);
        const destinoImports = this.destinationPath(`./${nombreGuiones}/constantes/${nombreGuiones}-imports.ts`);
        this.fs.copyTpl(
            templateImports,
            destinoImports,
            variables
        );
        const templateProviders = this.templatePath(TEMPLATES.PROVIDERS);
        const destinoProviders = this.destinationPath(`./${nombreGuiones}/constantes/${nombreGuiones}-providers.ts`);
        this.fs.copyTpl(
            templateProviders,
            destinoProviders,
            variables
        );

        const templateFormEnum = this.templatePath(TEMPLATES.FORM_ENUM);
        const destinoFormEnum = this.destinationPath(`./${nombreGuiones}/form/form-${nombreGuiones}.enum.ts`);
        this.fs.copyTpl(
            templateFormEnum,
            destinoFormEnum,
            variables
        );
        const templateForm = this.templatePath(TEMPLATES.FORM);
        const destinoForm = this.destinationPath(`./${nombreGuiones}/form/form-${nombreGuiones}.ts`);
        this.fs.copyTpl(
            templateForm,
            destinoForm,
            variables
        );
        const templateRutaTs = this.templatePath(TEMPLATES.RUTA_TS);
        const destinoRutaTs = this.destinationPath(`./${nombreGuiones}/rutas/ruta-${nombreGuiones}/ruta-${nombreGuiones}.component.ts`);
        this.fs.copyTpl(
            templateRutaTs,
            destinoRutaTs,
            variables
        );

        const templateRutaHTML = this.templatePath(TEMPLATES.RUTA_HTML);
        const destinoRutaHTML = this.destinationPath(`./${nombreGuiones}/rutas/ruta-${nombreGuiones}/ruta-${nombreGuiones}.component.html`);
        this.fs.copyTpl(
            templateRutaHTML,
            destinoRutaHTML,
            variables
        );

        const templateRutaSCSS = this.templatePath(TEMPLATES.RUTA_SCSS);
        const destinoRutaSCSS = this.destinationPath(`./${nombreGuiones}/rutas/ruta-${nombreGuiones}/ruta-${nombreGuiones}.component.scss`);
        this.fs.copyTpl(
            templateRutaSCSS,
            destinoRutaSCSS,
            variables
        );

        const templateCreateDTO = this.templatePath(TEMPLATES.CREATE_DTO);
        const destinoCreateDTO = this.destinationPath(`./${nombreGuiones}/servicios/dto/${nombreGuiones}.create-dto.ts`);
        this.fs.copyTpl(
            templateCreateDTO,
            destinoCreateDTO,
            variables
        );

        const templateFindDTO = this.templatePath(TEMPLATES.FIND_DTO);
        const destinoFindDTO = this.destinationPath(`./${nombreGuiones}/servicios/dto/${nombreGuiones}.find-dto.ts`);
        this.fs.copyTpl(
            templateFindDTO,
            destinoFindDTO,
            variables
        );

        const templateResponseDTO = this.templatePath(TEMPLATES.RESPONSE_DTO);
        const destinoResponseDTO = this.destinationPath(`./${nombreGuiones}/servicios/dto/${nombreGuiones}.response-dto.ts`);
        this.fs.copyTpl(
            templateResponseDTO,
            destinoResponseDTO,
            variables
        );

        const templateUpdateDTO = this.templatePath(TEMPLATES.UPDATE_DTO);
        const destinoUpdateDTO = this.destinationPath(`./${nombreGuiones}/servicios/dto/${nombreGuiones}.update-dto.ts`);
        this.fs.copyTpl(
            templateUpdateDTO,
            destinoUpdateDTO,
            variables
        );

        const templateHttpService = this.templatePath(TEMPLATES.HTTP_SERVICE);
        const destinoHttpService = this.destinationPath(`./${nombreGuiones}/servicios/http-${nombreGuiones}-service.ts`);
        this.fs.copyTpl(
            templateHttpService,
            destinoHttpService,
            variables
        );
        const templateHttpModule = this.templatePath(TEMPLATES.HTTP_MODULE);
        const destinoHttpModule = this.destinationPath(`./${nombreGuiones}/servicios/http-${nombreGuiones}-module.ts`);
        this.fs.copyTpl(
            templateHttpModule,
            destinoHttpModule,
            variables
        );
        const templateModule = this.templatePath(TEMPLATES.MODULE);
        const destinoModule = this.destinationPath(`./${nombreGuiones}/${nombreGuiones}.module.ts`);
        this.fs.copyTpl(
            templateModule,
            destinoModule,
            variables
        );
        const templateRouting = this.templatePath(TEMPLATES.ROUTING);
        const destinoRouting = this.destinationPath(`./${nombreGuiones}/${nombreGuiones}-routing.module.ts`);
        this.fs.copyTpl(
            templateRouting,
            destinoRouting,
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


