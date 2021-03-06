
import {SERVICIO_LOGISTICO_CAMPO_TEXTO_BUSQUEDA} from './servicio-logistico-campo-texto-busqueda';
import {SERVICIO_LOGISTICO_CAMPO_SELECT_HABILITADO} from './servicio-logistico-campo-select-habilitado';


export const SERVICIO_LOGISTICO_FORMULARIO_BUSQUEDA: (claseComponente: any) => CampoFormulario[] = (claseComponente: any) => {
  return [
    SERVICIO_LOGISTICO_CAMPO_TEXTO_BUSQUEDA(claseComponente),
    SERVICIO_LOGISTICO_CAMPO_SELECT_HABILITADO(claseComponente)
  ];
};
