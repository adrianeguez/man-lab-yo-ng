
import {<%= nombreSoloMayusculas %>_CAMPO_BUSQUEDA} from './<%= nombreGuiones %>-campo-busqueda';
import {<%= nombreSoloMayusculas %>_CAMPO_HABILITADO} from './<%= nombreGuiones %>-campo-habilitado';


export const <%= nombreSoloMayusculas %>_FORMULARIO_BUSQUEDA: (claseComponente: any) => CampoFormulario[] = (claseComponente: any) => {
  return [
    <%= nombreSoloMayusculas %>_CAMPO_BUSQUEDA(claseComponente),
    <%= nombreSoloMayusculas %>_CAMPO_HABILITADO(claseComponente)
  ];
};
