<% if(esFormulario) { %>
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
<% } else{ %>
<% } %>

export const <%= nombreSoloMayusculas %>_CAMPO_SELECT_<%= nombreCampoSoloMayusculas %>: (
    <% if(esFormulario) { %>
    claseComponente: ModalComponente) => CampoFormulario =
    (claseComponente: ModalComponente<Ruta<%= nombreMayuscula %>Component, <%= nombreMayuscula %>Interface, <%= nombreMayuscula %>BusquedaDto>) => {
    <% } else{ %>
    claseComponente: any) => CampoFormulario = (claseComponente: any) => {
    <% } %>

<% if(esFormulario) { %>
    const valorCampo = claseComponente
        .data
        .componente
        ._sRuta<%= nombreMayuscula %>Service
        .setearCampoEnFormulario(
            claseComponente,
            '_sRuta<%= nombreMayuscula %>Service',
            '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>'
        );
    <% } else{ %>
    <% } %>

    // SOLO USO SI ES FORMULARIO && Es campo del que dependen
    // const camposDependienteNoExisten = !claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>;
    // if (camposDependienteNoExisten) {
    //   valorCampo = undefined;
    // }

<% if(esDependiente) { %>
    //SOLO USO SI ES FORMULARIO && Es campo dependiente
    const validators = [];
    if (claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>) {
        validators.push(Validators.required);
    }
    <% } else{ %>
    // SOLO USO SI ES FORMULARIO && Es campo dependiente
    // const validators = [];
    // if (claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>) {
    //   validators.push(Validators.required);
    // }
    <% } %>


  return {
    tipoCampoHtml: 'select',
      <% if(esFormulario) { %>
    valorInicial: valorCampo,
    <% } else{ %>
    valorInicial: '',
    <% } %>
    valorActual: '',
    <% if(esDependiente) { %>
    // hidden: false,
    // SOLO USO SI ES FORMULARIO && Es campo dependiente
    hidden: !claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>,
    <% } else{ %>
    hidden: false,
        // SOLO USO SI ES FORMULARIO && Es campo dependiente
        // hidden: !claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>,
    <% } %>
    tamanioColumna: 6,
    // SOLO USO SI ES FORMULARIO && Es campo del que dependen
    // tamanioColumna: claseComponente.data.componente.camposRequeridos.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %> ? 6 : 12,
    <% if(esDependiente) { %>
    // validators: [
    //   // Validators.required,
    //   // Validators.minLength(2),
    //   // Validators.maxLength(10),
    //   // Validators.min(0),
    //   // Validators.max(100),
    //   // Validators.email,
    //   // Validators.pattern()
    // ],
    // SOLO USO SI ES FORMULARIO && Es campo dependiente
    validators,
    <% } else{ %>

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
    <% } %>
<% if(esFormulario) { %>
    estaValido: valorCampo ? true : false,
    <% } else{ %>
    estaValido: true,
    <% } %>
    disabled: false,
    asyncValidators: null,
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %>',
    textoAyuda: 'Seleccione <%= nombreCampoEspacioMayuscula %>.',
    placeholderEjemplo: 'Ej: ' +
      <% for (let campo of arregloOpciones) {%>
        '<%= campo.nombre %> / ' +
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
      placeholderFiltro: 'Filtre por Ej:' +
      <% for (let campo of arregloOpciones) {%>
      '<%= campo.filtro %> ' +
      <% } %>
      '',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
      fnMostrarEnSelect: (campo: { <%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>: any <%= undefinedValor ? '| undefined' : '' %> }) => {
        <% if(undefinedValor) {%>
          if (campo.<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %> === undefined) {
            return '<%= undefinedValor %>';
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
