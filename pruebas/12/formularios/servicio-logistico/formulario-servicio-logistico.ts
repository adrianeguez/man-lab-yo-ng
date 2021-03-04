import {CAMPO_NOMBRE} from './campo-servicio-logistico-nombre';

export const FORMULARIO_SERVICIO_LOGISTICO: (claseComponente: ModalComponente) => CampoFormulario[] =
  (claseComponente: ModalComponente) => {
    return [
        CAMPO_NOMBRE(claseComponente),
    ];
  };
