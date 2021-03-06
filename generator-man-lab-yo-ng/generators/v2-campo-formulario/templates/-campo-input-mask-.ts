
export const <%= nombreSoloMayusculas %>_CAMPO_INPUT_MASK_<%= nombreCampoSoloMayusculas %>: (
    // SOLO USO SI ES FORMULARIO
    // claseComponente: ModalComponente) => CampoFormulario =
    // (claseComponente: ModalComponente<Ruta<%= nombreSoloMayusculas %>Component, <%= nombreSoloMayusculas %>Interface, <%= nombreSoloMayusculas %>BusquedaDto>) => {
    claseComponente: any) => CampoFormulario = (claseComponente: any) => {

  // SOLO USO SI ES FORMULARIO
  // let valorCampo = claseComponente
  //     .data
  //     .componente
  //     ._sRuta<%= nombreSoloMayusculas %>Service
  //     .setearCampoEnFormulario(
  //         claseComponente,
  //         '_sRuta<%= nombreSoloMayusculas %>Service',
  //         '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>'
  //     );

  // SOLO USO SI ES FORMULARIO && Es campo del que dependen
  // const camposDependienteNoExisten = !claseComponente.data.componente.camposRequeridos.nombreCampo;
  // if (camposDependienteNoExisten) {
  //   valorCampo = undefined;
  // }

  // SOLO USO SI ES FORMULARIO && Es campo dependiente
  // const validators = [];
  // if (claseComponente.data.componente.camposRequeridos.nombreCampo) {
  //   validators.push(Validators.required);
  // }

  return {
    tipoCampoHtml: 'inputMask',
    valorInicial: '',
    // SOLO USO SI ES FORMULARIO
    // valorInicial: valorCampo,
    valorActual: '',
    hidden: false,
    // SOLO USO SI ES FORMULARIO && Es campo dependiente
    // hidden: !claseComponente.data.componente.camposRequeridos.nombreCampo,
    tamanioColumna: 6,
    // SOLO USO SI ES FORMULARIO && Es campo del que dependen
    // tamanioColumna: claseComponente.data.componente.camposRequeridos.nombreCampo ? 6 : 12,
    validators: [
      // Validators.required,
      // Validators.minLength(2),
      // Validators.maxLength(10),
      // Validators.min(0),
      // Validators.max(100),
      // Validators.email,
      // Validators.pattern()
    ],
    // SOLO USO SI ES FORMULARIO && Es campo dependiente
    // validators,
    estaValido: false,
    // SOLO USO SI ES FORMULARIO
    // estaValido: valorCampo ? true : false,
    disabled: false,
    asyncValidators: null,
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %>',
    textoAyuda: 'Ingresa <%= nombreCampoEspacioMayuscula %>.',
    placeholderEjemplo: 'Ej: ...',
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: '<%= nombreCampoEspacioMayuscula %>',
      // minlength: 11,
    },
    inputMask: {
      mask: '99-99999999',
      slotChar: '_',
      characterPattern: [],
      fnValidar: (campo, componente) => {
        // const numeros = campo.replaceAll('_', '').replaceAll('-', '');
        // return numeros.length >= 10;
        return true;
      }
    },
    componente: claseComponente,
    formulario: {},
  };
};
