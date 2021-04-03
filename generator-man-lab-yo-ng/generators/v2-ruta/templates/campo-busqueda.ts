import {CampoFormulario} from '@manticore-labs/ng-2021';

export const <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_TEXTO_BUSQUEDA: (claseComponente: Ruta<%= nombreMayuscula %>Component) => CampoFormulario = (claseComponente: Ruta<%= nombreMayuscula %>Component) => {
  return {
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: undefined,
    nombreCampo: '<%= !esFirebase ? "busqueda" : "__busquedaGlobal" %>',

      <% if(internacionalizar) { %>
      nombreMostrar: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.nombreMostrar',
      <% } else{ %>
      nombreMostrar: 'Búsqueda',
      <% } %>

    <% if(internacionalizar) { %>
      textoAyuda: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.textoAyuda',
      <% } else{ %>
      textoAyuda: 'Busca por nombre.',
      <% } %>

    <% if(internacionalizar) { %>
      placeholderEjemplo: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.placeholderEjemplo',
      <% } else{ %>
      placeholderEjemplo: 'Ej: ...',
      <% } %>


    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
    <% if(internacionalizar) { %>
      nombreCampo: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.nombreMostrar',
      <% } else{ %>
      nombreCampo: 'Búsqueda',
      <% } %>
    },
    estaValido: true,
    hidden: false,
    tipoCampoHtml: 'text',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false
  };
};
