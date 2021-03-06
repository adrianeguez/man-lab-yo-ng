
export const <%= nombreSoloMayusculas %>_CAMPO_<%= nombreCampoSoloMayusculas %>_BUSQUEDA: (
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
    tipoCampoHtml: 'select',
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
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %> Búsqueda',
    textoAyuda: 'Selecciona un tipo de búsqueda Mayor, Menor, Mayor o igual, Menor o igual o Igual.',
    placeholderEjemplo: 'Ej: > o < o >= o <= o =',
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: '<%= nombreCampoEspacioMayuscula %> Búsqueda',
    },
    select: {
      valoresSelect: [
        {
        <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda.Igual
        },
        {
          <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda.MenorOIgual
        },
        {
          <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda.Menor
        },
        {
          <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda.MayorOIgual
        },
        {
          <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda.Mayor
        },
      ],
      placeholderFiltro: 'Filtre por Tipo Búsqueda Ej: > o < o >= o <= o =',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda',
      fnMostrarEnSelect: (campo: { <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda: Busqueda | undefined }) => {
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda === Busqueda.Igual) {

          return 'Igual';
        }
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda === Busqueda.Mayor) {

          return 'Mayor';
        }
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda === Busqueda.MayorOIgual) {

          return 'Mayor o Igual';
        }
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda === Busqueda.Menor) {

          return 'Menor';
        }
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda === Busqueda.MenorOIgual) {

          return 'Menor o Igual';
        }
        return '';
      },
      campoSeleccionado: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>Busqueda'
    },
    formulario: {},
    componente: claseComponente,
  };
};
