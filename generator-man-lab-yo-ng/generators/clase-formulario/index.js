var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la clase formulario EJ: EmpresaYEcuatoriana'
        }
    }
}
const TEMPLATES = {
    ENTITY: 'clase-formulario.ts'
}

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
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

        const nombre = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreMinuscula = camelToDash(nombre);
        // const nombreEntityPrivado = capitalizeFirstLetter(nombreEntity);

        const template = this.templatePath(TEMPLATES.ENTITY);
        const destino = this.destinationPath(`${nombreMinuscula}-formulario.ts`);
        const variables = {
            nombre
        };

        this.fs.copyTpl(
            template,
            destino,
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
        this.log(`Clase formulario ${nombre} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

