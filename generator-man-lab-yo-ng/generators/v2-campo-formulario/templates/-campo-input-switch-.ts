<% if(esFormulario) { %>
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
<% } else{ %>
<% } %>

export const <%= nombreSoloMayusculas %>_CAMPO_INPUT_SWITCH_<%= nombreCampoSoloMayusculas %>: (
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
    tipoCampoHtml: 'inputSwitch',
      <% if(esFormulario) { %>
  valorInicial: valorCampo,
  <% } else{ %>
  valorInicial: '',
  <% } %>
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
<% if(esFormulario) { %>
  estaValido: valorCampo ? true : false,
  <% } else{ %>
  estaValido: true,
  <% } %>
    disabled: false,
    asyncValidators: null,
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %>',
    textoAyuda: 'Seleccione si o no.',
    placeholderEjemplo: 'Ej: Si/No',
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: '<%= nombreCampoEspacioMayuscula %>',
      // minlength: 2,
      // maxlength:10,
      // min:100,
      // max:0,
      // mensajePattern: 'Solo letras y espacios',
    },
    formulario: {},
    componente: claseComponente,
  };
};
