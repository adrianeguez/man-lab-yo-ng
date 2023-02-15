import {CampoFormulario} from '@manticore-labs/ng-2021';

export const <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_SELECT_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
  return {
    hidden: false,
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: '',
    nombreCampo: '<%= nombreHabilitado %>',


    <% if(internacionalizar) { %>
    nombreMostrar: 'formularios.busqueda.campoHabilitado.nombreMostrar',
    <% } else{ %>
    nombreMostrar: 'Habilitado',
    <% } %>

  <% if(internacionalizar) { %>
    textoAyuda: 'formularios.busqueda.campoHabilitado.textoAyuda',
    <% } else{ %>
    textoAyuda: 'Filtra por habilitado.',
    <% } %>

  <% if(internacionalizar) { %>
    placeholderEjemplo: 'formularios.busqueda.campoHabilitado.placeholderEjemplo',
    <% } else{ %>
    placeholderEjemplo: 'Ej: Activo / Inactivo',
    <% } %>



    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
    <% if(internacionalizar) { %>
      nombreCampo: 'formularios.busqueda.campoHabilitado.nombreMostrar',
      <% } else{ %>
      nombreCampo: 'Habilitado',
      <% } %>
    },
    estaValido: true,
    tipoCampoHtml: 'select',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false,
    select: {
      valoresSelect: [
        {
        <%= nombreHabilitado %>: ActivoInactivo.Activo
        },
        {
        <%= nombreHabilitado %>: ActivoInactivo.Inactivo
        },
        {
        <%= nombreHabilitado %>: undefined
        },
      ],

      <% if(internacionalizar) { %>
      placeholderFiltro: 'formularios.busqueda.campoHabilitado.placeholderFiltro',
      <% } else{ %>
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      <% } %>

     <% if(internacionalizar) { %>
      mensajeFiltroVacio: 'formularios.busqueda.campoHabilitado.mensajeFiltroVacio',
      <% } else{ %>
      mensajeFiltroVacio: 'No se encontró',
      <% } %>


      campoFiltrado: '<%= nombreHabilitado %>',
      fnMostrarEnSelect: (campo: { <%= nombreHabilitado %>: ActivoInactivo | undefined }) => {
        if (campo.<%= nombreHabilitado %> === undefined) {

          <% if(internacionalizar) { %>
            return 'formularios.busqueda.campoHabilitado.opcionTodos';
          <% } else{ %>
            return 'Todos';
          <% } %>


        }
        if (campo.<%= nombreHabilitado %> === ActivoInactivo.Activo) {
          <% if(internacionalizar) { %>
          return 'formularios.busqueda.campoHabilitado.opcionActivo';
          <% } else{ %>
          return 'Activo';
          <% } %>
        }
        if (campo.<%= nombreHabilitado %> === ActivoInactivo.Inactivo) {
          <% if(internacionalizar) { %>
          return 'formularios.busqueda.campoHabilitado.opcionInactivo';
          <% } else{ %>
          return 'Inactivo';
          <% } %>
        }
        return '';
      },
      campoSeleccionado: '<%= nombreHabilitado %>'
    }
  };
};
