import {<%= nombreSoloMayusculas %>_CAMPO_TEXTO_NOMBRE} from './<%= nombreGuiones %>-campo-texto-nombre';

export const <%= nombreSoloMayusculas %>_FORMULARIO: (claseComponente: ModalComponente) => CampoFormulario[] =
  (claseComponente: ModalComponente) => {
    return [
        <%= nombreSoloMayusculas %>_CAMPO_TEXTO_NOMBRE(claseComponente),
    ];
  };
