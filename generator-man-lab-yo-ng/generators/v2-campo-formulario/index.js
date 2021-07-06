var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    // nombreMayuscula
    // nombreCamel
    // nombreGuines
    // nombreSoloMayusculas
    // nombreEspacioMayuscula

    // nombreCampoSoloMayusculas
    // nombreCampoMayuscula
    // nombreCampoCamel
    // nombreCampoGuines
    // nombreCampoEspacioMayuscula

    // arregloOpciones ['Activo=ActivoInactivo.ACTIVO=A','Inactivo=ActivoInactivo.ACTIVO=L'] => [{nombre: 'Activo', valor:'ActivoInactivo.ACTIVO', filtro:'A'}

    // undefinedValor

    // nombrePropiedad

    NOMBRE_RUTA: {
        nombre: 'nombreRuta',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la ruta EJ: EmpresaYEcuatoriana'
        }
    },
    NOMBRE_CAMPO: {
        nombre: 'nombreCampo',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del campo EJ: TelefonoComercial'
        }
    },
    TIPO_CAMPO: {
        nombre: 'tipoCampo',
        configuracion: {
            type: String,
            required: true,
            desc: 'Tipo de campo EJ: busqueda / autocomplete / inputMask / inputNumber / inputSwitch / password / select / texto / date / file / latitudLongitud'
        }
    },
    ARREGLO_OPCIONES: {
        nombre: 'arregloOpciones',
        configuracion: {
            type: String,
            required: false,
            desc: "Arreglo de opciones para campo select separadas por coma sin espacios. Nombre=Valor=Filtro. EJ1: NombreRuta NombreCampo select Lunes=\\'L\\'=L,Martes=\\'M\\'=M --nombrePrefijo=preFijo EJ2: NombreRuta NombreCampo select Activo=ActivoInactivo.ACTIVO=A,Inactivo=ActivoInactivo.ACTIVO=L"
        }
    },
    UNDEFINED_VALOR: {
        nombre: 'undefinedValor',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre de opción undefined para select. EJ: Todos'
        }
    },
}

const OPCIONES = {
    NOMBRE_PREFIJO: {
        nombre: 'nombrePrefijo',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Nombre del prefijo del campo. Al final este se pondra detras del nombre  EJ: NombreRuta NombreCampo texto --nombrePrefijo=atr'
        }
    },
    NOMBRE_PROPIEDAD: {
        nombre: 'nombrePropiedad',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Nombre de la propiedad a mostrarse del objeto autocomplete. EJ:  NombreRuta NombreCampo autocomplete --nombrePropiedad=campoDeOtraEntidadAmostrar'
        }
    },
    NOMBRE_PROPIEDAD_ID: {
        nombre: 'nombrePropiedadId',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Nombre de la propiedad identificador del autocomplete. EJ: NombreRuta NombreCampo autocomplete --nombrePropiedadId=idEntidad'
        }
    },
    ES_FORMULARIO: {
        nombre: 'esFormulario',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Modificar el template si es formulario. EJ:  NombreRuta NombreCampo texto --esFormulario=true'
        }
    },
    ES_DEPENDIENTE: {
        nombre: 'esDependiente',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Modificar el template si es dependiente. EJ:  NombreRuta NombreCampo texto --esDependiente=true'
        }
    },
    INTERNACIONALIZAR: {
        nombre: 'internacionalizar',
        configuracion: {
            type: String,
            default: undefined,
            desc: 'Modificar el template si es internacionalizable. EJ:  NombreRuta NombreCampo texto --internacionalizar=true'
        }
    },
}
const TEMPLATES = {
    CAMPO_BUSQUEDA: '-campo--busqueda.ts',
    CAMPO_AUTOCOMPLETE: '-campo-autocomplete-.ts',
    CAMPO_INPUT_MASK: '-campo-input-mask-.ts',
    CAMPO_INPUT_NUMBER: '-campo-input-number-.ts',
    CAMPO_INPUT_SWITCH: '-campo-input-switch-.ts',
    CAMPO_PASSWORD: '-campo-password-.ts',
    CAMPO_SELECT: '-campo-select-.ts',
    CAMPO_TEXTO: '-campo-texto-.ts',
    CAMPO_DATE: '-campo-date-.ts',
    CAMPO_FILE: '-campo-file-.ts',
    CAMPO_LATITUD_LONGITUD: '-campo-latitud-longitud-.ts',
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
        this.argument(ARGUMENTOS.NOMBRE_CAMPO.nombre, ARGUMENTOS.NOMBRE_CAMPO.configuracion);
        this.argument(ARGUMENTOS.TIPO_CAMPO.nombre, ARGUMENTOS.TIPO_CAMPO.configuracion);
        this.argument(ARGUMENTOS.ARREGLO_OPCIONES.nombre, ARGUMENTOS.ARREGLO_OPCIONES.configuracion);
        this.argument(ARGUMENTOS.UNDEFINED_VALOR.nombre, ARGUMENTOS.UNDEFINED_VALOR.configuracion);

        // opciones
        this.option(OPCIONES.NOMBRE_PREFIJO.nombre, OPCIONES.NOMBRE_PREFIJO.configuracion);
        this.option(OPCIONES.NOMBRE_PROPIEDAD.nombre, OPCIONES.NOMBRE_PROPIEDAD.configuracion);
        this.option(OPCIONES.NOMBRE_PROPIEDAD_ID.nombre, OPCIONES.NOMBRE_PROPIEDAD_ID.configuracion);
        this.option(OPCIONES.ES_FORMULARIO.nombre, OPCIONES.ES_FORMULARIO.configuracion);
        this.option(OPCIONES.ES_DEPENDIENTE.nombre, OPCIONES.ES_DEPENDIENTE.configuracion);
        this.option(OPCIONES.INTERNACIONALIZAR.nombre, OPCIONES.INTERNACIONALIZAR.configuracion);

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

        const nombreCampoMayuscula = this.options[ARGUMENTOS.NOMBRE_CAMPO.nombre];
        const nombreCampoCamel = aCamel(nombreCampoMayuscula);
        const nombreCampoGuiones = camelADash(nombreCampoCamel);
        const nombreCampoSoloMayusculas = aTodoMayuscula(nombreCampoMayuscula);
        const nombreCampoEspacioMayuscula = aNombreEspacioMayuscula(nombreCampoMayuscula);


        const arregloOpciones = this.options[ARGUMENTOS.ARREGLO_OPCIONES.nombre];
        const undefinedValor = this.options[ARGUMENTOS.UNDEFINED_VALOR.nombre];

        // opciones
        const nombrePrefijo = this.options[OPCIONES.NOMBRE_PREFIJO.nombre];
        const nombrePropiedad = this.options[OPCIONES.NOMBRE_PROPIEDAD.nombre];
        const nombrePropiedadId = this.options[OPCIONES.NOMBRE_PROPIEDAD_ID.nombre];
        const esFormulario = this.options[OPCIONES.ES_FORMULARIO.nombre];
        const esDependiente = this.options[OPCIONES.ES_DEPENDIENTE.nombre];
        const internacionalizar = this.options[OPCIONES.INTERNACIONALIZAR.nombre];

        const variables = {
            nombreMayuscula,
            nombreCamel,
            nombreGuiones,
            nombreSoloMayusculas,
            nombreEspacioMayuscula,
            nombreCampoMayuscula,
            nombreCampoCamel,
            nombreCampoGuiones,
            nombreCampoSoloMayusculas,
            nombreCampoEspacioMayuscula,
            arregloOpciones,
            undefinedValor,
            nombrePropiedad,
            nombrePrefijo,
            esFormulario,
            esDependiente,
            nombrePropiedadId,
            internacionalizar,
        };


        switch (this.options[ARGUMENTOS.TIPO_CAMPO.nombre]) {
            case 'busqueda':
                const templateCB = this.templatePath(TEMPLATES.CAMPO_BUSQUEDA);
                const destinoCB = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-${nombreCampoGuiones}-busqueda.ts`);
                this.fs.copyTpl(
                    templateCB,
                    destinoCB,
                    variables
                );
                break;
            case 'autocomplete':
                if (variables.nombrePropiedad) {
                    const templateCA = this.templatePath(TEMPLATES.CAMPO_AUTOCOMPLETE);
                    const destinoCA = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-autocomplete-${nombreCampoGuiones}.ts`);
                    this.fs.copyTpl(
                        templateCA,
                        destinoCA,
                        variables
                    );
                    break;
                } else {
                    throw new Error('Debes enviar el nombre del campo EJ: NombreRuta NombreCampo autocomplete --nombrePropiedad')
                }
            case 'inputMask':
                const templateCIM = this.templatePath(TEMPLATES.CAMPO_INPUT_MASK);
                const destinoCIM = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-input-mask-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateCIM,
                    destinoCIM,
                    variables
                );
                break;
            case 'inputNumber':
                const templateCIN = this.templatePath(TEMPLATES.CAMPO_INPUT_NUMBER);
                const destinoCIN = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-input-number-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateCIN,
                    destinoCIN,
                    variables
                );
                break;
            case 'inputSwitch':
                const templateCIS = this.templatePath(TEMPLATES.CAMPO_INPUT_SWITCH);
                const destinoCIS = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-input-switch-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateCIS,
                    destinoCIS,
                    variables
                );
                break;
            case 'password':
                const templateCP = this.templatePath(TEMPLATES.CAMPO_PASSWORD);
                const destinoCP = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-password-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateCP,
                    destinoCP,
                    variables
                );
                break;
            case 'select':
                if (variables.arregloOpciones) {
                    const transformarArregloOpciones = (opciones) => {
                        return opciones.split(",")
                            .map((a) => {
                                const valores = a.split("=");
                                if (valores.length !== 3) {
                                    throw new Error("No envíaste bien las opciones. EJ: NombreRuta NombreCampo select Activo=ActivoInactivo.ACTIVO=A,Inactivo=ActivoInactivo.ACTIVO=L")
                                } else {
                                    return {
                                        nombre: valores[0],
                                        valor: valores[1],
                                        filtro: valores[2],
                                    }
                                }
                            })
                    }
                    variables.arregloOpciones = transformarArregloOpciones(variables.arregloOpciones);
                    if (variables.esFormulario) {
                        const templateCS = this.templatePath(TEMPLATES.CAMPO_SELECT);
                        const destinoCS = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-select-${nombreCampoGuiones}.ts`);
                        this.fs.copyTpl(
                            templateCS,
                            destinoCS,
                            variables
                        );
                        break;
                    } else {
                        if (variables.undefinedValor) {
                            const templateCS = this.templatePath(TEMPLATES.CAMPO_SELECT);
                            const destinoCS = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-select-${nombreCampoGuiones}.ts`);
                            this.fs.copyTpl(
                                templateCS,
                                destinoCS,
                                variables
                            );
                            break;
                        } else {
                            throw new Error('Debe enviar undefinedValor Ej: NombreRuta NombreCampo select .... "Nombre de undefined"');
                        }
                    }
                }
                break;
            case 'texto':
                const templateCT = this.templatePath(TEMPLATES.CAMPO_TEXTO);
                const destinoCT = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-texto-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateCT,
                    destinoCT,
                    variables
                );
                break;
            case 'date':
                const templateDAT = this.templatePath(TEMPLATES.CAMPO_DATE);
                const destinoDAT = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-date-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateDAT,
                    destinoDAT,
                    variables
                );
                break;
            case 'file':
                const templateFIL = this.templatePath(TEMPLATES.CAMPO_FILE);
                const destinoFIL = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-file-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateFIL,
                    destinoFIL,
                    variables
                );
                break;
                break;
            case 'latitudLongitud':
                const templateLLD = this.templatePath(TEMPLATES.CAMPO_LATITUD_LONGITUD);
                const destinoLLD = this.destinationPath(`${nombreGuiones}${variables.esFormulario ? '' : '-busqueda'}-campo-latitud-longitud-${nombreCampoGuiones}.ts`);
                this.fs.copyTpl(
                    templateLLD,
                    destinoLLD,
                    variables
                );
                break;
            default:
                throw new Error('Campo no implementado, solo puedes usar: busqueda / autocomplete / inputMask / inputNumber / inputSwitch / password / select / texto / date / file / latitudLongitud');

        }
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


