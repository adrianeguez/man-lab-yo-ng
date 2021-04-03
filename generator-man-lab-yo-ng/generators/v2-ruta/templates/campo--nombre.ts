import {Validators} from '@angular/forms';
import {CampoFormulario, ModalComponente} from '@manticore-labs/ng-2021';
import {Ruta<%= nombreMayuscula %>Component} from '../../ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {<%= nombreMayuscula %>Interface} from '../../interfaces/<%= nombreGuiones %>.interface';
import {<%= nombreMayuscula %>BusquedaDto} from '../../dto/<%= nombreGuiones %>-busqueda.dto';

export const <%= nombreSoloMayusculas %>_CAMPO_TEXTO_NOMBRE: (
  claseComponente: ModalComponente) => CampoFormulario =
  (claseComponente: ModalComponente<Ruta<%= nombreMayuscula %>Component, <%= nombreMayuscula %>Interface, <%= nombreMayuscula %>BusquedaDto>) => {
    const valorCampo = claseComponente
      .data
      .componente
      ._sRuta<%= nombreMayuscula %>Service
      .setearCampoEnFormulario(
        claseComponente,
        '_sRuta<%= nombreMayuscula %>Service',
        'nombre'
      );

    // Habilitar si necesita modificar otros campos

    // if (!claseComponente.data.componente.camposRequeridos.artAnchoMedida) {
    //   valorCampo = undefined;
    // }

    // En el campo a ser modificado poner esto y modificarlo dependiendo el caso:

    // const validators = [];
    // if (claseComponente.data.componente.camposRequeridos.artAnchoMedida) {
    //   validators.push(Validators.required);
    // }

    return {
      tipoCampoHtml: 'text',
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
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(60)
        // Validators.min(0),
        // Validators.max(100),
        // Validators.email,
        // Validators.pattern()
      ],
      // SOLO USO SI ES FORMULARIO && Es campo dependiente
      // validators,
      estaValido: valorCampo ? true : false,
      disabled: false,
      asyncValidators: null,
      nombreCampo: 'nombre',

        <% if(internacionalizar) { %>
    nombreMostrar: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.nombreMostrar',
    <% } else{ %>
    nombreMostrar: 'Nombre',
    <% } %>

  <% if(internacionalizar) { %>
    textoAyuda: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.textoAyuda',
    <% } else{ %>
    textoAyuda: 'Escriba un nombre.',
    <% } %>

  <% if(internacionalizar) { %>
    placeholderEjemplo: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.placeholderEjemplo',
    <% } else{ %>
    placeholderEjemplo: 'Ej: Nombre ...',
    <% } %>


      mensajes: MENSAJES_ERROR(claseComponente),
      parametros: {
    <% if(internacionalizar) { %>
      nombreCampo: 'formularios.busqueda.campo<%= nombreCampoMayuscula %>.nombreMostrar',
      <% } else{ %>
      nombreCampo: 'Nombre',
      <% } %>
        minlength: 10,
        maxlength: 60,
      },
      formulario: {},
      componente: claseComponente,
    };
  };
