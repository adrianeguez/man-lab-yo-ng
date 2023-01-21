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
    // TABS_ARRAY: '-tabs-array.ts',
    // PERFIL_MODULE: '-perfil.module.ts',
    // PERFIL_C_TS: '-perfil.component.ts',
    // PERFIL_C_HTML: '-perfil.component.html',
    // PERFIL_C_SCSS: '-perfil.component.scss',
    // TABLA_TS: '-tabla.component.ts',
    // TABLA_MODULE: '-tabla.module.ts',
    // TABLA_HTML: '-tabla.component.html',
    // TABLA_SCSS: '-tabla.component.scss',
    // DECLARATION: '-declarations.ts',
    // IMPORTS: '-imports.ts',
    // PROVIDERS: '-providers.ts',
    // FORM_ENUM: 'form-.enum.ts',
    // FORM: 'form-.ts',
    // RUTA_TS: 'ruta-.component.ts',
    // RUTA_HTML: 'ruta-.component.html',
    // RUTA_SCSS: 'ruta-.component.scss',
    // CREATE_DTO: '-create-dto.ts',
    // FIND_DTO: '-find-dto.ts',
    // RESPONSE_DTO: '-response-dto.ts',
    // UPDATE_DTO: '-update-dto.ts',
    // MODULE: '.module.ts',
    // HTTP_SERVICE: 'http--service.ts',
    // HTTP_MODULE: 'http--module.ts',
    // ROUTING: '-routing.module.ts',

    SRV_SORT: '.sort.ts',
    SRV_HTTP_MODULE: '.http.module.ts',
    SRV_HTTP_SERVICE: '.http.service.ts',
    SRV_FORM_MODULE: '.forms.module.ts',
    SRV_FORM_UP_COM_TS: '.update.dto.component.ts',
    SRV_FORM_UP_COM_HTML: '.update.dto.component.html',
    SRV_FORM_UP_COM_SCSS: '.update.dto.component.scss',
    SRV_FORM_FIND_COM_TS: '.update.dto.component.ts',
    SRV_FORM_FIND_COM_HTML: '.update.dto.component.html',
    SRV_FORM_FIND_COM_SCSS: '.update.dto.component.scss',
    SRV_FORM_CREATE_COM_TS: '.update.dto.component.ts',
    SRV_FORM_CREATE_COM_HTML: '.update.dto.component.html',
    SRV_FORM_CREATE_COM_SCSS: '.update.dto.component.scss',
    SRV_FORM_SELECT: '-select.ts',
    SRV_CREA_UP_DTO_COM: '.create-update-comun.dto.ts',
    SRV_ENUM: 'Enum.ts',
    SRV_CREATE_DTO: '.create.dto.ts',
    SRV_DTO: '.dto.ts',
    SRV_FIND_DTO: '.find.dto.ts',
    SRV_UPDATE_DTO: '.update.dto.ts',
    SRV_UPDATE_HABILITADO_DTO: '.update-habilitado.dto.ts',
    RUTA_IMPORTS: 'ruta-.import.ts',
    RUTA_ROUTER: 'ruta-.router.ts',
    RUTA_COMP_TS: 'ruta-.component.ts',
    RUTA_COMP_HTML: 'ruta-.component.html',
    RUTA_COMP_SCSS: 'ruta-.component.scss',
    TABLA_MODULE: '-tabla.module.ts',
    TABLA_COMP_TS: '-tabla.component.ts',
    TABLA_COMP_HTML: '-tabla.component.html',
    TABLA_COMP_SCSS: '-tabla.component.scss',
    TABLA_MOV_MODULE: '-tabla-movil.module.ts',
    TABLA_MOV_COMP_TS: '-tabla-movil.component.ts',
    TABLA_MOV_COMP_HTML: '-tabla-movil.component.html',
    TABLA_MOV_COMP_SCSS: '-tabla-movil.component.scss',

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
        // componentes tabla 
        const templateComponenteTablaModulo = this.templatePath(TEMPLATES.TABLA_MODULE);
        const destinoComponenteTablaModulo = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla/${nombreGuiones}-tabla.module.ts`);

        this.fs.copyTpl(
            templateComponenteTablaModulo,
            destinoComponenteTablaModulo,
            variables
        );

        const templateComponenteTablaTs = this.templatePath(TEMPLATES.TABLA_COMP_TS);
        const destinoComponenteTablaTs = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.ts`);

        this.fs.copyTpl(
            templateComponenteTablaTs,
            destinoComponenteTablaTs,
            variables
        );

        const templateComponenteTablaHTML = this.templatePath(TEMPLATES.TABLA_COMP_HTML);
        const destinoComponenteTablaHTML = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.html`);

        this.fs.copyTpl(
            templateComponenteTablaHTML,
            destinoComponenteTablaHTML,
            variables
        );

        const templateComponenteTablaSCSS = this.templatePath(TEMPLATES.TABLA_COMP_SCSS);
        const destinoComponenteTablaSCSS = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla/${nombreGuiones}-tabla.component.scss`);

        this.fs.copyTpl(
            templateComponenteTablaSCSS,
            destinoComponenteTablaSCSS,
            variables
        );
        
        // componentes/tabla-movil
        const templateComponenteTablaMovilModulo = this.templatePath(TEMPLATES.TABLA_MOV_MODULE);
        const destinoComponenteTablaMovilModulo = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla-movil/${nombreGuiones}-tabla-movil.module.ts`);

        this.fs.copyTpl(
            templateComponenteTablaMovilModulo,
            destinoComponenteTablaMovilModulo,
            variables
        );

        const templateComponenteTablaMovilTs = this.templatePath(TEMPLATES.TABLA_MOV_COMP_TS);
        const destinoComponenteTablaMovilTs = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla-movil/${nombreGuiones}-tabla-movil.component.ts`);

        this.fs.copyTpl(
            templateComponenteTablaMovilTs,
            destinoComponenteTablaMovilTs,
            variables
        );

        const templateComponenteTablaMovilHTML = this.templatePath(TEMPLATES.TABLA_MOV_COMP_HTML);
        const destinoComponenteTablaMovilHTML = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla-movil/${nombreGuiones}-tabla-movil.component.html`);

        this.fs.copyTpl(
            templateComponenteTablaMovilHTML,
            destinoComponenteTablaMovilHTML,
            variables
        );

        const templateComponenteTablaMovilSCSS = this.templatePath(TEMPLATES.TABLA_MOV_COMP_SCSS);
        const destinoComponenteTablaMovilSCSS = this.destinationPath(`./componentes/${nombreGuiones}/${nombreGuiones}-tabla-movil/${nombreGuiones}-tabla-movil.component.scss`);

        this.fs.copyTpl(
            templateComponenteTablaMovilSCSS,
            destinoComponenteTablaMovilSCSS,
            variables
        );
        
        //rutas
        const templateRutaImports = this.templatePath(TEMPLATES.RUTA_IMPORTS);
        const destinoRutaImports = this.destinationPath(`./rutas/${nombreGuiones}/${nombreGuiones}.imports.ts`);

        this.fs.copyTpl(
            templateRutaImports,
            destinoRutaImports,
            variables
        );

        const templateRutaRouter = this.templatePath(TEMPLATES.RUTA_ROUTER);
        const destinoRutaRouter = this.destinationPath(`./rutas/${nombreGuiones}/${nombreGuiones}.router.ts`);

        this.fs.copyTpl(
            templateRutaRouter,
            destinoRutaRouter,
            variables
        );
        const templateRutaComponenteTS = this.templatePath(TEMPLATES.RUTA_COMP_TS);
        const destinoRutaComponenteTS = this.destinationPath(`./rutas/${nombreGuiones}/${nombreGuiones}.component.ts`);

        this.fs.copyTpl(
            templateRutaComponenteTS,
            destinoRutaComponenteTS,
            variables
        );

        const templateRutaComponenteHTML = this.templatePath(TEMPLATES.RUTA_COMP_HTML);
        const destinoRutaComponenteHTML = this.destinationPath(`./rutas/${nombreGuiones}/${nombreGuiones}.component.html`);

        this.fs.copyTpl(
            templateRutaComponenteHTML,
            destinoRutaComponenteHTML,
            variables
        );

        const templateRutaComponenteScss = this.templatePath(TEMPLATES.RUTA_COMP_SCSS);
        const destinoRutaComponenteScss = this.destinationPath(`./rutas/${nombreGuiones}/${nombreGuiones}.component.scss`);

        this.fs.copyTpl(
            templateRutaComponenteScss,
            destinoRutaComponenteScss,
            variables
        );

        // servicios dto
        const templateServiciosCreateDTO = this.templatePath(TEMPLATES.SRV_CREATE_DTO);
        const destinoServiciosCreateDTO = this.destinationPath(`./servicios/${nombreGuiones}/dto/${nombreGuiones}.create.dto.ts`);

        this.fs.copyTpl(
            templateServiciosCreateDTO,
            destinoServiciosCreateDTO,
            variables
        );

        const templateServiciosDTO = this.templatePath(TEMPLATES.SRV_DTO);
        const destinoServiciosDTO = this.destinationPath(`./servicios/${nombreGuiones}/dto/${nombreGuiones}.dto.ts`);

        this.fs.copyTpl(
            templateServiciosDTO,
            destinoServiciosDTO,
            variables
        );
        const templateServiciosFindDTO = this.templatePath(TEMPLATES.SRV_FIND_DTO);
        const destinoServiciosFindDTO = this.destinationPath(`./servicios/${nombreGuiones}/dto/${nombreGuiones}.find.dto.ts`);

        this.fs.copyTpl(
            templateServiciosFindDTO,
            destinoServiciosFindDTO,
            variables
        );

        const templateServiciosUpdateDTO = this.templatePath(TEMPLATES.SRV_UPDATE_DTO);
        const destinoServiciosUpdateDTO = this.destinationPath(`./servicios/${nombreGuiones}/dto/${nombreGuiones}.update.dto.ts`);

        this.fs.copyTpl(
            templateServiciosUpdateDTO,
            destinoServiciosUpdateDTO,
            variables
        );

        const templateServiciosUpdateHabilitadoDTO = this.templatePath(TEMPLATES.SRV_UPDATE_HABILITADO_DTO);
        const destinoServiciosUpdateHabilitadoDTO = this.destinationPath(`./servicios/${nombreGuiones}/dto/${nombreGuiones}.dto.ts`);

        this.fs.copyTpl(
            templateServiciosUpdateHabilitadoDTO,
            destinoServiciosUpdateHabilitadoDTO,
            variables
        );
        // servicios enums

        const templateServiciosEnum = this.templatePath(TEMPLATES.SRV_ENUM);
        const destinoServiciosEnum = this.destinationPath(`./servicios/${nombreGuiones}/enum/${nombreGuiones}.dto.ts`);

        this.fs.copyTpl(
            templateServiciosEnum,
            destinoServiciosEnum,
            variables
        );

        // servicios forms
                // constantes
        const templateServiciosFormsCreateUpdateComun = this.templatePath(TEMPLATES.SRV_CREA_UP_DTO_COM);
        const destinoServiciosFormsCreateUpdateComun = this.destinationPath(`./servicios/${nombreGuiones}/forms/constantes/${nombreGuiones}.create-update-comun.dto.ts`);

        this.fs.copyTpl(
            templateServiciosFormsCreateUpdateComun,
            destinoServiciosFormsCreateUpdateComun,
            variables
        );

        const templateServiciosFormsSelect = this.templatePath(TEMPLATES.SRV_FORM_SELECT);
        const destinoServiciosFormsSelect = this.destinationPath(`./servicios/${nombreGuiones}/forms/constantes/${nombreGuiones}-select.ts`);


        this.fs.copyTpl(
            templateServiciosFormsSelect,
            destinoServiciosFormsSelect,
            variables
        );

            // create dto
        const templateServiciosFormsCreateDtoTS = this.templatePath(TEMPLATES.SRV_FORM_CREATE_COM_TS);
        const destinoServiciosFormsCreateDtoTS = this.destinationPath(`./servicios/${nombreGuiones}/forms/create-dto/${nombreGuiones}.create.dto.component.ts`);


        this.fs.copyTpl(
            templateServiciosFormsCreateDtoTS,
            destinoServiciosFormsCreateDtoTS,
            variables
        );

        const templateServiciosFormsCreateDtoHTML = this.templatePath(TEMPLATES.SRV_FORM_CREATE_COM_HTML);
        const destinoServiciosFormsCreateDtoHTML = this.destinationPath(`./servicios/${nombreGuiones}/forms/create-dto/${nombreGuiones}.create.dto.component.html`);


        this.fs.copyTpl(
            templateServiciosFormsCreateDtoHTML,
            destinoServiciosFormsCreateDtoHTML,
            variables
        );

        const templateServiciosFormsCreateDtoSCSS = this.templatePath(TEMPLATES.SRV_FORM_CREATE_COM_SCSS);
        const destinoServiciosFormsCreateDtoSCSS = this.destinationPath(`./servicios/${nombreGuiones}/forms/create-dto/${nombreGuiones}.create.dto.component.scss`);


        this.fs.copyTpl(
            templateServiciosFormsCreateDtoSCSS,
            destinoServiciosFormsCreateDtoSCSS,
            variables
        );
            // Find dto
        const templateServiciosFormsFindDtoTS = this.templatePath(TEMPLATES.SRV_FORM_FIND_COM_TS);
        const destinoServiciosFormsFindDtoTS = this.destinationPath(`./servicios/${nombreGuiones}/forms/find-dto/${nombreGuiones}.find.dto.component.ts`);


        this.fs.copyTpl(
            templateServiciosFormsFindDtoTS,
            destinoServiciosFormsFindDtoTS,
            variables
        );

        const templateServiciosFormsFindDtoHTML = this.templatePath(TEMPLATES.SRV_FORM_FIND_COM_HTML);
        const destinoServiciosFormsFindDtoHTML = this.destinationPath(`./servicios/${nombreGuiones}/forms/find-dto/${nombreGuiones}.find.dto.component.html`);


        this.fs.copyTpl(
            templateServiciosFormsFindDtoHTML,
            destinoServiciosFormsFindDtoHTML,
            variables
        );

        const templateServiciosFormsFindDtoSCSS = this.templatePath(TEMPLATES.SRV_FORM_FIND_COM_SCSS);
        const destinoServiciosFormsFindDtoSCSS = this.destinationPath(`./servicios/${nombreGuiones}/forms/find-dto/${nombreGuiones}.find.dto.component.scss`);


        this.fs.copyTpl(
            templateServiciosFormsFindDtoSCSS,
            destinoServiciosFormsFindDtoSCSS,
            variables
        );

            // update dto
        const templateServiciosFormsUpdateDtoTS = this.templatePath(TEMPLATES.SRV_FORM_UP_COM_TS);
        const destinoServiciosFormsUpdateDtoTS = this.destinationPath(`./servicios/${nombreGuiones}/forms/update-dto/${nombreGuiones}.update.dto.component.ts`);


        this.fs.copyTpl(
            templateServiciosFormsUpdateDtoTS,
            destinoServiciosFormsUpdateDtoTS,
            variables
        );

        const templateServiciosFormsUpdateDtoHTML = this.templatePath(TEMPLATES.SRV_FORM_UP_COM_HTML);
        const destinoServiciosFormsUpdateDtoHTML = this.destinationPath(`./servicios/${nombreGuiones}/forms/update-dto/${nombreGuiones}.update.dto.component.html`);


        this.fs.copyTpl(
            templateServiciosFormsUpdateDtoHTML,
            destinoServiciosFormsUpdateDtoHTML,
            variables
        );

        const templateServiciosFormsUpdateDtoSCSS = this.templatePath(TEMPLATES.SRV_FORM_UP_COM_SCSS);
        const destinoServiciosFormsUpdateDtoSCSS = this.destinationPath(`./servicios/${nombreGuiones}/forms/update-dto/${nombreGuiones}.update.dto.component.scss`);


        this.fs.copyTpl(
            templateServiciosFormsUpdateDtoSCSS,
            destinoServiciosFormsUpdateDtoSCSS,
            variables
        );

        const templateServiciosFormsModule = this.templatePath(TEMPLATES.SRV_FORM_MODULE);
        const destinoServiciosFormsModule = this.destinationPath(`./servicios/${nombreGuiones}/forms/${nombreGuiones}.forms.module.ts`);


        this.fs.copyTpl(
            templateServiciosFormsModule,
            destinoServiciosFormsModule,
            variables
        );
        // servicios http

        const templateServiciosHttpModule = this.templatePath(TEMPLATES.SRV_HTTP_MODULE);
        const destinoServiciosHttpModule = this.destinationPath(`./servicios/${nombreGuiones}/http/${nombreGuiones}.http.module.ts`);


        this.fs.copyTpl(
            templateServiciosHttpModule,
            destinoServiciosHttpModule,
            variables
        );
        const templateServiciosHttpService = this.templatePath(TEMPLATES.SRV_HTTP_SERVICE);
        const destinoServiciosHttpService = this.destinationPath(`./servicios/${nombreGuiones}/http/${nombreGuiones}.http.service.ts`);


        this.fs.copyTpl(
            templateServiciosHttpService,
            destinoServiciosHttpService,
            variables
        );

        // serivios sort
        const templateServiciosSort = this.templatePath(TEMPLATES.SRV_SORT);
        const destinoServiciosSort = this.destinationPath(`./servicios/${nombreGuiones}/sort/${nombreGuiones}.sort.ts`);


        this.fs.copyTpl(
            templateServiciosSort,
            destinoServiciosSort,
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


