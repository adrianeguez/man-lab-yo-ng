<% if(esFormulario) { %>
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';
<% } else{ %>
<% } %>

export const <%= nombreSoloMayusculas %><%= esFormulario ? '' : '_BUSQUEDA' %>_CAMPO_PASSWORD_<%= nombreCampoSoloMayusculas %>:(
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
    tipoCampoHtml: 'password',
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
    nombreCampo: '<%= nombrePrefijo ? nombrePrefijo + nombreCampoMayuscula : nombreCampoCamel %>',
    nombreMostrar: '<%= nombreCampoEspacioMayuscula %>',
    textoAyuda: 'Ingresa <%= nombreCampoEspacioMayuscula %>',
    placeholderEjemplo: 'Ej: ***********',
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
