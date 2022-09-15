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
    COMPONENTE_ENUM_MOSTRAR: '-mostrar.enum.ts',
    COMPONENTE_INTERFACES_MOSTRAR: '-mostrar.interface.ts',
    COMPONENTE_INTERFACES_MOSTRAR_COMPLETO: '-mostrar-completo.interface.ts',
    COMPONENTE_INTERFACES_TABLA: '-tabla.interface.ts',
    COMPONENTE_MOSTRAR: 'Mostrar.tsx',
    COMPONENTE_MOSTRAR_COMPLETO: 'MostrarCompleto.tsx',
    COMPONENTE_TABLA: 'Tabla.tsx',
    HTTP_DTO_CREATE: '-create.dto.ts',
    HTTP_DTO_FIND: '-find.dto.ts',
    HTTP_DTO_UPDATE: '-update.dto.ts',
    HTTP_FORM_ENUM: '.enum.ts',
    HTTP_FORM_FORM: '.form.tsx',
    HTTP_FORM_ACCORDION_FORM: '-accordion.form.tsx',
    HTTP_FORM_FILTRO_ENUM: '-filtro.enum.ts',
    HTTP_FORM_FILTRO_FORM: '-filtro.form.tsx',
    HTTP_FORM_FILTRO_ACCORDION_FORM: '-filtro-accordion.form.tsx',
    HTTP_SORT_SORT_FIELDS: '.sort-fields.ts',
    HTTP_HTTP: '.http.ts',
    HTTP_INTERFACE: '.interface.ts',
    HTTP_LOADER: '.loader.ts',
    HTTP_CREAR_EDITAR_ACTION: '-crear-editar.action.ts',
    HTTP_CREAR_EDITAR_LOADER: '-crear-editar.loader.ts',
    HTTP_INSTANCE_HTTP: '-instance.http.ts',
    RUTA_PRINCIPAL: '.tsx',
    RUTA_CREAR_EDITAR: '$Id.tsx',
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
        const templateComponenteEnumMostrar = this.templatePath(TEMPLATES.COMPONENTE_ENUM_MOSTRAR);
        const destinoComponenteEnumMostrar = this.destinationPath(`./components/${nombreGuiones}/enums/${nombreGuiones}-mostrar.enum.ts`);

        this.fs.copyTpl(
            templateComponenteEnumMostrar,
            destinoComponenteEnumMostrar,
            variables
        );

        const templateComponenteInterfaceMostrar = this.templatePath(TEMPLATES.COMPONENTE_INTERFACES_MOSTRAR);
        const destinoComponenteInterfaceMostrar = this.destinationPath(`./components/${nombreGuiones}/interfaces/${nombreGuiones}-mostrar.interface.ts`);

        this.fs.copyTpl(
            templateComponenteInterfaceMostrar,
            destinoComponenteInterfaceMostrar,
            variables
        );

        const templateComponenteInterfaceMostrarCompleto = this.templatePath(TEMPLATES.COMPONENTE_INTERFACES_MOSTRAR_COMPLETO);
        const destinoComponenteInterfaceMostrarCompleto = this.destinationPath(`./components/${nombreGuiones}/interfaces/${nombreGuiones}-mostrar-completo.interface.ts`);

        this.fs.copyTpl(
            templateComponenteInterfaceMostrarCompleto,
            destinoComponenteInterfaceMostrarCompleto,
            variables
        );

        const templateComponenteInterfaceTabla = this.templatePath(TEMPLATES.COMPONENTE_INTERFACES_TABLA);
        const destinoComponenteInterfaceTabla = this.destinationPath(`./components/${nombreGuiones}/interfaces/${nombreGuiones}-tabla.interface.ts`);

        this.fs.copyTpl(
            templateComponenteInterfaceTabla,
            destinoComponenteInterfaceTabla,
            variables
        );

        const templateComponenteMostrar = this.templatePath(TEMPLATES.COMPONENTE_MOSTRAR);
        const destinoComponenteMostrar = this.destinationPath(`./components/${nombreGuiones}/${nombreMayuscula}Mostrar.tsx`);

        this.fs.copyTpl(
            templateComponenteMostrar,
            destinoComponenteMostrar,
            variables
        );

        const templateComponenteMostrarCompleto = this.templatePath(TEMPLATES.COMPONENTE_MOSTRAR_COMPLETO);
        const destinoComponenteMostrarCompleto = this.destinationPath(`./components/${nombreGuiones}/${nombreMayuscula}MostrarCompleto.tsx`);

        this.fs.copyTpl(
            templateComponenteMostrarCompleto,
            destinoComponenteMostrarCompleto,
            variables
        );

        const templateComponenteTabla = this.templatePath(TEMPLATES.COMPONENTE_TABLA);
        const destinoComponenteTabla = this.destinationPath(`./components/${nombreGuiones}/${nombreMayuscula}Tabla.tsx`);

        this.fs.copyTpl(
            templateComponenteTabla,
            destinoComponenteTabla,
            variables
        );




        const templateHttpDtoCreate = this.templatePath(TEMPLATES.HTTP_DTO_CREATE);
        const destinoHttpDtoCreate = this.destinationPath(`./http/${nombreGuiones}/dto/${nombreGuiones}-create.dto.ts`);

        this.fs.copyTpl(
            templateHttpDtoCreate,
            destinoHttpDtoCreate,
            variables
        );

        const templateHttpDtoFind = this.templatePath(TEMPLATES.HTTP_DTO_FIND);
        const destinoHttpDtoFind = this.destinationPath(`./http/${nombreGuiones}/dto/${nombreGuiones}-find.dto.ts`);

        this.fs.copyTpl(
            templateHttpDtoFind,
            destinoHttpDtoFind,
            variables
        );

        const templateHttpDtoUpdate = this.templatePath(TEMPLATES.HTTP_DTO_UPDATE);
        const destinoHttpDtoUpdate = this.destinationPath(`./http/${nombreGuiones}/dto/${nombreGuiones}-update.dto.ts`);

        this.fs.copyTpl(
            templateHttpDtoUpdate,
            destinoHttpDtoUpdate,
            variables
        );

        const templateHttpFormEnum = this.templatePath(TEMPLATES.HTTP_FORM_ENUM);
        const destinoHttpFormEnum = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}.enum.ts`);

        this.fs.copyTpl(
            templateHttpFormEnum,
            destinoHttpFormEnum,
            variables
        );

        const templateHttpFormForm = this.templatePath(TEMPLATES.HTTP_FORM_FORM);
        const destinoHttpFormForm = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}.form.tsx`);

        this.fs.copyTpl(
            templateHttpFormForm,
            destinoHttpFormForm,
            variables
        );

        const templateHttpFormAccordionForm = this.templatePath(TEMPLATES.HTTP_FORM_ACCORDION_FORM);
        const destinoHttpFormAccordionForm = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}-accordion.form.tsx`);

        this.fs.copyTpl(
            templateHttpFormAccordionForm,
            destinoHttpFormAccordionForm,
            variables
        );

        const templateHttpFormFiltroEnum = this.templatePath(TEMPLATES.HTTP_FORM_FILTRO_ENUM);
        const destinoHttpFormFiltroEnum = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}-filtro.enum.ts`);

        this.fs.copyTpl(
            templateHttpFormFiltroEnum,
            destinoHttpFormFiltroEnum,
            variables
        );

        const templateHttpFormFiltroForm = this.templatePath(TEMPLATES.HTTP_FORM_FILTRO_FORM);
        const destinoHttpFormFiltroForm = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}-filtro.form.tsx`);

        this.fs.copyTpl(
            templateHttpFormFiltroForm,
            destinoHttpFormFiltroForm,
            variables
        );

        const templateHttpFormFiltroAccordionForm = this.templatePath(TEMPLATES.HTTP_FORM_FILTRO_ACCORDION_FORM);
        const destinoHttpFormFiltroAccordionForm = this.destinationPath(`./http/${nombreGuiones}/form/${nombreGuiones}-filtro-accordion.form.tsx`);

        this.fs.copyTpl(
            templateHttpFormFiltroAccordionForm,
            destinoHttpFormFiltroAccordionForm,
            variables
        );

        const templateHttpSortSortFields = this.templatePath(TEMPLATES.HTTP_SORT_SORT_FIELDS);
        const destinoHttpSortSortFields = this.destinationPath(`./http/${nombreGuiones}/sort/${nombreGuiones}.sort-fields.ts`);

        this.fs.copyTpl(
            templateHttpSortSortFields,
            destinoHttpSortSortFields,
            variables
        );

        const templateHttpHttp = this.templatePath(TEMPLATES.HTTP_HTTP);
        const destinoHttpHttp = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}.http.ts`);

        this.fs.copyTpl(
            templateHttpHttp,
            destinoHttpHttp,
            variables
        );

        const templateHttpInterface = this.templatePath(TEMPLATES.HTTP_INTERFACE);
        const destinoHttpInterface = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}.interface.ts`);

        this.fs.copyTpl(
            templateHttpInterface,
            destinoHttpInterface,
            variables
        );

        const templateHttpLoader = this.templatePath(TEMPLATES.HTTP_LOADER);
        const destinoHttpLoader = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}.loader.ts`);

        this.fs.copyTpl(
            templateHttpLoader,
            destinoHttpLoader,
            variables
        );

        const templateHttpCrearEditarAction = this.templatePath(TEMPLATES.HTTP_CREAR_EDITAR_ACTION);
        const destinoHttpCrearEditarAction = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}-crear-editar.action.ts`);

        this.fs.copyTpl(
            templateHttpCrearEditarAction,
            destinoHttpCrearEditarAction,
            variables
        );

        const templateHttpCrearEditarLoader = this.templatePath(TEMPLATES.HTTP_CREAR_EDITAR_LOADER);
        const destinoHttpCrearEditarLoader = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}-crear-editar.loader.ts`);

        this.fs.copyTpl(
            templateHttpCrearEditarLoader,
            destinoHttpCrearEditarLoader,
            variables
        );

        const templateHttpInstanceHttp = this.templatePath(TEMPLATES.HTTP_INSTANCE_HTTP);
        const destinoHttpInstanceHttp = this.destinationPath(`./http/${nombreGuiones}/${nombreGuiones}-instance.http.ts`);

        this.fs.copyTpl(
            templateHttpInstanceHttp,
            destinoHttpInstanceHttp,
            variables
        );

        const templateRutaPrincipal = this.templatePath(TEMPLATES.RUTA_PRINCIPAL);
        const destinoRutaPrincipal = this.destinationPath(`./routes/${nombreGuiones}.tsx`);

        this.fs.copyTpl(
            templateRutaPrincipal,
            destinoRutaPrincipal,
            variables
        );

        const templateRutaCrearEditar = this.templatePath(TEMPLATES.RUTA_CREAR_EDITAR);
        const destinoRutaCrearEditar = this.destinationPath(`./routes/${nombreGuiones}/$${nombreCamel}Id.tsx`);

        this.fs.copyTpl(
            templateRutaCrearEditar,
            destinoRutaCrearEditar,
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


