
import {<%= nombreSoloMayusculas %>_CAMPO_TEXTO_BUSQUEDA} from './<%= nombreGuiones %>-campo-texto-busqueda';
import {<%= nombreSoloMayusculas %>_CAMPO_SELECT_HABILITADO} from './<%= nombreGuiones %>-campo-select-habilitado';


export const <%= nombreSoloMayusculas %>_FORMULARIO_BUSQUEDA: (claseComponente: any) => CampoFormulario[] = (claseComponente: any) => {
  return [
    <%= nombreSoloMayusculas %>_CAMPO_TEXTO_BUSQUEDA(claseComponente),
    <%= nombreSoloMayusculas %>_CAMPO_SELECT_HABILITADO(claseComponente)
  ];
};
