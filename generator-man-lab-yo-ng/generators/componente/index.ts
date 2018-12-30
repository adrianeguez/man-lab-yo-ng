declare var module: {
    exports: any,
    constructor: any
};
declare var match: any;
declare var require: any;
declare var global: any;
declare var Usuario: any;

const fs = require('fs');
const ts = require('typescript');
const Generator = require('yeoman-generator');
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
    TOASTER: {
        type: Boolean,
        desc: 'Si se va importar el servicio de toaster. Por defecto true. Ej: --toaster=false (para false)',
        default: true
    },
    PREFIX: {
        type: String,
        desc: 'Prefijo de la aplicacion de angular. Ej: --prefix man-lab',
        default: 'app'
    },
    CLASE_CONTENEDOR_HTML: {
        type: String,
        desc: 'Clases a aplicar en el contenedor html. Ej: --claseContenedor "form-group clase-personalizada"',
        default: 'form-group'
    },
    CLASE_LABEL_HTML: {
        type: String,
        desc: 'Clases a aplicar en el label html. Ej: --claseLabel "control-label clase-personalizada"',
        default: 'control-label'
    },
    CLASE_INPUT_HTML: {
        type: String,
        desc: 'Clases a aplicar en el input html. Ej: --claseInput "form-control form-control-sm clase-personalizada"',
        default: 'form-control form-control-sm'
    },
    CLASE_MENSAJES_HTML: {
        type: String,
        desc: 'Clases a aplicar en el contenedor de mensajes html. Ej: --claseMensajes "animated fadeInUp alert alert-warning clase-personalizada"',
        default: 'animated fadeInUp alert alert-warning'
    },
    CLASE_AUTOCOMPLETE_HTML: {
        type: String,
        desc: 'Clases a aplicar en el campo de autocomplete de primefaces. Ej: --claseAutocomplete "mi-clase personalizada"'
    }
};

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE_CLASE.nombre, ARGUMENTOS.NOMBRE_CLASE.configuracion);
        this.option('toaster', OPCIONES.TOASTER);
        this.option('prefix', OPCIONES.PREFIX);
        this.option('claseContenedor', OPCIONES.CLASE_CONTENEDOR_HTML);
        this.option('claseLabel', OPCIONES.CLASE_LABEL_HTML);
        this.option('claseInput', OPCIONES.CLASE_INPUT_HTML);
        this.option('claseMensajes', OPCIONES.CLASE_MENSAJES_HTML);
        this.option('claseAutocomplete', OPCIONES.CLASE_AUTOCOMPLETE_HTML);


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
        const nombreClaseCamel = lowerFirstLetter(nombreClase);
        const nombreClaseDash = camelToDash(nombreClaseCamel);

        // Variables de archivo
        const archivo = {
            nombre: `/${nombreClaseDash}-formulario.ts`,
            nombreNuevoArchivo: `/${nombreClaseDash}-formulario.component.ts`,
            nombreNuevoArchivoHTML: `/${nombreClaseDash}-formulario.component.html`,
            directorio: this.destinationRoot(),
            pathArchivo: function () {
                return this.directorio + this.nombre
            },
            pathNuevoArchivo: function () {
                return this.directorio + this.nombreNuevoArchivo
            },
            pathNuevoArchivoHTML: function () {
                return this.directorio + this.nombreNuevoArchivoHTML
            },
        };

        // opciones
        const opciones = {
            toaster: this.options.toaster,
            prefix: this.options.prefix,
            claseContenedor: this.options.claseContenedor,
            claseLabel: this.options.claseLabel,
            claseInput: this.options.claseInput,
            claseMensajes: this.options.claseMensajes,
            claseAutocomplete: this.options.claseAutocomplete
        };


        // Parseador
        const parser = {
            clase: new TypescriptParser(),
            texto: fs.readFileSync(archivo.pathArchivo(), 'utf-8'),
        };
        const archivoParseado = await parser.clase.parseSource(parser.texto);

        // Obteniendo parametros
        const constructor = archivoParseado.declarations[0].ctor;
        const propiedadesACrearse: PropiedadesConstructor[] = [];
        constructor
            .parameters
            .forEach(
                (propiedad) => {
                    if (propiedad.name !== 'id') {
                        propiedadesACrearse
                            .push({nombre: propiedad.name, tipo: propiedad.type})
                    }
                }
            );
        console.log('propiedadesACrearse', propiedadesACrearse);


        let importsDeClases = ``;


        let contenidoCabeceraArchivo = `
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {
    ConfiguracionDisabledInterfaz, 
    encerarFormBuilder, 
    generarCampos, 
    generarEmiteEmpezoTipear, 
    generarMensajesFormGroup, 
    establecerCamposDisabled, 
    NO_EXISTEN_REGISTROS
} from '@manticore-labs/ng-api';${opciones.toaster ? "\nimport {ToasterService} from 'angular2-toaster';" : ""}
import {${nombreClase}} from './${nombreClaseDash}';
import {${nombreClase}Formulario} from './${nombreClaseDash}-formulario';
import {debounceTime} from 'rxjs/operators';
// llenar con imports de clases
`;
        let variablesGlobales = ``;

        let interfazVariablesGlobales = ``;

        let serviciosRest = ``;

        let validaciones = ``;

        let busquedaYValidacion = ``;


        let contenidoArchivo = `
@Component({
    selector: '${opciones.prefix}-${nombreClaseDash}-formulario',
    templateUrl: './${nombreClaseDash}-formulario.component.html'
})

export class ${nombreClase}FormularioComponent implements OnInit {

    @Output() ${nombreClaseCamel}Valido: EventEmitter<${nombreClase} | boolean> = new EventEmitter();

    @Output() empezoATipear: EventEmitter<boolean> = new EventEmitter();

    @Input() configuracionDisabled: ConfiguracionFormluario${nombreClase};

    ${nombreClaseCamel}: ${nombreClase}Formulario;

    NO_EXISTEN_REGISTROS = NO_EXISTEN_REGISTROS;
    
    mensajeToaster = '';

    objetoVariablesGlobales: ObjetoVariablesGlobales${nombreClase} = {
        // llenar con objetos variables globales
    };

    constructor(private _formBuilder: FormBuilder,
        private _cargandoService: CargandoService,
        ${opciones.toaster ? 'private _toasterService: ToasterService,' : ''}
        // Reemplazar con servicios rest
        ) {

    }

    ngOnInit() {
`;

        let contenidoArchivoOnInitFin = `

        // Empieza la construccion del formulario - No tocar estas lineas

        establecerCamposDisabled(this.configuracionDisabled, this.${nombreClaseCamel});
        this.${nombreClaseCamel}.formGroup = this._formBuilder.group(encerarFormBuilder(this.${nombreClaseCamel}));
        generarMensajesFormGroup(this.configuracionDisabled, this.${nombreClaseCamel});
        generarEmiteEmpezoTipear(this.${nombreClaseCamel}, this.empezoATipear);

        // Termina la construccion del formulario - No tocar estas lineas

        this.${nombreClaseCamel}
            .formGroup
            .valueChanges
            .pipe(
                debounceTime(1000)
            )
            .subscribe(
                camposValidados => {

                    console.log(this.${nombreClaseCamel}.formGroup);

                    this.mensajeToaster = '';
                    
                    if (this.${nombreClaseCamel}.formGroup.valid && this.validacionesCampos()) {

                        this.${nombreClaseCamel}Valido.emit(generarCampos(this.${nombreClaseCamel}));
                        ${opciones.toaster ? `this._toasterService.pop('info', 'Valido', '${nombreClase} válida ');` : ""}

                    } else {

                        if (this.mensajeToaster !== '') {
                            ${opciones.toaster ? "this._toasterService.pop('warning', 'Cuidado', this.mensajeToaster);" : "console.error('Validacion incorrecta');"}
                        }
                        this.${nombreClaseCamel}Valido.emit(false);
                    }
                }
            );
    }

    validacionesCampos() {
        return this.validarEjemplo() // Aqui use para otras validaciones
    }

    validarEjemplo() {
        return true; // Implementacion de validacion ejemplo
    }

// Reemplazar con validaciones y busqueda de variables globales

}

// tslint:disable-next-line:no-empty-interface
interface ObjetoVariablesGlobales${nombreClase} {
    // llenar con objetos de validacion globales
}
`;
        let constructorFormulario = `\n        this.${nombreClaseCamel} = new ${nombreClase}Formulario(\n`;

        let interfaceConfiguracion = `
export interface ConfiguracionFormluario${nombreClase} {
  Id?: ConfiguracionDisabledInterfaz;\n`;

        let interfaceConfiguracionFuncion = `

export const CONFIGURACION_${nombreClase.toUpperCase()} = (): ConfiguracionFormluario${nombreClase} => {
    return {
        Id: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },`;


        let htmlInicio = `
<form novalidate [formGroup]="${nombreClaseCamel}.formGroup">
    <fieldset class="col-md-12">
        <div class="row">`;

        let campos = '';

        let htmlFin = `
        </div>
    </fieldset>
</form>
`;


        propiedadesACrearse
            .forEach(
                (propiedad: PropiedadesConstructor) => {
                    const objeto: ArgumentosCampoInteraface = encontrarContenidoJSONPorNombre(capitalizeFirstLetter(propiedad.nombre), parser.texto);
                    const nombre = propiedad.nombre;
                    const tipo = propiedad.tipo;
                    const nombreCampo = capitalizeFirstLetter(nombre);
                    const nombreCampoDash = camelToDash(nombreCampo);
                    const tipoControl = objeto.tipoControl.tipo;
                    let contenidoHtml;
                    switch (tipoControl) {
                        case 'input-text':
                            contenidoHtml = generarInputTexto(nombre,
                                nombreCampo,
                                nombreClaseCamel,
                                opciones.claseContenedor,
                                opciones.claseLabel,
                                opciones.claseInput,
                                opciones.claseMensajes,
                                objeto);
                            break;
                        case 'select-many':
                            contenidoHtml = generarInputBooleano(nombre,
                                nombreCampo,
                                nombreClaseCamel,
                                opciones.claseContenedor,
                                opciones.claseLabel,
                                opciones.claseInput,
                                opciones.claseMensajes,
                                objeto.tipoControl.opcionesSelect);
                            break;
                        case 'autocomplete':

                            variablesGlobales = variablesGlobales + generarVariablesGlobales(objeto.tipoControl.autocompleteBusqueda);

                            serviciosRest = serviciosRest + generarServiciosRest(objeto.tipoControl.autocompleteBusqueda);

                            interfazVariablesGlobales = interfazVariablesGlobales + generarInterfazVariablesGlobales(objeto.tipoControl.autocompleteBusqueda);

                            busquedaYValidacion = busquedaYValidacion + generarBusquedaYValidacion(objeto.tipoControl.autocompleteBusqueda,
                                nombre,
                                nombreClaseCamel);

                            validaciones = validaciones + generarValidaciones(objeto.tipoControl.autocompleteBusqueda);

                            importsDeClases = importsDeClases + generarImportsDeClases(objeto.tipoControl.autocompleteBusqueda);

                            contenidoHtml = generarAutoComplete(nombre,
                                nombreCampo,
                                nombreClaseCamel,
                                opciones.claseContenedor,
                                opciones.claseLabel,
                                opciones.claseAutocomplete,
                                opciones.claseMensajes,
                                objeto.tipoControl.autocompleteBusqueda);
                            break;
                        default:
                            break;
                    }

                    campos = campos + contenidoHtml;

                    constructorFormulario = constructorFormulario + `             this.configuracionDisabled.${nombreCampo}.valor,\n`;
                    interfaceConfiguracion = interfaceConfiguracion + `  ${nombreCampo}?: ConfiguracionDisabledInterfaz;\n`;
                    interfaceConfiguracionFuncion = interfaceConfiguracionFuncion + `
        ${nombreCampo}: {
            valor: null,
            disabled: false,
            hidden: false,
            calculoFormulario: undefined
        },\n`;

                }
            );
        constructorFormulario = constructorFormulario + '        );';
        interfaceConfiguracion = interfaceConfiguracion + '}';
        interfaceConfiguracionFuncion = interfaceConfiguracionFuncion + `
    };
};
`;

        contenidoCabeceraArchivo = contenidoCabeceraArchivo.replace('// llenar con imports de clases', importsDeClases);
        contenidoArchivo = contenidoArchivo.replace('// llenar con objetos variables globales', variablesGlobales);
        contenidoArchivo = contenidoArchivo.replace('// Reemplazar con servicios rest', serviciosRest);
        contenidoArchivoOnInitFin = contenidoArchivoOnInitFin.replace('// Reemplazar con validaciones y busqueda de variables globales', busquedaYValidacion);
        contenidoArchivoOnInitFin = contenidoArchivoOnInitFin.replace('// llenar con objetos de validacion globales', interfazVariablesGlobales);
        contenidoArchivoOnInitFin = contenidoArchivoOnInitFin.replace('// Aqui use para otras validaciones', validaciones);


        const contenidoCompleto = contenidoCabeceraArchivo
            + contenidoArchivo
            + constructorFormulario
            + contenidoArchivoOnInitFin
            + interfaceConfiguracion
            + interfaceConfiguracionFuncion;

        const contenidoCompletoHtml = htmlInicio
            + campos
            + htmlFin;

        console.log('contenidoCompleto', contenidoCompleto);

        console.log('contenidoCompletoHtml', contenidoCompletoHtml);

        const respuesta = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'confirmacion',
                    message: '¿Están correctos los cambios?'
                }
            ]);
        if (respuesta.confirmacion) {
            fs.writeFileSync(archivo.pathNuevoArchivo(), contenidoCompleto, 'utf-8');
            this.log(`Archivo ${archivo.nombreNuevoArchivo} creado :)`);

            fs.writeFileSync(archivo.pathNuevoArchivoHTML(), contenidoCompletoHtml, 'utf-8');
            this.log(`Archivo ${archivo.nombreNuevoArchivoHTML} creado :)`);

        } else {

        }

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
                const contenidoFinal = string.slice(posicionFinal, string.length);
                string = contenidoInicial + contenidoFinal;
                contador++;
            }
        }
    );
    return string;
}


interface PropiedadesConstructor {
    nombre: string;
    tipo: string
}


function encontrarContenidoJSONPorNombre(nombreEnMayuscula, archivo) {
    const contenidoInicial = {
        contenido: `// empiezaArgumentos${nombreEnMayuscula} - NO BORRAR ESTA LINEA`,
        tamano: function () {
            return this.contenido.length - 1
        }
    };
    const contenidoFinal = {
        contenido: `// terminaArgumentos${nombreEnMayuscula} - NO BORRAR ESTA LINEA`,
        tamano: function () {
            return this.contenido.length - 1
        }
    };

    const archivoObjeto = {
        indiceInicial: archivo.indexOf(contenidoInicial.contenido),
        indiceFinal: archivo.indexOf(contenidoFinal.contenido),
    };

    const parseo = {
        eliminarInicio: 'const argumentos: any = ',
        eliminarFin: ';',
        contenido: function () {
            return archivo.slice(
                archivoObjeto.indiceInicial + contenidoInicial.tamano() + 1,
                archivoObjeto.indiceFinal
            )
                .replace(this.eliminarInicio, '')
                .replace(this.eliminarFin, '')
        }
    };
    return JSON.parse(parseo.contenido());
}


// currencyMask
// [options]="cuadreCaja.mensajesValidacionValor.mask"

// [textMask]="agenciaGrupoFunda.mensajesValidacionEmpiezaNumeracion.mask" 

function generarInputTexto(nombre, nombreCampo, nombreClase, claseContenedor, claseLabel, claseInput, claseMensajes, opcionesCampo: ArgumentosCampoInteraface) {

    return `
            <!--${nombre}-->
            <div class="col-sm-6 ${claseContenedor}" *ngIf="!configuracionDisabled.${nombreCampo}.hidden">
                <div class="row">
                    <label class="col-sm-4 ${claseLabel}" [for]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput">{{
                        ${nombreClase}.mensajesValidacion${nombreCampo}.nombreAPresentarse }}</label>
                    <div class="col-sm-8">
                        <input type="${opcionesCampo.tipoControl.tipoCampoHtml}"
                                class="${claseInput}"
                                [id]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                                [name]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                                [formControlName]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                                [placeholder]="${nombreClase}.mensajesValidacion${nombreCampo}.tooltip"
                                [title]="${nombreClase}.mensajesValidacion${nombreCampo}.title"
                                aria-describedby="${nombreClase}${nombreCampo}Ayuda"
                                ${opcionesCampo.mascara && opcionesCampo.mascaraCurrency === 'false' ? '' : `[textMask]="${nombreClase}.mensajesValidacion${nombreCampo}.mask"`}
                                ${opcionesCampo.mascaraCurrency === 'true' ? `currencyMask\n                                [options]="${nombreClase}.mensajesValidacion${nombreCampo}.mask"` : ''}
                        >
                        <small id="${nombreClase}${nombreCampo}Ayuda" class="form-text text-muted">{{${nombreClase}.mensajesValidacion${nombreCampo}.title}}.</small>
                    </div>
                    <div class="col-sm-12">

                        <div class="${claseMensajes}" role="alert"
                            *ngIf="${nombreClase}.mensajesValidacion${nombreCampo}.mensajes.length>0">
                            <div *ngFor="let mensaje of ${nombreClase}.mensajesValidacion${nombreCampo}.mensajes">{{ mensaje }}</div>
                        </div>
                    </div>
                </div>
            </div>                    
`
}

function generarInputBooleano(nombre, nombreCampo, nombreClase, claseContenedor, claseLabel, claseInput, claseMensajes, opciones: string) {
    const arregloDeOpciones = opciones.split(',');
    let contenidoSelect = '';
    arregloDeOpciones
        .forEach(
            (opcion) => {
                contenidoSelect = contenidoSelect + `                            <option value="${opcion}">${opcion}</option>\n`
            }
        );
    return `
            <!--${nombre}-->
            <div class="col-sm-6 ${claseContenedor}" *ngIf="!configuracionDisabled.${nombreCampo}.hidden">
                <div class="row">
                    <label class="col-sm-4 ${claseLabel}" [for]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput">{{
                    ${nombreClase}.mensajesValidacion${nombreCampo}.nombreAPresentarse }}</label>
                    <div class="col-sm-8">
                        <select class="${claseInput}" [name]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                                [id]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                                [formControlName]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                        >

${contenidoSelect}
                        </select>
                    </div>
                    <div class="col-sm-12">
                        <div class="${claseMensajes}" role="alert"
                            *ngIf="${nombreClase}.mensajesValidacion${nombreCampo}.mensajes.length>0">
                            <div *ngFor="let mensaje of ${nombreClase}.mensajesValidacion${nombreCampo}.mensajes">{{ mensaje }}</div>
                        </div>
                    </div>
                </div>
            </div>                   
`
}

function generarVariablesGlobales(opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEntidadEnCamel = lowerFirstLetter(arregloDeOpciones[0]);
    return `\n        ${nombreEntidadEnCamel}s: [],`;
}

function generarInterfazVariablesGlobales(opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEnMayusculas = arregloDeOpciones[0];
    const nombreEntidadEnCamel = lowerFirstLetter(arregloDeOpciones[0]);

    return `    ${nombreEntidadEnCamel}s: ${nombreEnMayusculas}[],\n`;
}

function generarImportsDeClases(opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEnMayusculas = arregloDeOpciones[0];
    const nombreEntidadEnCamel = lowerFirstLetter(arregloDeOpciones[0]);

    return `import {${nombreEnMayusculas}} from './${nombreEntidadEnCamel}';\n`;
}

function generarServiciosRest(opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEnMayusculas = arregloDeOpciones[0];
    const nombreEntidadEnCamel = lowerFirstLetter(nombreEnMayusculas);
    return `private _${nombreEntidadEnCamel}RestService: ${nombreEnMayusculas}RestService,\n         `;
}

function generarValidaciones(opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEnMayusculas = arregloDeOpciones[0];
    return `&& this.validar${nombreEnMayusculas}() `;
}


function generarBusquedaYValidacion(opcionesAutocomplete, nombreCampoCamelCase, nombreClaseCamel) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEnMayusculas = arregloDeOpciones[0];
    const nombreEntidadEnCamel = lowerFirstLetter(nombreEnMayusculas);

    return `
    validar${nombreEnMayusculas}() {
        const ${nombreCampoCamelCase}ValorActual = this.${nombreClaseCamel}.formGroup.get('${nombreCampoCamelCase}').value.id;
        let ${nombreEntidadEnCamel}Encontrado = this.objetoVariablesGlobales.${nombreEntidadEnCamel}s.find((registro) => registro.id === ${nombreCampoCamelCase}ValorActual);
        if (typeof this.${nombreClaseCamel}.id !== 'object') {
            ${nombreEntidadEnCamel}Encontrado = {};
        }
        if (${nombreEntidadEnCamel}Encontrado) {
          return true;
        } else {
          this.mensajeToaster = 'Seleccione un ${nombreCampoCamelCase} válido';
          return false;
        }
      }
    
      buscar${nombreEnMayusculas}s(evento) {
        this._cargandoService.habilitarCargando();
        let ${nombreCampoCamelCase}s$;
        if (evento.query === '') {
            ${nombreCampoCamelCase}s$ = this._${nombreCampoCamelCase}RestService
                .findAll();
        } else {
            const consulta = { // lenar la consulta
                camposABuscar: [
                    { campo: 'ejemplo', valor: \`%25\${evento.query}%25\` }
                ]
            }; 
            ${nombreCampoCamelCase}s$ = this._${nombreCampoCamelCase}RestService
                .findWhereOr('criterioBusqueda=' + JSON.stringify(consulta));
        }
        ${nombreCampoCamelCase}s$
          .subscribe(
            (${nombreEntidadEnCamel}s: ${nombreEnMayusculas}[]) => {
              this.objetoVariablesGlobales.${nombreEntidadEnCamel}s = ${nombreEntidadEnCamel}s[0];
              this._cargandoService.deshabilitarCargando();
            },
            error => {
              this._cargandoService.deshabilitarCargando();
              console.error(error);
              this._toasterService.pop('error', 'ERROR', 'Revisa tu conexion o intentalo mas tarde');
              // Manejar errores
            }
          );
      }
\n\n`
}


function generarAutoComplete(nombre, nombreCampo, nombreClase, claseContenedor, claseLabel, claseAutoComplete, claseMensajes, opcionesAutocomplete) {
    const arregloDeOpciones = opcionesAutocomplete.split(',');
    const nombreEntidad = arregloDeOpciones[0];
    const nombreAtributo = arregloDeOpciones[1];
    return `
            <!--${nombre}-->
            <div class="col-sm-6 ${claseContenedor}" *ngIf="!configuracionDisabled.${nombreCampo}.hidden">
                <div class="row">
                    <label class="col-sm-4 ${claseLabel}" [for]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput">{{
                        ${nombreClase}.mensajesValidacion${nombreCampo}.nombreAPresentarse }}</label>
                    <div class="col-sm-8">
                        <p-autoComplete
                            [inputId]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                            inputStyleClass="${claseAutoComplete}"
                            autoHighlight="true"
                            [dropdown]="true"
                            [emptyMessage]="NO_EXISTEN_REGISTROS"
                            [formControlName]="${nombreClase}.mensajesValidacion${nombreCampo}.nombreInput"
                            [suggestions]="objetoVariablesGlobales.${nombre}s"
                            (completeMethod)="buscar${nombreEntidad}s($event)"
                            [placeholder]="${nombreClase}.mensajesValidacion${nombreCampo}.tooltip"
                            delay="1000"
                            field="${nombreAtributo}">
                                <ng-template let-${nombre} pTemplate="item">
                                    {{ ${nombre} | json }}
                                </ng-template>
                        </p-autoComplete>
                    </div>
                    <div class="col-sm-12">
                        <div class="${claseMensajes}" role="alert"
                            *ngIf="${nombreClase}.mensajesValidacion${nombreCampo}.mensajes.length>0">
                            <div *ngFor="let mensaje of ${nombreClase}.mensajesValidacion${nombreCampo}.mensajes">{{ mensaje }}</div>
                        </div>
                    </div>
                </div>
            </div>               
`
}


interface ArgumentosCampoInteraface {
    required: string | boolean;
    email: string | boolean;
    nombre: string | boolean;
    nombreAPresentarse: string | boolean;
    ejemplo: string | boolean;
    tooltip: string | boolean;
    minLength: string | boolean;
    maxLength: string | boolean;
    min: string | boolean;
    max: string | boolean;
    patternMensaje: string | boolean;
    tipoControl: {
        tipoCampoHtml: string;
        tipo: string | boolean;
        opcionesSelect?: string;
        autocompleteBusqueda?: string;
    },
    mascara: string | boolean;
    mascaraCurrency: string;
    mascaraFuncion: string | boolean;
    pattern: string | boolean;
}