import {SERVICIO_LOGISTICO_CAMPO_TEXTO_NOMBRE} from './servicio-logistico-campo-texto-nombre';

export const SERVICIO_LOGISTICO_FORMULARIO: (claseComponente: ModalComponente) => CampoFormulario[] =
  (claseComponente: ModalComponente) => {
    return [
        SERVICIO_LOGISTICO_CAMPO_TEXTO_NOMBRE(claseComponente),
    ];
  };
