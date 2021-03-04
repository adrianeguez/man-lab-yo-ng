import {Validators} from '@angular/forms';
import {RutaServicioLogisticoComponent} from '../../ruta/ruta-servicio-logistico/ruta-servicio-logistico.component';
import {ServicioLogisticoInterface} from '../../interfaces/servicio-logistico.interface';
import {ServicioLogisticoBusquedaDto} from '../../dto/servicio-logistico-busqueda.dto';

export const CAMPO_NOMBRE: (
  claseComponente: ModalComponente) => CampoFormulario =
  (claseComponente: ModalComponente<RutaServicioLogisticoComponent, ServicioLogisticoInterface, ServicioLogisticoBusquedaDto>) => {
    const valorCampo = claseComponente
      .data
      .componente
      ._sRutaServicioLogisticoService
      .setearCampoEnFormulario(
        claseComponente,
        '_sRutaServicioLogisticoService',
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
      componente: claseComponente,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(60)
      ],
      asyncValidators: null,
      valorInicial: valorCampo,
      nombreCampo: 'nombre',
      nombreMostrar: 'Nombre',
      textoAyuda: 'Escriba un nombre.',
      placeholderEjemplo: 'Ej: Nombre ...',
      formulario: {},
      mensajes: MENSAJES_ERROR(claseComponente),
      parametros: {
        nombreCampo: 'Nombre',
        minlength: 10,
        maxlength: 60,
      },
      estaValido: valorCampo ? true : false,
      hidden: false,
      tipoCampoHtml: 'text',
      valorActual: '',
      tamanioColumna: 6,
      disabled: false
    };
  };
