import {CAMPO_NOMBRE} from './campo-<%= nombreGuiones %>-nombre';

export const FORMULARIO_<%= nombreSoloMayusculas %>: (claseComponente: ModalComponente) => CampoFormulario[] =
  (claseComponente: ModalComponente) => {
    return [
        CAMPO_NOMBRE(claseComponente),
    ];
  };
