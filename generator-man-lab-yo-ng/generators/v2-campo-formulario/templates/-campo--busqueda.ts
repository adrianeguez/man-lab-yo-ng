<% if(esFormulario) { %>
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
<% } else{ %>
<% } %>

export const <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_<%= nombreCampoSoloMayusculas %>_BUSQUEDA: (
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
    estaValido: valorCampo ? true : false, // Si es un campo opcional debe ser siempre 'true'
    <% } else{ %>
    estaValido: true,
    <% } %>
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
