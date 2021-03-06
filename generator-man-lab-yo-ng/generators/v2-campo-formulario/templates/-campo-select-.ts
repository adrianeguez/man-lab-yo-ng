
export const <%= nombreSoloMayusculas %>_CAMPO_SELECT_<%= nombreCampoSoloMayusculas %>: (
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
    hidden: false,
    validators: [
        // Validators.required,
    ],
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %>',
    textoAyuda: 'Seleccione <%= nombreCampoEspacioMayuscula %>.',
    placeholderEjemplo: 'Ej: ' +
      <% for (let campo of arregloOpciones) {%>
        '<%= campo.nombre %> ' +
        <% } %>
      '',
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: '<%= nombreCampoEspacioMayuscula %>',
    },
    select: {
      valoresSelect: [
        <% for (let campo of arregloOpciones) {%>
            {
              <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>: <%- campo.valor %>
            },
        <% } %>
       <% if(undefinedValor) {%>
            {
              <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>: undefined
            },
      <% } %>
      ],
      placeholderFiltro: 'Filtre por Activo Ej:' +
      <% for (let campo of arregloOpciones) {%>
      '<%= campo.filtro %> ' +
      <% } %>
      '',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
      fnMostrarEnSelect: (campo: { <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>: any <%= undefinedValor ? '| undefined' : '' %> }) => {
        <% if(undefinedValor) {%>
          if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %> === undefined) {
            return undefinedValor;
          }
        <% } %>
       <% for (let campo of arregloOpciones) {%>
        if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %> === <%- campo.valor %>) {
          return '<%= campo.nombre %>';
        }
        <% } %>
        return '';
      },
        campoSeleccionado: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>'
    },
    formulario: {},
    componente: claseComponente,
  };
};
