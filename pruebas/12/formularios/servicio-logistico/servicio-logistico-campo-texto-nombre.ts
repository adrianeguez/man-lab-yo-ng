import {Validators} from '@angular/forms';
import {RutaServicioLogisticoComponent} from '../../ruta/ruta-servicio-logistico/ruta-servicio-logistico.component';
import {ServicioLogisticoInterface} from '../../interfaces/servicio-logistico.interface';
import {ServicioLogisticoBusquedaDto} from '../../dto/servicio-logistico-busqueda.dto';

export const SERVICIO_LOGISTICO_CAMPO_TEXTO_NOMBRE: (
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
      nombreMostrar: 'Nombre',
      textoAyuda: 'Escriba un nombre.',
      placeholderEjemplo: 'Ej: Nombre ...',
      mensajes: MENSAJES_ERROR(claseComponente),
      parametros: {
        nombreCampo: 'Nombre',
        minlength: 10,
        maxlength: 60,
      },
      formulario: {},
      componente: claseComponente,
    };
  };
