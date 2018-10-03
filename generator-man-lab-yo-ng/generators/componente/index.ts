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
const transpiladorTs = require('ts-node')
const vm = require('vm');

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
}

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
            directorio: this.destinationRoot(),
            pathArchivo: function () { return this.directorio + this.nombre },
            pathNuevoArchivo: function () { return this.directorio + this.nombreNuevoArchivo },
        };

        // opciones
        const opciones = {
            toaster: this.options.toaster,
            prefix: this.options.prefix,
        }







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
                    propiedadesACrearse.push({ nombre: propiedad.name, tipo: propiedad.type })
                }
            );
        console.log('propiedadesACrearse', propiedadesACrearse)


        let contenidoCabeceraArchivo = `
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ConfiguracionDisabledInterfaz, encerarFormBuilder, generarCampos, generarEmiteEmpezoTipear, generarMensajesFormGroup, establecerCamposDisabled} from 'man-lab-ng';${opciones.toaster ? "\nimport {ToasterService} from 'angular2-toaster';" : ""}
import {${nombreClase}} from './${nombreClaseCamel}';
import {${nombreClase}Formulario} from './${nombreClaseCamel}-formulario';
import {debounceTime} from 'rxjs/operators';
`;

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

    mensajeToaster = '';

    objetoVariablesGlobales: ObjetoVariablesGlobales${nombreClase} = {
        // llenar con objetos variables globales
    };

    constructor(private _formBuilder: FormBuilder,
        ${opciones.toaster ? 'private _toasterService: ToasterService,' : ''}) {

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

                    console.info(this.${nombreClaseCamel}.formGroup);

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
        return this.validarEjemplo(); // Aqui use para otras validaciones
    }

    validarEjemplo() {
        return true; // Implementacion de validacion ejemplo
    }
}

interface ObjetoVariablesGlobalesFunda {
    // llenar con objetos de validacion globales
}
`
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





        


        propiedadesACrearse
            .forEach(
                (propiedad: PropiedadesConstructor) => {
                    const objeto = encontrarContenidoJSONPorNombre(capitalizeFirstLetter(propiedad.nombre), parser.texto)
                    const nombre = propiedad.nombre;
                    const tipo = propiedad.tipo;
                    const nombreCampo = capitalizeFirstLetter(nombre);
                    const nombreCampoDash = camelToDash(nombreCampo);

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
            )
        constructorFormulario = constructorFormulario + '        );';
        interfaceConfiguracion = interfaceConfiguracion + '}';
        interfaceConfiguracionFuncion = interfaceConfiguracionFuncion + `
    };
};`

        const contenidoCompleto = contenidoCabeceraArchivo
            + contenidoArchivo
            + constructorFormulario
            + contenidoArchivoOnInitFin
            + interfaceConfiguracion
            + interfaceConfiguracionFuncion;

        console.log('contenidoCompleto', contenidoCompleto);

        const respuesta = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'confirmacion',
                    message: '¿Están correctos los cambios?'
                }
            ])
        if (respuesta.confirmacion) {
            fs.writeFileSync(archivo.pathNuevoArchivo(), contenidoCompleto, 'utf-8');
            this.log(`Archivo ${archivo.nombreNuevoArchivo} creado :)`);

        } else {

        }

        /*

        const source = "class Usuario{nombre:string='Adrian' constructor(){} pene(){ return hola()} } function hola(){return 'culebreo'}";

        let result = ts.transpileModule(source, {
            compilerOptions: { module: ts.ModuleKind.CommonJS }
        });
        var usuario;

        */

        // const resultado = JSON.stringify();
        // console.log(resultado);
        // console.log('result.outputText', result.outputText)
        // const vmResult = vm.runInThisContext(result.outputText + ' usuario = Usuario;');
        // console.log('vmResult:', vmResult);


        // console.log(new global.usuario().pene());
        // console.log(usuario);

        // console.log(new pene());

        // const adrian = new global["Usuario"]();
        // console.log(global.Usuario);


        /*
        // Obteniendo parametros
        const constructor = archivoParseado.declarations[0].ctor;
        const propiedadesACrearse: PropiedadesConstructor[] = [];
        constructor
            .parameters
            .forEach(
                (propiedad) => {
                    propiedadesACrearse.push({ nombre: propiedad.name, tipo: propiedad.type })
                }
            );

        // Crear clase
        const espaciadoConstructor = '        ';
        let textoClase = ''
        const nuevasPropiedades = propiedadesACrearse.forEach(
            (propiedad) => {
                textoClase = textoClase + `public ${propiedad.nombre}?: ${propiedad.tipo},\n` + espaciadoConstructor
            }
        )
        const nuevaClase = `
export class ${nombreClase}{
    constructor(
        ${textoClase}
    ){
    }
}`
        // escribir archivo

        fs.writeFileSync(archivo.directorio + `/${nombreClaseDash}.ts`, nuevaClase, 'utf-8');
        */
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
                const contenidoFinal = string.slice(posicionFinal, string.length)
                string = contenidoInicial + contenidoFinal;
                contador++;
            }
        }
    )
    return string;
}


interface PropiedadesConstructor { nombre: string; tipo: string }


function encontrarContenidoJSONPorNombre(nombreEnMayuscula, archivo) {
    const contenidoInicial = {
        contenido: `// empiezaArgumentos${nombreEnMayuscula} - NO BORRAR ESTA LINEA`,
        tamano: function () { return this.contenido.length - 1 }
    }
    const contenidoFinal = {
        contenido: `// terminaArgumentos${nombreEnMayuscula} - NO BORRAR ESTA LINEA`,
        tamano: function () { return this.contenido.length - 1 }
    }

    const archivoObjeto = {
        indiceInicial: archivo.indexOf(contenidoInicial.contenido),
        indiceFinal: archivo.indexOf(contenidoFinal.contenido),
    }

    const parseo = {
        eliminarInicio: 'let argumentos:any = ',
        eliminarFin: ';',
        contenido: function () {
            return archivo.slice(
                archivoObjeto.indiceInicial + contenidoInicial.tamano() + 1,
                archivoObjeto.indiceFinal
            )
                .replace(this.eliminarInicio, '')
                .replace(this.eliminarFin, '')
        }
    }
    return JSON.parse(parseo.contenido());
}